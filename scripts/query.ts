// This is a deno project

import { getAllNotes } from "./Note.ts";

async function main() {
    const tags = Deno.args;

    const notes = await getAllNotes("/Users/jiujianian/Documents/my_docs")

    const filteredNotes = notes.filter(note => {
        return tags.every(tag => note.tags.includes(tag));
    });

    console.log(filteredNotes);
}

main();
