// This is a deno project

import { getAllNotes } from "./Note.ts";

async function main() {
    const tags = Deno.args;

    const notes = await getAllNotes(Deno.cwd());

    const filteredNotes = notes.filter(note => {
        return tags.every(tag => note.tags.includes(tag));
    });

    // sorted by ctime or mtime
    console.log(filteredNotes.map(({ id, tags }) => ({ id, tags })));
}

main();
