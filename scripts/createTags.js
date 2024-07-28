//@ts-check

const fs = require('fs');
const path = require('path');

const rootPath = '/Users/jiujianian/Documents/my_docs';

function createTags() {
    const files = getAllFiles(rootPath);

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const regex = /\[\[tag\/(.*?)\]\]/g;
        let match;

        while ((match = regex.exec(content)) !== null) {
            const tagName = match[1];
            if (!tagName) continue;

            const tagPath = path.join(rootPath, 'tag', tagName, '..');

            fs.mkdirSync(tagPath, { recursive: true });

            const tagFile = path.join(rootPath, 'tag', `${tagName}.md`)
            if (!fs.existsSync(tagFile)) {
                // console.log(tagFile)
                fs.writeFileSync(tagFile, '', { flag: 'a' });
            }
        }
    });
}

/**
 * @param {string} dirPath
 * @param {string[]} files
 */
function getAllFiles(dirPath, files = []) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    entries.forEach((/** @type {{ name: any; isDirectory: () => any; }} */ entry) => {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            getAllFiles(fullPath, files);
        } else {
            files.push(fullPath);
        }
    });

    return files;
}

createTags();
