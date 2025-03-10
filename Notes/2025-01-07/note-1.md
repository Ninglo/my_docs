用 “套公式” 的思路提升你的  AI  回答质量 
---
# 背景

我们经常会发现，在使用 AI 完成那些尤其相对复杂的需求时，不同人向 AI 的提问会获得完全不同的结果。大多数人向 AI 提问，只能获得一些笼统、不知所云的回复，但一些熟练使用 AI 的专家们却能获得质量相对很高的回复，切实提升了他们的生产效率，帮他们快速完成所需工作。究竟是什么导致二者巨大的区别呢？

在模型一致的情况下，最为影响回答质量的因素就是他们编写的 prompt 质量。那么如果想要提升 AI 回答质量，答案似乎也非常明显，无非就是将自己的 prompt 质量提升即可。但这并不是一个真正切实解决问题的答案，因为我们对如何提升 prompt 质量这件事根本一无所知。大家都知道好的 prompt 非常重要，那为什么有些人就能写好 prompt，有些人却不可以呢？

我觉得问题的本质其实在于大家对清晰描述需求这件事的能力有所不同。本质上， prompt 的结构或者说一些具体的用语可以因人而异，各有各的风格，但最影响一个 prompt 质量的本质特点，其实是在于你编写 prompt 时对自身需求的清晰了解程度。

试想一下，如果你在编写 prompt 的时候自己都对内心预期想要完成的功能不甚了解，只是有一个大概抽象的感知，那何谈 AI 能够理解你的想法并把它做成一个切实可行的功能实现呢？换句话说， prompt 的好坏很大程度上不取决于你编写 prompt 的技巧，而在于我们自身对我们想要让 AI 辅助完成的功能本身的了解程度。

我们经常能看到这样一种现象：很多人在描述他们的需求时，其实没法独立完成相关的内容阐述。他们一定需要进入一段对话后，才能将需求完整地描述清楚。也就是说，他们依赖外人的引导和提示才能将思路逻辑梳理清晰。在他接受别人辅助引导之前，他自己并没有对需求拥有一个明晰的认识，（需求中）可能出现的问题对他而言也并不完全确定。这种对需求的模糊也导致了 AI 对需求的不甚明了。如果一个人自己都不理解这个需求为何，那他又怎么能指望 AI 能猜测出人的所想为何呢？

这就好比我们做一道物理或者数学题：如果题中给定的条件尚不充分，那我们也只能解出来一个含有未知量的方程，而非一个精确的解。从这个思路出发，我们也可以知道，想要提升 prompt 或者说 AI 回答的质量，最主要的反而是提升我们自身理顺需求、清晰表达的能力。
与 AI 合力解决需求的过程中，我们更像是出题的一方。如果 AI 就是我们的解答者，那想让它回答出一个正确的答案，前提一定是我们能给出所有完成这个功能所需要的前提条件，也就是我们自己就要能够把功能的细节描述清晰。

这也解释了为什么很多人都无法编写出高质量 prompt：清晰一次性描述需求这项能力并不在我们绝大多数人日常工作或者生活中所需要练习的技能树之上。如果你面对的是一个人，我们完全可以走一步看一步，根据事情的发展来演进从而不断补充思路。但是对 AI 而言，如果你不想花费太多轮沟通就获得结果（此外太多轮沟通会导致上下文窗口溢出，影响 AI 回答的质量），那么面向 AI 沟通时，我们就应该补全这一项独立描述清晰需求的能力。

要注意的是，这并不是某些人独有的天赋，而更像是一个类似学科的系统分析方法，只要掌握了其中的逻辑和技巧，每个人都能够让自己的体系化思考能力变强。我们只是并未像学习数学物理一般普遍系统的学习它而已。

达成了这个认识之后，我们就可以去思考如何更体系化地构建我们这些知识。那哪些工作方向或者行业更倾向于使用这种结构化分析的技巧呢？至少就我所知，在软件开发行业这种分析模型是非常普遍的。换句话说，我们可以学习一些基础的软件工程知识，就可以帮助我们提升这种结构化系统描述需求的能力，进而在编写 prompt 获得更好的 AI 回答质量上有不错的改善。

