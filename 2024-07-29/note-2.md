为什么专家 debug 比我们快
1. 经验 -> 见过更多 case
2. 方法 -> 减少定位过程中的耗时

类型
- 语法错误 -> 有提示
  - 自己代码的问题：检查编译器或者 IDE 报错
  - 查看报错栈：stackoverflow
  - 还没有思路：逻辑错误
- wrong logic 困难
  - 经验
    - 10 分钟 -> 一小时
  - 定位问题
    - application -> function -> expression
    - application: 二分定位 -> n * function -> 二分 -> expression
      - case
    - 最小可复现 -> 避免每次修改代码后触发逻辑花费过多时间
  - 修复 & 验证
    - 自动化测试流程 确定异常 case -> 测试框架 -> test function
  - case 二分查找

调试工具
- debugger
  - 单进程
  - breakpoint & conditional breakpoint
- log
  - 多进程 & 异步
  - 尽量一次把关键的变量全部打印出来
