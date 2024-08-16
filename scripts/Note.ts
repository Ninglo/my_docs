export async function getAllNotes(path: string) {
    const notes = await readAllNotes(path);
    const parsedNotes = await parseAllNotes(notes);
    return parsedNotes;
}
export type Tag = string;
export type Status = 'VideoPublished' | 'ArticlePublished' | 'Archived';
export type Note = {
    id: string;
    tags: Tag[];
    status: Status[];
    createTime?: number;
    modifiedTime?: number;
};

async function readAllNotes(notesDir: string): Promise<string[]> {
    const noteFiles: string[] = [];

    async function readDirRecursive(dir: string) {
        const dirEntries = Deno.readDir(dir);
        for await (const entry of dirEntries) {
            const filePath = `${dir}/${entry.name}`;
            if (entry.isFile && entry.name.endsWith(".md")) {
                noteFiles.push(filePath);
            } else if (entry.isDirectory) {
                await readDirRecursive(filePath);
            }
        }
    }

    await readDirRecursive(notesDir);

    return noteFiles;
}

function extractTags(content: string): Tag[] {
    const tagRegex = /\[\[tag\/(.*?)\]\]/g;
    const tags: Tag[] = [];

    let match;
    while ((match = tagRegex.exec(content)) !== null) {
        tags.push(match[1]);
    }

    return tags;
}

function extractStatus(content: string): Status[] {
    const statusRegex = /\[\[status\/(.*?)\]\]/g;
    const status: Status[] = [];

    let match;
    while ((match = statusRegex.exec(content)) !== null) {
        status.push(match[1] as Status);
    }

    return status;
}

async function parseAllNotes(noteFiles: string[]): Promise<Note[]> {
    const parsedNotes: Note[] = [];

    for (const file of noteFiles) {
        const content = await Deno.readTextFile(file);

        const fileInfo = await Deno.stat(file);
        const createTime = fileInfo.birthtime?.getTime();
        const modifiedTime = fileInfo.mtime?.getTime();

        const note: Note = {
            id: file,
            tags: extractTags(content),
            status: extractStatus(content),
            createTime,
            modifiedTime,
        };
        parsedNotes.push(note);
    }

    return parsedNotes;
}

async function _replaceTagsInFile(filePath: string): Promise<void> {
    const tagRegex = /\[\[(?!tag\/)(.*?)\]\]/g;

    try {
        const content = await Deno.readTextFile(filePath);
        const replacedContent = content.replace(tagRegex, '[[tag/$1]]');
        await Deno.writeTextFile(filePath, replacedContent);
        console.log(`Tags replaced in file: ${filePath}`);
    } catch (error) {
        console.error(`Error replacing tags in file: ${filePath}`);
        console.error(error);
    }
}
