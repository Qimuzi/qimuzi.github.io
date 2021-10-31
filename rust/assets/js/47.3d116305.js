(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{430:function(s,t,a){"use strict";a.r(t);var e=a(54),_=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"将模块分割进不同文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将模块分割进不同文件"}},[s._v("#")]),s._v(" 将模块分割进不同文件")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/ch07-05-separating-modules-into-different-files.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("ch07-05-separating-modules-into-different-files.md"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("\ncommit a5a5bf9d6ea5763a9110f727911a21da854b1d90")])]),s._v(" "),a("p",[s._v("到目前为止，本章所有的例子都在一个文件中定义多个模块。当模块变得更大时，你可能想要将它们的定义移动到单独的文件中，从而使代码更容易阅读。")]),s._v(" "),a("p",[s._v("例如，我们从示例 7-17 开始，将 "),a("code",[s._v("front_of_house")]),s._v(" 模块移动到属于它自己的文件 "),a("em",[s._v("src/front_of_house.rs")]),s._v(" 中，通过改变 crate 根文件，使其包含示例 7-21 所示的代码。在这个例子中，crate 根文件是 "),a("em",[s._v("src/lib.rs")]),s._v("，这也同样适用于以 "),a("em",[s._v("src/main.rs")]),s._v(" 为 crate 根文件的二进制 crate 项。")]),s._v(" "),a("p",[a("span",{staticClass:"filename"},[s._v("文件名: src/lib.rs")])]),s._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mod front_of_house;\n\npub use crate::front_of_house::hosting;\n\npub fn eat_at_restaurant() {\n    hosting::add_to_waitlist();\n    hosting::add_to_waitlist();\n    hosting::add_to_waitlist();\n}\n")])])]),a("p",[a("span",{staticClass:"caption"},[s._v("示例 7-21: 声明 "),a("code",[s._v("front_of_house")]),s._v(" 模块，其内容将位于 "),a("em",[s._v("src/front_of_house.rs")])])]),s._v(" "),a("p",[a("em",[s._v("src/front_of_house.rs")]),s._v(" 会获取 "),a("code",[s._v("front_of_house")]),s._v(" 模块的定义内容，如示例 7-22 所示。")]),s._v(" "),a("p",[a("span",{staticClass:"filename"},[s._v("文件名: src/front_of_house.rs")])]),s._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("add_to_waitlist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[s._v("示例 7-22: 在 "),a("em",[s._v("src/front_of_house.rs")]),s._v(" 中定义 "),a("code",[s._v("front_of_house")]),s._v("\n模块")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("mod front_of_house")]),s._v(" 后使用分号，而不是代码块，这将告诉 Rust 在另一个与模块同名的文件中加载模块的内容。继续重构我们例子，将 "),a("code",[s._v("hosting")]),s._v(" 模块也提取到其自己的文件中，仅对 "),a("em",[s._v("src/front_of_house.rs")]),s._v(" 包含 "),a("code",[s._v("hosting")]),s._v(" 模块的声明进行修改：")]),s._v(" "),a("p",[a("span",{staticClass:"filename"},[s._v("文件名: src/front_of_house.rs")])]),s._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("接着我们创建一个 "),a("em",[s._v("src/front_of_house")]),s._v(" 目录和一个包含 "),a("code",[s._v("hosting")]),s._v(" 模块定义的 "),a("em",[s._v("src/front_of_house/hosting.rs")]),s._v(" 文件：")]),s._v(" "),a("p",[a("span",{staticClass:"filename"},[s._v("文件名: src/front_of_house/hosting.rs")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pub fn add_to_waitlist() {}\n")])])]),a("p",[s._v("模块树依然保持相同，"),a("code",[s._v("eat_at_restaurant")]),s._v(" 中的函数调用也无需修改继续保持有效，即便其定义存在于不同的文件中。这个技巧让你可以在模块代码增长时，将它们移动到新文件中。")]),s._v(" "),a("p",[s._v("注意，"),a("em",[s._v("src/lib.rs")]),s._v(" 中的 "),a("code",[s._v("pub use crate::front_of_house::hosting")]),s._v(" 语句是没有改变的，在文件作为 crate 的一部分而编译时，"),a("code",[s._v("use")]),s._v(" 不会有任何影响。"),a("code",[s._v("mod")]),s._v(" 关键字声明了模块，Rust 会在与模块同名的文件中查找模块的代码。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("Rust 提供了将包分成多个 crate，将 crate 分成模块，以及通过指定绝对或相对路径从一个模块引用另一个模块中定义的项的方式。你可以通过使用 "),a("code",[s._v("use")]),s._v(" 语句将路径引入作用域，这样在多次使用时可以使用更短的路径。模块定义的代码默认是私有的，不过可以选择增加 "),a("code",[s._v("pub")]),s._v(" 关键字使其定义变为公有。")]),s._v(" "),a("p",[s._v("接下来，让我们看看一些标准库提供的集合数据类型，你可以利用它们编写出漂亮整洁的代码。")])])}),[],!1,null,null,null);t.default=_.exports}}]);