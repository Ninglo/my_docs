import { readCSV } from "./readCSV.ts";

const questionCSV =
    "/Users/jiujianian/Downloads/15065922_202408100732218080.csv"
const memberCSV =
    '/Users/jiujianian/Downloads/community_superlinear_academy_207583_1723247479_member_list.csv'

const questionData = await readCSV(questionCSV);
const memberData = await readCSV(memberCSV);

const itemsOnlyInQuestion = questionData.filter((questionItem) => {
    const questionEmail = questionItem['1.个人邮箱地址（用于注册社区帐号）']
    return !memberData.some((memberItem) => {
        const memberEmail = memberItem['Email']
        return questionEmail?.toLocaleLowerCase() === memberEmail!.toLowerCase()
    });
});

const str = itemsOnlyInQuestion.map(i => ({ email: i['1.个人邮箱地址（用于注册社区帐号）'], name: i['2.社区用户名称'] })).map(({ name, email }) => `${name},${email}`).join('\n')
await Deno.writeTextFile('/Users/jiujianian/Documents/my_docs/scripts/data/ox3.csv', str)
