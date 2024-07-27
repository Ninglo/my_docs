async function readAndExportFiles(directoryPath: string, exportBase: string) {
    const files = Deno.readDir(directoryPath);

    let index = 0;
    for await (const file of files) {
        if (file.isFile && file.name.endsWith(".json")) {
            const filePath = `${directoryPath}/${file.name}`;
            const jsonData = await Deno.readTextFile(filePath);
            const json = JSON.parse(jsonData);

            if (!json.isTrashed && !json.isArchived) {
                const title = json.title ? `# ${json.title}\n\n` : ''
                const markdownContent = `${title}${json.textContent}`;
                const markdownFilePath = `${exportBase}/note-${index + 7}.md`;
                await Deno.writeTextFile(markdownFilePath, markdownContent);
                index++;
            }
        }
    }
}

readAndExportFiles("/Users/jiujianian/Downloads/Takeout 2/Keep", '/Users/jiujianian/Documents/my_docs/2024-07-28');
