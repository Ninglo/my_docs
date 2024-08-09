在日常的软件开发中, 我已经完全离不开 Copilot 了. 但受限于 Copilot 本身是一个代码场景特化训练的 Agent, 其在通用领域的能力甚至还不如裸的 chatGPT. 也正因此, 在编写文章过程中需要 AI 辅助的时候, 我还是得在 VSCode 和 chatGPT 应用间来回切换, 体验非常糟糕.
因此我开发了一个插件, 以支持在 VSCode Chat UI (Quick Chat & Chat View) 中, 使用纯净的 chatGPT 而不是 Copilot 对话, 只需要在对话前输入 `@pure_gpt` 即可, 详情见下图.
欢迎大家体验并提供建议!

// 注, 插件当前依赖 Copilot 插件的安装以及订阅(但我觉得群友们应该都有吧[doge])

插件下载地址: https://marketplace.visualstudio.com/items?itemName=ninglo.pure-gpt
项目地址: https://github.com/Ninglo/pure-gpt
设计初衷: https://zhuanlan.zhihu.com/p/709066721
