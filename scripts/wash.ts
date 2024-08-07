// deno-lint-ignore-file no-deprecated-deno-api
import * as mod from "https://deno.land/std@0.224.0/csv/mod.ts";

const now = new Date();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');

const filePath =
    "/Users/jiujianian/Downloads/15065922_202408072257281474.csv"
const wechatNoti = `/Users/jiujianian/Documents/my_docs/data/wechat_${month}_${day}_${hour}.txt`
const outputPath = `/Users/jiujianian/Documents/my_docs/data/washed_${month}_${day}_${hour}.csv`;
const outputMailPath = `/Users/jiujianian/Documents/my_docs/data/washed_${month}_${day}_${hour}.mail.txt`;

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
});

const wechatNeed = washed.filter(({ wechat }) => {
    const trimedWechat = wechat?.trim().replace(/\t/g, "").replaceAll('	', '');
    return trimedWechat
}).map(({ email, name, wechat }) => `wechat: ${wechat}, email: ${email}, name: ${name}`).join("\n");
await Deno.writeTextFile(wechatNoti, wechatNeed);

const csvContent = `Name,Email\n` + washed.map(({ name, email }) => `${name},${email}`).join("\n");
const mailContent = washed.map(({ email }) => email).join(';')
await Deno.writeTextFile(outputPath, csvContent);
await Deno.writeTextFile(outputMailPath, mailContent);


console.log("Washed data saved to", outputPath);