说实话这一点也不难，因为如果你在科技行业工作，你就知道绝大多数的产品经理（也就是一群为软件设计新功能提出需求的人）都并不是计算机科班出身，他们的专业背景千奇百怪。这也说明了想一个专业的产品经理并不依赖很强的学科背景，那也就暗示了我们每个人都很有可能在快速理解一些相关的基础知识，进而辅助我们在使用 AI 上有更好的表现。

# 基础分析模式

我们还是可以以一种相对更"做题家"的视角来看待这个问题。既然有那么多非科班的人员掌握了这项技能，那就说明这个技能更像是一个系统的分析方法而非经验或者直觉这样更虚的东西。进而大概率其也可以被抽象成一些通用的结构以让人理解、学习。
这和我们带入数学物理的公式解题非常相像：我们先有一个大概的分析框架（公式），然后根据每一次特定的场景把每一个细节都填充进去就好。只是因为大家没有想到这个"公式"，所以对编写 prompt 感觉一筹莫展。我们只需要利用好一些前人整理好的公式然后应用就可以。独立开发一个新的公式当然很难，但应用显然就会简单无数倍了。

那我这里就抛砖引玉给大家一个相对最为简单的需求描述模式（另外，带上一个我自己真实使用这套模板完成的程序开发小需求作为案例），希望对大家能有一些启发。

通常来说，我个人会习惯使用这样一个模板来描述自己的需求：

1. 背景
2. 需求综述 & 功能拆解
3. 额外说明（可选）
4. 技术实现方式（可选）

## 背景
在这里，我会讲可能具体两个方向的事情：
首先是我遇到的具体问题，也就是促使我想要开发这项功能的动机是什么。理解了这一点，AI 也就更容易去猜测你想要干什么。在下方描述具体需求并不清晰时，能通过自己的一些脑补帮我们补全一些漏洞，这样能让我们的 prompt 有更强的容错性。
另外就是我们现在拥有的一些已知条件，也就是我们需要的必要背景信息。就如同物理数学公式一样，我们必须给出一些已知参数才能解出这个问题。如果你只是给出一个需求不给出具体场景的话， AI 可能只会给我们一些似是而非、非常空洞的处理思路，而并不精确，以至于没法帮我们完成太过实际的功能。

## 需求综述 & 功能拆解
如同字面意思，这一部分内容中我会把这个需求更详细地描述一遍。首先，可能我会用一两句话描述一下我现在想要做的功能具体是什么，让 AI 对我们有一个预期。如果我对这个功能如何开发足够熟悉的话，我还会把更详细的功能拆解一步步地告诉它，这样它可能就会直接生成一些可以运行的代码帮我们实现。当然，并不是所有场景下我们都能对如何实现有一个清晰的认知。如果这时候，我们至少把一个大概的综述描述出来，与 AI 一同探讨我们具体要实现哪些功能、这些功能该怎么组织。

## 额外说明（可选）
由于 AI 并不能完全感知我们的背景和需求，所以一般情况下都不能让 AI 一次就帮我们完成所有功能描述。也就是说，它还有一个版本更新修改的过程。那在这些情况下，我们可能还需要补充一些额外说明，让它不要采用某些方案，或者说明我们想要回避的事情，以及一些我们后续想到需要补充告诉 AI 的内容。这些都统一放到额外说明里面，这样能让我们的整个内容有一个相应的结构。之所以放到额外说明这个部分，是因为我个人更喜欢通过修改的模式而不是通过聊天对话追加内容与 AI 沟通。所以这个补充说明对我来说会更重要一些，但如果你觉得有必要，直接在聊天中补充也是可以的。

## 技术实现方式（可选）
通常来说，我们还是会期待 AI 帮我们通过编写程序的手段解决一些具体的问题。这时候如果你有一定的技术背景，还有一些特定的诉求的话，你也可以补充这些技术方式。如果你没有很强的技术背景的话，那不妨在这里让 AI 帮我们做一些技术选型。

# 实战

