// deno-lint-ignore-file no-deprecated-deno-api
import * as mod from "https://deno.land/std@0.224.0/csv/mod.ts";

const now = new Date();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');
const minute = String(now.getMinutes()).padStart(2, '0');
const timeStr = `${month}_${day}_${hour}_${minute}`;

const filePath =
    "/Users/jiujianian/Downloads/15065922_202408081256144775.csv"

const dataPath = '/Users/jiujianian/Documents/my_docs/scripts/data'
const wechatNoti = `${dataPath}/output_${timeStr}.wechat.txt`
const wechatTotalNoti = `${dataPath}/output_${timeStr}.wechat.total.txt`
const outputPath = `${dataPath}/output_${timeStr}.csv`;
const outputTotalMailPath = `${dataPath}/output_${timeStr}.mail.total.txt`;
const outputMailPath = `${dataPath}/output_${timeStr}.mail.txt`;

const files = Deno.readDir(dataPath);
let lastModifiedFile: string | null = null;
let lastModifiedTime: number = 0;

for await (const file of files) {
    if (file.isFile && file.name.endsWith("mail.total.txt")) {
        const filePath = `${dataPath}/${file.name}`;
        const { mtime } = await Deno.stat(filePath);
        const modifiedTime = mtime?.getTime() || 0;

        if (modifiedTime > lastModifiedTime) {
            lastModifiedFile = filePath;
            lastModifiedTime = modifiedTime;
        }
    }
}

const lastModifiedContent = lastModifiedFile ? await Deno.readTextFile(lastModifiedFile) : '';
if (lastModifiedFile) {
    console.log("Last modified file:", lastModifiedFile);
} else {
    console.log("No file found with name ending in 'mail.txt'");
}

async function readCSV(filePath: string) {
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

const csvData = await readCSV(filePath);

const washed = csvData.map((record) => {
    const email = record["1.个人邮箱地址（用于注册社区帐号）"];
    const name = record["2.社区用户名称"];
    const wechat = record["4.微信通知"];
    const index = record["编号"];
    return { email, name, wechat, index };
}).filter(({ email, name, wechat }) => {
    if (email && name) {
        return true;
    } else {
        console.warn("Email or name is missing", { email, name, wechat });
        return false;
    }
})
const curtWashed = washed.filter(({ email }) => {
    const emails = lastModifiedContent?.split(';').map(email => email.trim()) ?? [];
    return !emails.includes(email!);
});

const wechatNeed = curtWashed.filter(({ wechat }) => {
    const trimedWechat = wechat?.trim().replace(/\t/g, "").replaceAll('	', '');
    return trimedWechat
}).map(({ email, name, wechat }) => `wechat: ${wechat}, email: ${email}, name: ${name}`).join("\n");
const wechatTotalNeed = washed.filter(({ wechat }) => {
    const trimedWechat = wechat?.trim().replace(/\t/g, "").replaceAll('	', '');
    return trimedWechat
}).map(({ email, name, wechat }) => `wechat: ${wechat}, email: ${email}, name: ${name}`).join("\n");
await Deno.writeTextFile(wechatNoti, wechatNeed);
await Deno.writeTextFile(wechatTotalNoti, wechatTotalNeed);

const csvContent = `Name,Email\n` + curtWashed.map(({ name, email }) => `${name},${email}`).join("\n");
const mailContent = curtWashed.map(({ email }) => email).join(';')
const totalMailContent = washed.map(({ email }) => email).join(';')
await Deno.writeTextFile(outputPath, csvContent);
await Deno.writeTextFile(outputMailPath, mailContent);
await Deno.writeTextFile(outputTotalMailPath, totalMailContent);

console.log("Washed data saved to", outputPath);
