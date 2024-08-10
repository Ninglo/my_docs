// deno-lint-ignore-file no-deprecated-deno-api
import * as mod from "https://deno.land/std@0.224.0/csv/mod.ts";

export async function readCSV(filePath: string) {
    const file = await Deno.open(filePath);
    const content = await Deno.readAll(file);
    Deno.close(file.rid);

    const decoder = new TextDecoder();
    const decodedContent = decoder.decode(content);

    const records = mod.parse(decodedContent, {
        skipFirstRow: true,
    });

    return records;
}
