const crypto = require('crypto');

/**
 * 抽奖函数
 * @param {string} seed - 随机种子
 * @param {Array<string>} userList - 用户名列表
 * @returns {string} - 中奖用户名
 */
function drawWinner(seed, userList) {
    // 创建一个基于种子的随机数生成器
    const random = seedRandom(seed);
    
    // 生成一个 0 到 userList.length - 1 之间的随机索引
    const randomIndex = Math.floor(random() * userList.length);
    
    // 返回中奖用户
    return userList[randomIndex];
}

/**
 * 基于种子的随机数生成器
 * @param {string} seed - 随机种子
 * @returns {function} - 随机数生成函数
 */
function seedRandom(seed) {
    const hash = crypto.createHash('sha256');
    hash.update(seed);
    const seedBuffer = hash.digest();
    
    let index = 0;
    return function() {
        if (index >= seedBuffer.length) {
            index = 0;
        }
        return seedBuffer[index++] / 256;
    };
}

// 示例使用
const seed = 'random-seed';
const userList = ['Alice', 'Bob', 'Charlie', 'David'];
const winner = drawWinner(seed, userList);
console.log(`中奖用户是: ${winner}`);