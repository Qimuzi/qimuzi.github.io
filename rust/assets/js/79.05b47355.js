(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{462:function(a,e,t){"use strict";t.r(e);var s=t(54),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"cargo-工作空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cargo-工作空间"}},[a._v("#")]),a._v(" Cargo 工作空间")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/ch14-03-cargo-workspaces.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("ch14-03-cargo-workspaces.md"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("\ncommit 6d3e76820418f2d2bb203233c61d90390b5690f1")])]),a._v(" "),t("p",[a._v("第十二章中，我们构建一个包含二进制 crate 和库 crate 的包。你可能会发现，随着项目开发的深入，库 crate 持续增大，而你希望将其进一步拆分成多个库 crate。对于这种情况，Cargo 提供了一个叫 "),t("strong",[a._v("工作空间")]),a._v("（"),t("em",[a._v("workspaces")]),a._v("）的功能，它可以帮助我们管理多个相关的协同开发的包。")]),a._v(" "),t("h3",{attrs:{id:"创建工作空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建工作空间"}},[a._v("#")]),a._v(" 创建工作空间")]),a._v(" "),t("p",[t("strong",[a._v("工作空间")]),a._v(" 是一系列共享同样的 "),t("em",[a._v("Cargo.lock")]),a._v(" 和输出目录的包。让我们使用工作空间创建一个项目 —— 这里采用常见的代码以便可以关注工作空间的结构。有多种组织工作空间的方式；我们将展示一个常用方法。我们的工作空间有一个二进制项目和两个库。二进制项目会提供主要功能，并会依赖另两个库。一个库会提供 "),t("code",[a._v("add_one")]),a._v(" 方法而第二个会提供 "),t("code",[a._v("add_two")]),a._v(" 方法。这三个 crate 将会是相同工作空间的一部分。让我们以新建工作空间目录开始：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mkdir add\n$ cd add\n")])])]),t("p",[a._v("接着在 "),t("em",[a._v("add")]),a._v(" 目录中，创建 "),t("em",[a._v("Cargo.toml")]),a._v(" 文件。这个 "),t("em",[a._v("Cargo.toml")]),a._v(" 文件配置了整个工作空间。它不会包含 "),t("code",[a._v("[package]")]),a._v(" 或其他我们在 "),t("em",[a._v("Cargo.toml")]),a._v(" 中见过的元信息。相反，它以 "),t("code",[a._v("[workspace]")]),a._v(" 部分作为开始，并通过指定 "),t("em",[a._v("adder")]),a._v(" 的路径来为工作空间增加成员，如下会加入二进制 crate：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: Cargo.toml")])]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("workspace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("members")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"adder"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("接下来，在 "),t("em",[a._v("add")]),a._v(" 目录运行 "),t("code",[a._v("cargo new")]),a._v(" 新建 "),t("code",[a._v("adder")]),a._v(" 二进制 crate：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo new adder\n     Created binary (application) `adder` project\n")])])]),t("p",[a._v("到此为止，可以运行 "),t("code",[a._v("cargo build")]),a._v(" 来构建工作空间。"),t("em",[a._v("add")]),a._v(" 目录中的文件应该看起来像这样：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("├── Cargo.lock\n├── Cargo.toml\n├── adder\n│   ├── Cargo.toml\n│   └── src\n│       └── main.rs\n└── target\n")])])]),t("p",[a._v("工作空间在顶级目录有一个 "),t("em",[a._v("target")]),a._v(" 目录；"),t("code",[a._v("adder")]),a._v(" 并没有自己的 "),t("em",[a._v("target")]),a._v(" 目录。即使进入 "),t("em",[a._v("adder")]),a._v(" 目录运行 "),t("code",[a._v("cargo build")]),a._v("，构建结果也位于 "),t("em",[a._v("add/target")]),a._v(" 而不是 "),t("em",[a._v("add/adder/target")]),a._v("。工作空间中的 crate 之间相互依赖。如果每个 crate 有其自己的 "),t("em",[a._v("target")]),a._v(" 目录，为了在自己的 "),t("em",[a._v("target")]),a._v(" 目录中生成构建结果，工作空间中的每一个 crate 都不得不相互重新编译其他 crate。通过共享一个 "),t("em",[a._v("target")]),a._v(" 目录，工作空间可以避免其他 crate 多余的重复构建。")]),a._v(" "),t("h3",{attrs:{id:"在工作空间中创建第二个-crate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在工作空间中创建第二个-crate"}},[a._v("#")]),a._v(" 在工作空间中创建第二个 crate")]),a._v(" "),t("p",[a._v("接下来，让我们在工作空间中指定另一个成员 crate。这个 crate 位于 "),t("em",[a._v("add-one")]),a._v(" 目录中，所以修改顶级 "),t("em",[a._v("Cargo.toml")]),a._v(" 为也包含 "),t("em",[a._v("add-one")]),a._v(" 路径：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: Cargo.toml")])]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("workspace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("members")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"adder"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"add-one"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("接着新生成一个叫做 "),t("code",[a._v("add-one")]),a._v(" 的库：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo new add-one --lib\n     Created library `add-one` project\n")])])]),t("p",[a._v("现在 "),t("em",[a._v("add")]),a._v(" 目录应该有如下目录和文件：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("├── Cargo.lock\n├── Cargo.toml\n├── add-one\n│   ├── Cargo.toml\n│   └── src\n│       └── lib.rs\n├── adder\n│   ├── Cargo.toml\n│   └── src\n│       └── main.rs\n└── target\n")])])]),t("p",[a._v("在 "),t("em",[a._v("add-one/src/lib.rs")]),a._v(" 文件中，增加一个 "),t("code",[a._v("add_one")]),a._v(" 函数：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: add-one/src/lib.rs")])]),a._v(" "),t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("pub")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("add_one")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("i32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("i32")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    x "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("现在工作空间中有了一个库 crate，让 "),t("code",[a._v("adder")]),a._v(" 依赖库 crate "),t("code",[a._v("add-one")]),a._v("。首先需要在 "),t("em",[a._v("adder/Cargo.toml")]),a._v(" 文件中增加 "),t("code",[a._v("add-one")]),a._v(" 作为路径依赖：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: adder/Cargo.toml")])]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("add-one")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("path")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"../add-one"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("cargo并不假定工作空间中的Crates会相互依赖，所以需要明确表明工作空间中 crate 的依赖关系。")]),a._v(" "),t("p",[a._v("接下来，在 "),t("code",[a._v("adder")]),a._v(" crate 中使用 "),t("code",[a._v("add-one")]),a._v(" crate 的函数 "),t("code",[a._v("add_one")]),a._v("。打开 "),t("em",[a._v("adder/src/main.rs")]),a._v(" 在顶部增加一行 "),t("code",[a._v("use")]),a._v(" 将新 "),t("code",[a._v("add-one")]),a._v(" 库 crate 引入作用域。接着修改 "),t("code",[a._v("main")]),a._v(" 函数来调用 "),t("code",[a._v("add_one")]),a._v(" 函数，如示例 14-7 所示。")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: adder/src/main.rs")])]),a._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('use add_one;\n\nfn main() {\n    let num = 10;\n    println!("Hello, world! {} plus one is {}!", num, add_one::add_one(num));\n}\n')])])]),t("p",[t("span",{staticClass:"caption"},[a._v("示例 14-7：在 "),t("code",[a._v("adder")]),a._v(" crate 中使用 "),t("code",[a._v("add-one")]),a._v(" 库 crate")])]),a._v(" "),t("p",[a._v("在 "),t("em",[a._v("add")]),a._v(" 目录中运行 "),t("code",[a._v("cargo build")]),a._v(" 来构建工作空间！")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo build\n   Compiling add-one v0.1.0 (file:///projects/add/add-one)\n   Compiling adder v0.1.0 (file:///projects/add/adder)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.68 secs\n")])])]),t("p",[a._v("为了在顶层 "),t("em",[a._v("add")]),a._v(" 目录运行二进制 crate，需要通过 "),t("code",[a._v("-p")]),a._v(" 参数和包名称来运行 "),t("code",[a._v("cargo run")]),a._v(" 指定工作空间中我们希望使用的包：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo run -p adder\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/adder`\nHello, world! 10 plus one is 11!\n")])])]),t("p",[a._v("这会运行 "),t("em",[a._v("adder/src/main.rs")]),a._v(" 中的代码，其依赖 "),t("code",[a._v("add-one")]),a._v(" crate")]),a._v(" "),t("h4",{attrs:{id:"在工作空间中依赖外部-crate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在工作空间中依赖外部-crate"}},[a._v("#")]),a._v(" 在工作空间中依赖外部 crate")]),a._v(" "),t("p",[a._v("还需注意的是工作空间只在根目录有一个 "),t("em",[a._v("Cargo.lock")]),a._v("，而不是在每一个 crate 目录都有 "),t("em",[a._v("Cargo.lock")]),a._v("。这确保了所有的 crate 都使用完全相同版本的依赖。如果在 "),t("em",[a._v("Cargo.toml")]),a._v(" 和 "),t("em",[a._v("add-one/Cargo.toml")]),a._v(" 中都增加 "),t("code",[a._v("rand")]),a._v(" crate，则 Cargo 会将其都解析为同一版本并记录到唯一的 "),t("em",[a._v("Cargo.lock")]),a._v(" 中。使得工作空间中的所有 crate 都使用相同的依赖意味着其中的 crate 都是相互兼容的。让我们在 "),t("em",[a._v("add-one/Cargo.toml")]),a._v(" 中的 "),t("code",[a._v("[dependencies]")]),a._v(" 部分增加 "),t("code",[a._v("rand")]),a._v(" crate 以便能够在 "),t("code",[a._v("add-one")]),a._v(" crate 中使用 "),t("code",[a._v("rand")]),a._v(" crate：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: add-one/Cargo.toml")])]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[a._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("rand")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.5.5"')]),a._v("\n")])])]),t("p",[a._v("现在就可以在 "),t("em",[a._v("add-one/src/lib.rs")]),a._v(" 中增加 "),t("code",[a._v("use rand;")]),a._v(" 了，接着在 "),t("em",[a._v("add")]),a._v(" 目录运行 "),t("code",[a._v("cargo build")]),a._v(" 构建整个工作空间就会引入并编译 "),t("code",[a._v("rand")]),a._v(" crate：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo build\n    Updating crates.io index\n  Downloaded rand v0.5.5\n   --snip--\n   Compiling rand v0.5.5\n   Compiling add-one v0.1.0 (file:///projects/add/add-one)\n   Compiling adder v0.1.0 (file:///projects/add/adder)\n    Finished dev [unoptimized + debuginfo] target(s) in 10.18 secs\n")])])]),t("p",[a._v("现在顶级的 "),t("em",[a._v("Cargo.lock")]),a._v(" 包含了 "),t("code",[a._v("add-one")]),a._v(" 的 "),t("code",[a._v("rand")]),a._v(" 依赖的信息。然而，即使 "),t("code",[a._v("rand")]),a._v(" 被用于工作空间的某处，也不能在其他 crate 中使用它，除非也在他们的 "),t("em",[a._v("Cargo.toml")]),a._v(" 中加入 "),t("code",[a._v("rand")]),a._v("。例如，如果在顶级的 "),t("code",[a._v("adder")]),a._v(" crate 的 "),t("em",[a._v("adder/src/main.rs")]),a._v(" 中增加 "),t("code",[a._v("use rand;")]),a._v("，会得到一个错误：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo build\n   Compiling adder v0.1.0 (file:///projects/add/adder)\nerror: use of unstable library feature 'rand': use `rand` from crates.io (see\nissue #27703)\n --\x3e adder/src/main.rs:1:1\n  |\n1 | use rand;\n")])])]),t("p",[a._v("为了修复这个错误，修改顶级 "),t("code",[a._v("adder")]),a._v(" crate 的 "),t("em",[a._v("Cargo.toml")]),a._v(" 来表明 "),t("code",[a._v("rand")]),a._v(" 也是这个 crate 的依赖。构建 "),t("code",[a._v("adder")]),a._v(" crate 会将 "),t("code",[a._v("rand")]),a._v(" 加入到 "),t("em",[a._v("Cargo.lock")]),a._v(" 中 "),t("code",[a._v("adder")]),a._v(" 的依赖列表中，但是这并不会下载 "),t("code",[a._v("rand")]),a._v(" 的额外拷贝。Cargo 确保了工作空间中任何使用 "),t("code",[a._v("rand")]),a._v(" 的 crate 都采用相同的版本。在整个工作空间中使用相同版本的 "),t("code",[a._v("rand")]),a._v(" 节省了空间，因为这样就无需多个拷贝并确保了工作空间中的 crate 将是相互兼容的。")]),a._v(" "),t("h4",{attrs:{id:"为工作空间增加测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为工作空间增加测试"}},[a._v("#")]),a._v(" 为工作空间增加测试")]),a._v(" "),t("p",[a._v("作为另一个提升，让我们为 "),t("code",[a._v("add_one")]),a._v(" crate 中的 "),t("code",[a._v("add_one::add_one")]),a._v(" 函数增加一个测试：")]),a._v(" "),t("p",[t("span",{staticClass:"filename"},[a._v("文件名: add-one/src/lib.rs")])]),a._v(" "),t("div",{staticClass:"language-rust extra-class"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("pub")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("add_one")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("i32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("i32")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    x "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[a._v("#[cfg(test)]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("mod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[a._v("tests")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[a._v("#[test]")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("it_works")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("assert_eq!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add_one")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("在顶级 "),t("em",[a._v("add")]),a._v(" 目录运行 "),t("code",[a._v("cargo test")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo test\n   Compiling add-one v0.1.0 (file:///projects/add/add-one)\n   Compiling adder v0.1.0 (file:///projects/add/adder)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.27 secs\n     Running target/debug/deps/add_one-f0253159197f7841\n\nrunning 1 test\ntest tests::it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n\n     Running target/debug/deps/adder-f88af9d2cc175a5e\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n\n   Doc-tests add-one\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")])])]),t("p",[a._v("输出的第一部分显示 "),t("code",[a._v("add-one")]),a._v(" crate 的 "),t("code",[a._v("it_works")]),a._v(" 测试通过了。下一个部分显示 "),t("code",[a._v("adder")]),a._v(" crate 中找到了 0 个测试，最后一部分显示 "),t("code",[a._v("add-one")]),a._v(" crate 中有 0 个文档测试。在像这样的工作空间结构中运行 "),t("code",[a._v("cargo test")]),a._v(" 会运行工作空间中所有 crate 的测试。")]),a._v(" "),t("p",[a._v("也可以选择运行工作空间中特定 crate 的测试，通过在根目录使用 "),t("code",[a._v("-p")]),a._v(" 参数并指定希望测试的 crate 名称：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ cargo test -p add-one\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running target/debug/deps/add_one-b3235fea9a156f74\n\nrunning 1 test\ntest tests::it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n\n   Doc-tests add-one\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")])])]),t("p",[a._v("输出显示了 "),t("code",[a._v("cargo test")]),a._v(" 只运行了 "),t("code",[a._v("add-one")]),a._v(" crate 的测试而没有运行 "),t("code",[a._v("adder")]),a._v(" crate 的测试。")]),a._v(" "),t("p",[a._v("如果你选择向 "),t("a",{attrs:{href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("crates.io"),t("OutboundLink")],1),a._v("发布工作空间中的 crate，每一个工作空间中的 crate 需要单独发布。"),t("code",[a._v("cargo publish")]),a._v(" 命令并没有 "),t("code",[a._v("--all")]),a._v(" 或者 "),t("code",[a._v("-p")]),a._v(" 参数，所以必须进入每一个 crate 的目录并运行 "),t("code",[a._v("cargo publish")]),a._v(" 来发布工作空间中的每一个 crate。")]),a._v(" "),t("p",[a._v("现在尝试以类似 "),t("code",[a._v("add-one")]),a._v(" crate 的方式向工作空间增加 "),t("code",[a._v("add-two")]),a._v(" crate 来作为更多的练习！")]),a._v(" "),t("p",[a._v("随着项目增长，考虑使用工作空间：每一个更小的组件比一大块代码要容易理解。如果它们经常需要同时被修改的话，将 crate 保持在工作空间中更易于协调他们的改变。")])])}),[],!1,null,null,null);e.default=n.exports}}]);