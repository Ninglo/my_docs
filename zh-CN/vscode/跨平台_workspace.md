# VSCode 架构分析 - Electron 跨平台最佳实践

- 大纲
1. 背景与结构介绍
2. 核心能力分析
3. 源码详解
4. Electron 支持跨平台方案推演

- 核心
- Electron 项目跨平台（Native & Web & Remote）的实质是控制副作用（业务逻辑一致，实现语言一致），并根据目前运行平台自身底层能力向用户提供功能。
1. 严格的依赖管理
    - 依赖管理的本质是控制副作用
    1. 对运行时能力进行封装 -> 依赖注入（代数效应）
    2. 项目文件组织结构的设计
        - common (const & interface)
        - browser
        - electron-browser
        - node
2. 进程结构的抽象
    - Electron 本身有自己的进程模型，VSCode 为何还要自立一套？
    1. VSCode 进程模型（与朴素 Electron 项目比较），各进程之间的定位
    2. ipc 的封装（以及 from & to Service 功能介绍）
3. 内部的 contribute 机制 & Provider 模式
    - 为什么依赖注入不足以解决全部的功能实现插入问题？(不同平台间提供功能数量差异导致、插件需要以一个低成本的接入方式向 App 提供能力)
4. 多入口的构建体系

- 跨平台演进路径
1. 项目现状分析
    - 通常为 Client + Web 两个独立项目
    - 问题：
        * Client 本身定位尴尬，提供的能力有限
        * 与 Web 间通信交互困难，大多依赖 preloads 脚本扫 DOM 获取上下文
2. 初期转变方式
    - Client 通过暴露 API 向 Web 侧提供 Provider
    - 原因：尽量降低对 Web 的侵入性，确保项目在 Web & Electron 上均可正常使用
3. 中期
    - Client 项目 Service 化，ipc 机制封装
    - 目的：低成本的向 Web 暴露能力
4. 后期
    - Client Web 项目融合
    - 架构对齐 VSCode，后续演进亦可随时参考其实践


- Ref
- vscode server
https://code.visualstudio.com/blogs/2021/10/20/vscode-dev
https://code.visualstudio.com/blogs/2022/07/07/vscode-server
https://code.visualstudio.com/docs/remote/vscode-server
https://www.youtube.com/watch?v=sy3TUb_iVJM

- 依赖注入
https://bytedance.feishu.cn/docs/doccnbj6lyJGeg7EP0Sqx8rTLvd

- contribute
https://www.wendell.fun/posts/vscode-contrib
