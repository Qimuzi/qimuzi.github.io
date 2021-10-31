(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{394:function(t,e,a){"use strict";a.r(e);var v=a(54),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"附录-a-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录-a-关键字"}},[t._v("#")]),t._v(" 附录 A：关键字")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/appendix-01-keywords.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("appendix-01-keywords.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 27dd97a785794709aa87c51ab697cded41e8163a")])]),t._v(" "),a("p",[t._v("下面的列表包含 Rust 中正在使用或者以后会用到的关键字。因此，这些关键字不能被用作标识符（除了 “"),a("a",{attrs:{href:"#raw-identifiers"}},[t._v("原始标识符")]),t._v("” 部分介绍的原始标识符），这包括函数、变量、参数、结构体字段、模块、crate、常量、宏、静态值、属性、类型、trait 或生命周期\n的名字。")]),t._v(" "),a("h3",{attrs:{id:"目前正在使用的关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目前正在使用的关键字"}},[t._v("#")]),t._v(" 目前正在使用的关键字")]),t._v(" "),a("p",[t._v("如下关键字目前有对应其描述的功能。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("as")]),t._v(" - 强制类型转换，消除特定包含项的 trait 的歧义，或者对 "),a("code",[t._v("use")]),t._v(" 和 "),a("code",[t._v("extern crate")]),t._v(" 语句中的项重命名")]),t._v(" "),a("li",[a("code",[t._v("break")]),t._v(" - 立刻退出循环")]),t._v(" "),a("li",[a("code",[t._v("const")]),t._v(" - 定义常量或不变裸指针（constant raw pointer）")]),t._v(" "),a("li",[a("code",[t._v("continue")]),t._v(" - 继续进入下一次循环迭代")]),t._v(" "),a("li",[a("code",[t._v("crate")]),t._v(" - 链接（link）一个外部 "),a("strong",[t._v("crate")]),t._v(" 或一个代表宏定义的 "),a("strong",[t._v("crate")]),t._v(" 的宏变量")]),t._v(" "),a("li",[a("code",[t._v("dyn")]),t._v(" - 动态分发 trait 对象")]),t._v(" "),a("li",[a("code",[t._v("else")]),t._v(" - 作为 "),a("code",[t._v("if")]),t._v(" 和 "),a("code",[t._v("if let")]),t._v(" 控制流结构的 fallback")]),t._v(" "),a("li",[a("code",[t._v("enum")]),t._v(" - 定义一个枚举")]),t._v(" "),a("li",[a("code",[t._v("extern")]),t._v(" - 链接一个外部 "),a("strong",[t._v("crate")]),t._v(" 、函数或变量")]),t._v(" "),a("li",[a("code",[t._v("false")]),t._v(" - 布尔字面值 "),a("code",[t._v("false")])]),t._v(" "),a("li",[a("code",[t._v("fn")]),t._v(" - 定义一个函数或 "),a("strong",[t._v("函数指针类型")]),t._v(" ("),a("em",[t._v("function pointer type")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("for")]),t._v(" - 遍历一个迭代器或实现一个 trait 或者指定一个更高级的生命周期")]),t._v(" "),a("li",[a("code",[t._v("if")]),t._v(" - 基于条件表达式的结果分支")]),t._v(" "),a("li",[a("code",[t._v("impl")]),t._v(" - 实现自有或 trait 功能")]),t._v(" "),a("li",[a("code",[t._v("in")]),t._v(" - "),a("code",[t._v("for")]),t._v(" 循环语法的一部分")]),t._v(" "),a("li",[a("code",[t._v("let")]),t._v(" - 绑定一个变量")]),t._v(" "),a("li",[a("code",[t._v("loop")]),t._v(" - 无条件循环")]),t._v(" "),a("li",[a("code",[t._v("match")]),t._v(" - 模式匹配")]),t._v(" "),a("li",[a("code",[t._v("mod")]),t._v(" - 定义一个模块")]),t._v(" "),a("li",[a("code",[t._v("move")]),t._v(" - 使闭包获取其所捕获项的所有权")]),t._v(" "),a("li",[a("code",[t._v("mut")]),t._v(" - 表示引用、裸指针或模式绑定的可变性")]),t._v(" "),a("li",[a("code",[t._v("pub")]),t._v(" - 表示结构体字段、"),a("code",[t._v("impl")]),t._v(" 块或模块的公有可见性")]),t._v(" "),a("li",[a("code",[t._v("ref")]),t._v(" - 通过引用绑定")]),t._v(" "),a("li",[a("code",[t._v("return")]),t._v(" - 从函数中返回")]),t._v(" "),a("li",[a("code",[t._v("Self")]),t._v(" - 实现 trait 的类型的类型别名")]),t._v(" "),a("li",[a("code",[t._v("self")]),t._v(" - 表示方法本身或当前模块")]),t._v(" "),a("li",[a("code",[t._v("static")]),t._v(" - 表示全局变量或在整个程序执行期间保持其生命周期")]),t._v(" "),a("li",[a("code",[t._v("struct")]),t._v(" - 定义一个结构体")]),t._v(" "),a("li",[a("code",[t._v("super")]),t._v(" - 表示当前模块的父模块")]),t._v(" "),a("li",[a("code",[t._v("trait")]),t._v(" - 定义一个 trait")]),t._v(" "),a("li",[a("code",[t._v("true")]),t._v(" - 布尔字面值 "),a("code",[t._v("true")])]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(" - 定义一个类型别名或关联类型")]),t._v(" "),a("li",[a("code",[t._v("unsafe")]),t._v(" - 表示不安全的代码、函数、trait 或实现")]),t._v(" "),a("li",[a("code",[t._v("use")]),t._v(" - 引入外部空间的符号")]),t._v(" "),a("li",[a("code",[t._v("where")]),t._v(" - 表示一个约束类型的从句")]),t._v(" "),a("li",[a("code",[t._v("while")]),t._v(" - 基于一个表达式的结果判断是否进行循环")])]),t._v(" "),a("h3",{attrs:{id:"保留做将来使用的关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保留做将来使用的关键字"}},[t._v("#")]),t._v(" 保留做将来使用的关键字")]),t._v(" "),a("p",[t._v("如下关键字没有任何功能，不过由 Rust 保留以备将来的应用。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("abstract")])]),t._v(" "),a("li",[a("code",[t._v("async")])]),t._v(" "),a("li",[a("code",[t._v("await")])]),t._v(" "),a("li",[a("code",[t._v("become")])]),t._v(" "),a("li",[a("code",[t._v("box")])]),t._v(" "),a("li",[a("code",[t._v("do")])]),t._v(" "),a("li",[a("code",[t._v("final")])]),t._v(" "),a("li",[a("code",[t._v("macro")])]),t._v(" "),a("li",[a("code",[t._v("override")])]),t._v(" "),a("li",[a("code",[t._v("priv")])]),t._v(" "),a("li",[a("code",[t._v("try")])]),t._v(" "),a("li",[a("code",[t._v("typeof")])]),t._v(" "),a("li",[a("code",[t._v("unsized")])]),t._v(" "),a("li",[a("code",[t._v("virtual")])]),t._v(" "),a("li",[a("code",[t._v("yield")])])]),t._v(" "),a("h3",{attrs:{id:"原始标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始标识符"}},[t._v("#")]),t._v(" 原始标识符")]),t._v(" "),a("p",[t._v("原始标识符（Raw identifiers）允许你使用通常不能使用的关键字，其带有 "),a("code",[t._v("r#")]),t._v(" 前缀。")]),t._v(" "),a("p",[t._v("例如，"),a("code",[t._v("match")]),t._v(" 是关键字。如果尝试编译如下使用 "),a("code",[t._v("match")]),t._v(" 作为名字的函数：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fn match(needle: &str, haystack: &str) -> bool {\n    haystack.contains(needle)\n}\n")])])]),a("p",[t._v("会得到这个错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error: expected identifier, found keyword `match`\n --\x3e src/main.rs:4:4\n  |\n4 | fn match(needle: &amp;str, haystack: &amp;str) -> bool {\n  |    ^^^^^ expected identifier, found keyword\n")])])]),a("p",[t._v("该错误表示你不能将关键字 "),a("code",[t._v("match")]),t._v(" 用作函数标识符。你可以使用原始标识符将 "),a("code",[t._v("match")]),t._v(" 作为函数名称使用：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("r")]),t._v("#"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r#"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foobar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此代码编译没有任何错误。注意 "),a("code",[t._v("r#")]),t._v(" 前缀需同时用于函数名定义和 "),a("code",[t._v("main")]),t._v(" 函数中的调用。")]),t._v(" "),a("p",[t._v("原始标识符允许使用你选择的任何单词作为标识符，即使该单词恰好是保留关键字。 此外，原始标识符允许你使用以不同于你的 crate 使用的 Rust 版本编写的库。比如，"),a("code",[t._v("try")]),t._v(" 在 2015 edition 中不是关键字，而在 2018 edition 则是。所以如果用 2015 edition 编写的库中带有 "),a("code",[t._v("try")]),t._v(" 函数，在 2018 edition 中调用时就需要使用原始标识符语法，在这里是 "),a("code",[t._v("r#try")]),t._v("。有关版本的更多信息，请参见"),a("RouterLink",{attrs:{to:"/appendix-05-editions.html"}},[t._v("附录 E")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=_.exports}}]);