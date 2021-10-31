(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{400:function(t,s,a){"use strict";a.r(s);var e=a(54),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"附录-g-rust-是如何开发的与-nightly-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录-g-rust-是如何开发的与-nightly-rust"}},[t._v("#")]),t._v(" 附录 G：Rust 是如何开发的与 “Nightly Rust”")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/appendix-07-nightly-rust.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("appendix-07-nightly-rust.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 70a82519e48b8a61f98cabb8ff443d1b21962fea")])]),t._v(" "),a("p",[t._v("本附录介绍 Rust 是如何开发的以及这如何影响作为 Rust 开发者的你。")]),t._v(" "),a("h3",{attrs:{id:"无停滞稳定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无停滞稳定"}},[t._v("#")]),t._v(" 无停滞稳定")]),t._v(" "),a("p",[t._v("作为一个语言，Rust "),a("strong",[t._v("十分")]),t._v(" 注重代码的稳定性。我们希望 Rust 成为你代码坚实的基础，假如持续地有东西在变，这个希望就实现不了。但与此同时，如果不能实验新功能的话，在发布之前我们又无法发现其中重大的缺陷，而一旦发布便再也没有修改的机会了。")]),t._v(" "),a("p",[t._v("对于这个问题我们的解决方案被称为 “无停滞稳定”（“stability without stagnation”），其指导性原则是：无需担心升级到最新的稳定版 Rust。每次升级应该是无痛的，并应带来新功能，更少的 bug 和更快的编译速度。")]),t._v(" "),a("h3",{attrs:{id:"choo-choo-开车啦-逃-发布通道和发布时刻表-riding-the-trains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choo-choo-开车啦-逃-发布通道和发布时刻表-riding-the-trains"}},[t._v("#")]),t._v(" Choo, Choo! "),a("s",[t._v("（开车啦，逃）")]),t._v(" 发布通道和发布时刻表（Riding the Trains）")]),t._v(" "),a("p",[t._v("Rust 开发运行于一个 "),a("s",[t._v("车次表")]),t._v(" "),a("strong",[t._v("发布时刻表")]),t._v("（"),a("em",[t._v("train schedule")]),t._v("）之上。也就是说，所有的开发工作都位于 Rust 仓库的 "),a("code",[t._v("master")]),t._v(" 分支。发布采用 software release train 模型，其被用于思科 IOS 等其它软件项目。Rust 有三个 "),a("strong",[t._v("发布通道")]),t._v("（"),a("em",[t._v("release channel")]),t._v("）：")]),t._v(" "),a("ul",[a("li",[t._v("Nightly")]),t._v(" "),a("li",[t._v("Beta")]),t._v(" "),a("li",[t._v("Stable（稳定版）")])]),t._v(" "),a("p",[t._v("大部分 Rust 开发者主要采用稳定版通道，不过希望实验新功能的开发者可能会使用 nightly 或 beta 版。")]),t._v(" "),a("p",[t._v("如下是一个开发和发布过程如何运转的例子：假设 Rust 团队正在进行 Rust 1.5 的发布工作。该版本发布于 2015 年 12 月，不过这里只是为了提供一个真实的版本。Rust 新增了一项功能：一个 "),a("code",[t._v("master")]),t._v(" 分支的新提交。每天晚上，会产生一个新的 nightly 版本。每天都是发布版本的日子，而这些发布由发布基础设施自动完成。所以随着时间推移，发布轨迹看起来像这样，版本一天一发：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nightly: * - - * - - *\n")])])]),a("p",[t._v("每 6 周时间，是准备发布新版本的时候了！Rust 仓库的 "),a("code",[t._v("beta")]),t._v(" 分支会从用于 nightly 的 "),a("code",[t._v("master")]),t._v(" 分支产生。现在，有了两个发布版本：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nightly: * - - * - - *\n                     |\nbeta:                *\n")])])]),a("p",[t._v("大部分 Rust 用户不会主要使用 beta 版本，不过在 CI 系统中对 beta 版本进行测试能够帮助 Rust 发现可能的回归缺陷（regression）。同时，每天仍产生 nightly 发布：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nightly: * - - * - - * - - * - - *\n                     |\nbeta:                *\n")])])]),a("p",[t._v("比如我们发现了一个回归缺陷。好消息是在这些缺陷流入稳定发布之前还有一些时间来测试 beta 版本！fix 被合并到 "),a("code",[t._v("master")]),t._v("，为此 nightly 版本得到了修复，接着这些 fix 将 backport 到 "),a("code",[t._v("beta")]),t._v(" 分支，一个新的 beta 发布就产生了：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nightly: * - - * - - * - - * - - * - - *\n                     |\nbeta:                * - - - - - - - - *\n")])])]),a("p",[t._v("第一个 beta 版的 6 周后，是发布稳定版的时候了！"),a("code",[t._v("stable")]),t._v(" 分支从 "),a("code",[t._v("beta")]),t._v(" 分支生成：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nightly: * - - * - - * - - * - - * - - * - * - *\n                     |\nbeta:                * - - - - - - - - *\n                                       |\nstable:                                *\n")])])]),a("p",[t._v("好的！Rust 1.5 发布了！然而，我们忘了些东西：因为又过了 6 周，我们还需发布 "),a("strong",[t._v("新版")]),t._v(" Rust 的 beta 版，Rust 1.6。所以从 "),a("code",[t._v("beta")]),t._v(" 生成 "),a("code",[t._v("stable")]),t._v(" 分支后，新版的 "),a("code",[t._v("beta")]),t._v(" 分支也再次从 "),a("code",[t._v("nightly")]),t._v(" 生成：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nightly: * - - * - - * - - * - - * - - * - * - *\n                     |                         |\nbeta:                * - - - - - - - - *       *\n                                       |\nstable:                                *\n")])])]),a("p",[t._v("这被称为 “train model”，因为每 6 周，一个版本 “离开车站”（“leaves the station”），不过从 beta 通道到达稳定通道还有一段旅程。")]),t._v(" "),a("p",[t._v("Rust 每 6 周发布一个版本，如时钟般准确。如果你知道了某个 Rust 版本的发布时间，就可以知道下个版本的时间：6 周后。每 6 周发布版本的一个好的方面是下一班车会来得更快。如果特定版本碰巧缺失某个功能也无需担心：另一个版本很快就会到来！这有助于减少因临近发版时间而偷偷释出未经完善的功能的压力。")]),t._v(" "),a("p",[t._v("多亏了这个过程，你总是可以切换到下一版本的 Rust 并验证是否可以轻易的升级：如果 beta 版不能如期工作，你可以向 Rust 团队报告并在发布稳定版之前得到修复！beta 版造成的破坏是非常少见的，不过 "),a("code",[t._v("rustc")]),t._v(" 也不过是一个软件，可能会存在 bug。")]),t._v(" "),a("h3",{attrs:{id:"不稳定功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不稳定功能"}},[t._v("#")]),t._v(" 不稳定功能")]),t._v(" "),a("p",[t._v("这个发布模型中另一个值得注意的地方：不稳定功能（unstable features）。Rust 使用一个被称为 “功能标记”（“feature flags”）的技术来确定给定版本的某个功能是否启用。如果新功能正在积极地开发中，其提交到了 "),a("code",[t._v("master")]),t._v("，因此会出现在 nightly 版中，不过会位于一个 "),a("strong",[t._v("功能标记")]),t._v(" 之后。作为用户，如果你希望尝试这个正在开发的功能，则可以在源码中使用合适的标记来开启，不过必须使用 nightly 版。")]),t._v(" "),a("p",[t._v("如果使用的是 beta 或稳定版 Rust，则不能使用任何功能标记。这是在新功能被宣布为永久稳定之前获得实用价值的关键。这既满足了希望使用最尖端技术的同学，那些坚持稳定版的同学也知道其代码不会被破坏。这就是无停滞稳定。")]),t._v(" "),a("p",[t._v("本书只包含稳定的功能，因为还在开发中的功能仍可能改变，当其进入稳定版时肯定会与编写本书的时候有所不同。你可以在网上获取 nightly 版的文档。")]),t._v(" "),a("h3",{attrs:{id:"rustup-和-rust-nightly-的职责"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rustup-和-rust-nightly-的职责"}},[t._v("#")]),t._v(" Rustup 和 Rust Nightly 的职责")]),t._v(" "),a("p",[t._v("Rustup 使得改变不同发布通道的 Rust 更为简单，其在全局或分项目的层次工作。其默认会安装稳定版 Rust。例如为了安装 nightly：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rustup install nightly\n")])])]),a("p",[t._v("你会发现 "),a("code",[t._v("rustup")]),t._v(" 也安装了所有的 "),a("strong",[t._v("工具链")]),t._v("（"),a("em",[t._v("toolchains")]),t._v("， Rust 和其相关组件）。如下是一位作者的 Windows 计算机上的例子：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("> rustup toolchain list\nstable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x86_64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("windows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("msvc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbeta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x86_64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("windows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("msvc\nnightly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x86_64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("windows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("msvc\n")])])]),a("p",[t._v("如你所见，默认是稳定版。大部分 Rust 用户在大部分时间使用稳定版。你可能也会这么做，不过如果你关心最新的功能，可以为特定项目使用 nightly 版。为此，可以在项目目录使用 "),a("code",[t._v("rustup override")]),t._v(" 来设置当前目录 "),a("code",[t._v("rustup")]),t._v(" 使用 nightly 工具链：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd ~/projects/needs-nightly\n$ rustup override set nightly\n")])])]),a("p",[t._v("现在，每次在 "),a("em",[t._v("~/projects/needs-nightly")]),t._v(" 调用 "),a("code",[t._v("rustc")]),t._v(" 或 "),a("code",[t._v("cargo")]),t._v("，"),a("code",[t._v("rustup")]),t._v(" 会确保使用 nightly 版 Rust。在你有很多 Rust 项目时大有裨益！")]),t._v(" "),a("h3",{attrs:{id:"rfc-过程和团队"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rfc-过程和团队"}},[t._v("#")]),t._v(" RFC 过程和团队")]),t._v(" "),a("p",[t._v("那么你如何了解这些新功能呢？Rust 开发模式遵循一个 "),a("strong",[t._v("Request For Comments (RFC) 过程")]),t._v("。如果你希望改进 Rust，可以编写一个提议，也就是 RFC。")]),t._v(" "),a("p",[t._v("任何人都可以编写 RFC 来改进 Rust，同时这些 RFC 会被 Rust 团队评审和讨论，他们由很多不同分工的子团队组成。这里是 "),a("a",{attrs:{href:"https://www.rust-lang.org/governance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust 官网上"),a("OutboundLink")],1),t._v(" 所有团队的总列表，其包含了项目中每个领域的团队：语言设计、编译器实现、基础设施、文档等。各个团队会阅读相应的提议和评论，编写回复，并最终达成接受或回绝功能的一致。")]),t._v(" "),a("p",[t._v("如果功能被接受了，在 Rust 仓库会打开一个 issue，人们就可以实现它。实现功能的人当然可能不是最初提议功能的人！当实现完成后，其会合并到 "),a("code",[t._v("master")]),t._v(" 分支并位于一个功能开关（feature gate）之后，正如 "),a("a",{attrs:{href:"#unstable-features"}},[t._v("“不稳定功能”")]),t._v(" 部分所讨论的。")]),t._v(" "),a("p",[t._v("在稍后的某个时间，一旦使用 nightly 版的 Rust 团队能够尝试这个功能了，团队成员会讨论这个功能，它如何在 nightly 中工作，并决定是否应该进入稳定版。如果决定继续推进，功能开关会移除，然后这个功能就被认为是稳定的了！乘着“发布的列车”，最终在新的稳定版 Rust 中出现。")])])}),[],!1,null,null,null);s.default=r.exports}}]);