在此之后，为了方便大家理解，我们还是根据习惯补充一个我真实使用这套思维模式与模板来解决需求的例子。多提一句，这些我完成的工作肯定是解决我自己的真实需求。大家如果受到启发，之后不妨按照这种思想多发掘一些自己日常生活中可能用程序或者 AI 帮助自己解决的工作来实践，这样也会有一个更深的体会和印象。

我们拿一个实际的例子来说明这一套模型该怎么应用。为了让大家了解背景，我先简单说明一下这个程序是一个什么效果[详情见](https://www.superlinear.academy/c/91c209/blunder)：它是一个能够让我在玩国际象棋时，在每步落子前预先完成检查、培养良好下棋习惯的工具。假设我们从头开始设计和开发这个程序，我觉得第一步首先不应该是直接去问 AI 如何实现，而是说我们要先把自己的思路梳理清晰，知道我们到底要做什么。这样的话，在向 AI 寻求帮助或者填写我们上述的模板时也会有一个更高的内容质量。

对于我而言，设计这个工具本身的原因在于在长期的对局中，我发现个人下棋出现大量 blunder 的原因正在于我会很多次手快于脑子地落子，这样就让我忽略了一些可能的威胁，下出一些巨大影响比赛战局的落子。针对这个困境，我意识到想要改变这种糟糕的习惯需要有一些强制的外力来限制我做这样的事情。因而我会想到通过一个小程序来完成。

这是一个宏观的动机，下一步我们就要思考具体来说要怎么完成所谓的改变"落子早于思考"的坏习惯。经过我自己的分析，我认为首先需要培养的是一个在每次落子前固定的思考流程，这样有助于让我用一个新习惯来代替旧习惯，也就是我们刚才演示的有一个六步的 check 检查去逐条分析，是否有可能下出一些问题的落子。

既然确定了这些背景之后，我们就可以确定我们的需求为何。也就是这时候我们就可以打开一个文档来编写我们的需求，然后在这个编写的过程中进一步梳理清晰我们的目的为何。以我自己写的这个 prompt 为例：

```
# 背景
## 设计动机
在长期的国际象棋对局中，我发现我总是在下棋时出现大量的 blunder 。其主要原因在于我经常下出"手快于脑子的落子"，这样就让我忽略了一些可能的威胁。我想要改变这个坏习惯，所以需要有一些强制外力来限制我下棋过快的行为。

## 具体背景
我在使用 chess.com 的电脑版下国际象棋网棋

# 需求综述 & 功能拆解
## 综述
我想通过一个网页脚本或者类似的工具，让我在每一次轮到我的回合时，先完成必要的检查之后，再真正的落子。

## 功能拆解
1. 检查是否到我的回合，如果在我的回合，检测当下回合状态。如果轮到我的回合，首先禁止页面上的点击事件操作，禁止我落子。
2. 在网页的右上角展示一个悬浮窗，其中罗列所有我待检查的检查项列表，并且展示当下进度。
3. 通过监听键盘的回车事件更新检查的进度，每敲击一次回车视为完成一项检查。
4. 当全部检查完毕后，取消对页面的点击行为限制。

# 技术实现方式
## 技术选型
用 JavaScript 实现一个网页脚本

## 实现细节
1. 通过监听 DOM 事件来确定当前的回合状态，我们通过检查 'play-controller-moves-container' 这个类的变化来确定是否到我的回合。假设每变化两次 DOM 后会进入我方回合，在 0.3s 内的 DOM 变化统一视为一次
2. 点击禁止的功能，我们就通过在页面中放置一个透明、但占满整个屏幕的元素来实现
```

然后我们就将这个 prompt 提供给一系列的 AI 工具，让它们帮我们生成代码。在生成代码以后，粘贴到浏览器中执行检查效果。由于这个功能相对还是比较复杂，所以大概率它第一回会出现一些 bug ，我们就把我们观察到的 bug 作为补充说明提供给它即可。

然后经过几轮这样的更正之后（受限于篇幅这部分过程省略，大家可以自行尝试），通常 AI 就能给我们提供一个功能齐全、没有明显功能异常的工具小程序代码了。如此，我们就完成了一个简单工具的开发。

// 代码见 https://github.com/Ninglo/simple-scripts/tree/main/chessForceCheck

希望本文能对你有所启发和帮助。
