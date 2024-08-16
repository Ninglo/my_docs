// This is a deno project

import { getAllNotes } from "./Note.ts";

async function main() {
    const key = Deno.env.get("QUERY_TAG") ? 'tags' : 'status';
    const args = Deno.args;

    const notes = await getAllNotes(Deno.cwd());

    const filteredNotes = notes.filter(note => {
        return args.every(tag => note[key].includes(tag));
    });

    // sorted by ctime or mtime
    console.log(filteredNotes.map(({ id, tags }) => ({ id, tags })));
}

main();
