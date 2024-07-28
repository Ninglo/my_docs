function readMarkdownFiles(folderPath: string): string {
    const markdownFiles: string[] = [];

    function readFilesRecursively(folderPath: string) {
        const entries = Deno.readDirSync(folderPath);
        for (const entry of entries) {
            if (entry.isFile && entry.name.endsWith(".md")) {
                const fileContent = Deno.readTextFileSync(`${folderPath}/${entry.name}`);
                markdownFiles.push(fileContent);
            } else if (entry.isDirectory) {
                readFilesRecursively(`${folderPath}/${entry.name}`);
            }
        }
    }

    readFilesRecursively(folderPath);

    return markdownFiles.map((c, i) => `文章 ${i + 1}:\n\`\`\`\n${c}\n\`\`\``).join('\n\n');
}

const folderPath = "/Users/jiujianian/Documents/my_docs";
const markdownFilesContent = readMarkdownFiles(folderPath);

const filePath = `${folderPath}/prompt.txt`;
Deno.writeTextFileSync(filePath, markdownFilesContent);
