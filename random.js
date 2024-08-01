const seedrandom = require('seedrandom');
const crypto = require('crypto');

function getSha256Hash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

/**
 * 抽奖算法，输入是随机的若干字符串，输出是其中的一个值（保证概率一致）
 * @param {string[]} entries - 参与抽奖的字符串数组
 * @param {string} seed - 用于生成随机数的种子
 * @returns {string|null} - 抽中的字符串，如果输入为空则返回 null
 */
function drawLottery(entries, seed) {
    if (!Array.isArray(entries) || entries.length === 0) {
        return null; // 或者抛出错误 throw new Error("输入数组不能为空");
    }
    
    // 生成唯一字符串
    const uniqueString = seed;
    
    // 计算 SHA-256 哈希值
    const hash = getSha256Hash(uniqueString);
    
    // 将哈希值转换为数字
    const hashNumber = parseInt(hash.slice(0, 8), 16);

    // 计算随机索引
    const randomIndex = hashNumber % entries.length;

    console.log(hashNumber)
    
    return entries[randomIndex];
}

// 示例使用
const participants = ["Alice", "Bob", "Charlie", "David"];
const seed = 'fufu';
const winner = drawLottery(participants, seed);
console.log(`中奖者是: ${winner}`);