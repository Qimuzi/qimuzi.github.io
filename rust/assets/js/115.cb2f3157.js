(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{498:function(t,r,e){"use strict";e.r(r);var o=e(54),_=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rust-程序设计语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rust-程序设计语言"}},[t._v("#")]),t._v(" Rust 程序设计语言")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/title-page.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("title-page.md"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("\ncommit a2bd349f8654f5c45ad1f07394225f946954b8ef")])]),t._v(" "),e("p",[e("strong",[t._v("Steve Klabnik 和 Carol Nichols，以及来自 Rust 社区的贡献（Rust 中文社区翻译）")])]),t._v(" "),e("p",[t._v("本书假设你使用 Rust 1.41.0 或更新的版本，且在所有的项目中的 "),e("em",[t._v("Cargo.toml")]),t._v(" 文件中通过 "),e("code",[t._v('edition="2018"')]),t._v(" 采用 Rust 2018 Edition 规范。请查看 "),e("RouterLink",{attrs:{to:"/ch01-01-installation.html"}},[t._v("第一章的 “安装” 部分")]),t._v(" 了解如何安装和升级 Rust，并查看新的 "),e("RouterLink",{attrs:{to:"/appendix-05-editions.html"}},[t._v("附录 E")]),t._v(" 了解版本相关的信息。")],1),t._v(" "),e("p",[t._v("Rust 程序设计语言的 2018 Edition 包含许多的改进使得 Rust 更为工程化并更为容易学习。本书的此次迭代包括了很多反映这些改进的修改：")]),t._v(" "),e("ul",[e("li",[t._v("第七章 “使用包、Crate 和模块管理不断增长的项目” 基本上被重写了。模块系统和路径（path）的工作方式变得更为一致。")]),t._v(" "),e("li",[t._v("第十章新增了名为 “trait 作为参数” 和 “返回实现了 trait 的类型” 部分来解释新的 "),e("code",[t._v("impl Trait")]),t._v(" 语法。")]),t._v(" "),e("li",[t._v("第十一章新增了一个名为 “在测试中使用 "),e("code",[t._v("Result<T, E>")]),t._v("” 的部分来展示如何使用 "),e("code",[t._v("?")]),t._v(" 运算符来编写测试")]),t._v(" "),e("li",[t._v("第十九章的 “高级生命周期” 部分被移除了，因为编译器的改进使得其内容变得更为少见。")]),t._v(" "),e("li",[t._v("之前的附录 D “宏” 得到了补充，包括了过程宏并移动到了第十九章的 “宏” 部分。")]),t._v(" "),e("li",[t._v("附录 A “关键字” 也介绍了新的原始标识符（raw identifiers）功能，这使得采用 2015 Edition 编写的 Rust 代码可以与 2018 Edition 互通。")]),t._v(" "),e("li",[t._v("现在的附录 D 名为 “实用开发工具”，它介绍了最近发布的可以帮助你编写 Rust 代码的工具。")]),t._v(" "),e("li",[t._v("我们还修复了全书中许多错误和不准确的描述。感谢报告了这些问题的读者们！")])]),t._v(" "),e("p",[t._v("注意任何 “Rust 程序设计语言” 早期迭代中的代码在项目的 "),e("em",[t._v("Cargo.toml")]),t._v(" 中不包含 "),e("code",[t._v('edition="2018"')]),t._v(" 时仍可以继续编译，哪怕你更新了 Rust 编译器的版本。Rust 的后向兼容性保证了这一切可以正常运行！")]),t._v(" "),e("p",[t._v("本书的 HTML 版本可以在 "),e("a",{attrs:{href:"https://doc.rust-lang.org/stable/book/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doc.rust-lang.org/stable/book/"),e("OutboundLink")],1),t._v(" （"),e("a",{attrs:{href:"https://kaisery.github.io/trpl-zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("简体中文译本"),e("OutboundLink")],1),t._v("）在线阅读，离线版则包含在通过 "),e("code",[t._v("rustup")]),t._v(" 安装的 Rust 中；运行 "),e("code",[t._v("rustup docs --book")]),t._v(" 可以打开。")]),t._v(" "),e("p",[t._v("本书的 "),e("a",{attrs:{href:"https://nostarch.com/rust",target:"_blank",rel:"noopener noreferrer"}},[t._v("纸质版和电子书由 No Starch Press"),e("OutboundLink")],1),t._v(" 发行。")])])}),[],!1,null,null,null);r.default=_.exports}}]);