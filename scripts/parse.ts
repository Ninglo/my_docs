// This is a deno script to parse all notes in the notes folder
import { Note, Tag, getAllNotes } from "./Note.ts";

// 1. Read All Files
// 2. Parse File to Note Object
// 3. Analysis
// 4. Show output diagram

/**
 * @questions
 *  - What should I do next?
 *      - Find the top x ref tags in range of y days
 *  - Which the tag was popular, but now has been forgotten?
 *      - Total ref / Current x days' ref
 *  - What's the most important tag?
 *      - Tag with max length of content
 *  - What's the relationship between tags?
 *      - By obsidian's graph mode
 *  - WIP: What's the most important article in a specific tag?
 *  - WIP: Which the job is still not done?
 */


// - What should I do next?
//    - Find the top x ref tags in range of y days
function q1(notes: Note[], x = 5, y = 7): [Tag, number][] {
    const now = Date.now();
    const timeRange = now - y * 24 * 60 * 60 * 1000;

    const tagCount = new Map<Tag, number>();

    const notesInTimeRange = notes.filter(note => note.modifiedTime && note.modifiedTime >= timeRange);
    notesInTimeRange.forEach(note => {
        note.tags.forEach(tag => {
            tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
        });
    });

    const sortedTags = Array.from(tagCount.entries()).sort((a, b) => b[1] - a[1]);
    return sortedTags.slice(0, x);
}

// - Which the tag was popular, but now has been forgotten?
//    - With top x tags in Total ref / Current x days' ref
function q2(notes: Note[], x = 10, y = 7) {
    const now = Date.now();
    const timeRange = now - y * 24 * 60 * 60 * 1000;

    const tagCount = new Map<Tag, number>();
    const tagCountInTimeRange = new Map<Tag, number>();

    notes.forEach(note => {
        note.tags.forEach(tag => {
            tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
            if (note.createTime && note.createTime >= timeRange) {
                tagCountInTimeRange.set(tag, (tagCountInTimeRange.get(tag) || 0) + 1);
            }
        });
    });

    const forgottenTags = Array.from(tagCount.entries()).map(([tag, count]) => {
        const countInTimeRange = tagCountInTimeRange.get(tag) || 0;
        return [tag, countInTimeRange / count, count] as const;
    }).sort((a, b) => {
        if (a[1] === b[1]) {
            return b[2] - a[2];
        }
        return a[1] - b[1];
    });

    return forgottenTags.slice(0, x);
}

// *  - What's the most important tag?
// *      - Top x tag with max length of content in current y days
async function q3(notes: Note[], x = 5, y = 7): Promise<[Tag, number][]> {
    const now = Date.now();
    const timeRange = now - y * 24 * 60 * 60 * 1000;
    const validNotes = notes.filter(note => note.modifiedTime && note.modifiedTime >= timeRange);

    const tagContentLength = new Map<Tag, number>();
    await Promise.all(validNotes.map(async note => {
        const content = await Deno.readTextFile(note.id);
        const contentLength = content.length;
        note.tags.forEach(tag => {
            tagContentLength.set(tag, (tagContentLength.get(tag) || 0) + contentLength);
        });
    }));

    const sortedTags = Array.from(tagContentLength.entries()).sort((a, b) => b[1] - a[1]);
    return sortedTags.slice(0, x);
}

async function main() {
    const parsedNotes = await getAllNotes(Deno.cwd());

    const q1Answer = q1(parsedNotes).map(([tag, count]) => `  - ${tag}: ${count}`).join('\n')
    const q1AnswerStr = `- What should I do next?\n(Find the top x ref tags in range of y days)\n${q1Answer}\n`;

    const q2Answer = q2(parsedNotes).map(([tag, count, total]) => `  - ${tag}: ${count}, ${total}`).join('\n')
    const q2AnswerStr = `- Which the tag was popular, but now has been forgotten?\n(With top x tags in Total ref / Current x days' ref)\n${q2Answer}\n`

    const q3Answer = (await q3(parsedNotes)).map(([tag, count]) => `  - ${tag}: ${count}`).join('\n')
    const q3AnswerStr = `- What's the most important tag?\n(Top x tag with max length of content)\n${q3Answer}\n`;

    console.log(`${q1AnswerStr}\n${q2AnswerStr}\n${q3AnswerStr}`);
}

main()
