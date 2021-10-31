(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{434:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"哈希-map-储存键值对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希-map-储存键值对"}},[t._v("#")]),t._v(" 哈希 map 储存键值对")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/ch08-03-hash-maps.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch08-03-hash-maps.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 85b02530cc749565c26c05bf1b3a838334e9717f")])]),t._v(" "),a("p",[t._v("最后介绍的常用集合类型是 "),a("strong",[t._v("哈希 map")]),t._v("（"),a("em",[t._v("hash map")]),t._v("）。"),a("code",[t._v("HashMap<K, V>")]),t._v(" 类型储存了一个键类型 "),a("code",[t._v("K")]),t._v(" 对应一个值类型 "),a("code",[t._v("V")]),t._v(" 的映射。它通过一个 "),a("strong",[t._v("哈希函数")]),t._v("（"),a("em",[t._v("hashing function")]),t._v("）来实现映射，决定如何将键和值放入内存中。很多编程语言支持这种数据结构，不过通常有不同的名字：哈希、map、对象、哈希表或者关联数组，仅举几例。")]),t._v(" "),a("p",[t._v("哈希 map 可以用于需要任何类型作为键来寻找数据的情况，而不是像 vector 那样通过索引。例如，在一个游戏中，你可以将每个团队的分数记录到哈希 map 中，其中键是队伍的名字而值是每个队伍的分数。给出一个队名，就能得到他们的得分。")]),t._v(" "),a("p",[t._v("本章我们会介绍哈希 map 的基本 API，不过还有更多吸引人的功能隐藏于标准库在 "),a("code",[t._v("HashMap<K, V>")]),t._v(" 上定义的函数中。一如既往请查看标准库文档来了解更多信息。")]),t._v(" "),a("h3",{attrs:{id:"新建一个哈希-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建一个哈希-map"}},[t._v("#")]),t._v(" 新建一个哈希 map")]),t._v(" "),a("p",[t._v("可以使用 "),a("code",[t._v("new")]),t._v(" 创建一个空的 "),a("code",[t._v("HashMap")]),t._v("，并使用 "),a("code",[t._v("insert")]),t._v(" 增加元素。在示例 8-20 中我们记录两支队伍的分数，分别是蓝队和黄队。蓝队开始有 10 分而黄队开始有 50 分：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" scores "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 8-20：新建一个哈希 map 并插入一些键值对")])]),t._v(" "),a("p",[t._v("注意必须首先 "),a("code",[t._v("use")]),t._v(" 标准库中集合部分的 "),a("code",[t._v("HashMap")]),t._v("。在这三个常用集合中，"),a("code",[t._v("HashMap")]),t._v(" 是最不常用的，所以并没有被 prelude 自动引用。标准库中对 "),a("code",[t._v("HashMap")]),t._v(" 的支持也相对较少，例如，并没有内建的构建宏。")]),t._v(" "),a("p",[t._v("像 vector 一样，哈希 map 将它们的数据储存在堆上，这个 "),a("code",[t._v("HashMap")]),t._v(" 的键类型是 "),a("code",[t._v("String")]),t._v(" 而值类型是 "),a("code",[t._v("i32")]),t._v("。类似于 vector，哈希 map 是同质的：所有的键必须是相同类型，值也必须都是相同类型。")]),t._v(" "),a("p",[t._v("另一个构建哈希 map 的方法是使用一个元组的 vector 的 "),a("code",[t._v("collect")]),t._v(" 方法，其中每个元组包含一个键值对。"),a("code",[t._v("collect")]),t._v(" 方法可以将数据收集进一系列的集合类型，包括 "),a("code",[t._v("HashMap")]),t._v("。例如，如果队伍的名字和初始分数分别在两个 vector 中，可以使用 "),a("code",[t._v("zip")]),t._v(" 方法来创建一个元组的 vector，其中 “Blue” 与 10 是一对，依此类推。接着就可以使用 "),a("code",[t._v("collect")]),t._v(" 方法将这个元组 vector 转换成一个 "),a("code",[t._v("HashMap")]),t._v("，如示例 8-21 所示：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" teams  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" initial_scores "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" scores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" teams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initial_scores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 8-21：用队伍列表和分数列表创建哈希 map")])]),t._v(" "),a("p",[t._v("这里 "),a("code",[t._v("HashMap<_, _>")]),t._v(" 类型注解是必要的，因为可能 "),a("code",[t._v("collect")]),t._v(" 为很多不同的数据结构，而除非显式指定否则 Rust 无从得知你需要的类型。但是对于键和值的类型参数来说，可以使用下划线占位，而 Rust 能够根据 vector 中数据的类型推断出 "),a("code",[t._v("HashMap")]),t._v(" 所包含的类型。")]),t._v(" "),a("h3",{attrs:{id:"哈希-map-和所有权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希-map-和所有权"}},[t._v("#")]),t._v(" 哈希 map 和所有权")]),t._v(" "),a("p",[t._v("对于像 "),a("code",[t._v("i32")]),t._v(" 这样的实现了 "),a("code",[t._v("Copy")]),t._v(" trait 的类型，其值可以拷贝进哈希 map。对于像 "),a("code",[t._v("String")]),t._v(" 这样拥有所有权的值，其值将被移动而哈希 map 会成为这些值的所有者，如示例 8-22 所示：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" field_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Favorite color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" field_value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" field_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里 field_name 和 field_value 不再有效，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试使用它们看看会出现什么编译错误！")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 8-22：展示一旦键值对被插入后就为哈希 map 所拥有")])]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("insert")]),t._v(" 调用将 "),a("code",[t._v("field_name")]),t._v(" 和 "),a("code",[t._v("field_value")]),t._v(" 移动到哈希 map 中后，将不能使用这两个绑定。")]),t._v(" "),a("p",[t._v("如果将值的引用插入哈希 map，这些值本身将不会被移动进哈希 map。但是这些引用指向的值必须至少在哈希 map 有效时也是有效的。第十章 "),a("RouterLink",{attrs:{to:"/ch10-03-lifetime-syntax.html#validating-references-with-lifetimes"}},[t._v("“生命周期与引用有效性”")]),t._v(" 部分将会更多的讨论这个问题。")],1),t._v(" "),a("h3",{attrs:{id:"访问哈希-map-中的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问哈希-map-中的值"}},[t._v("#")]),t._v(" 访问哈希 map 中的值")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("get")]),t._v(" 方法并提供对应的键来从哈希 map 中获取值，如示例 8-23 所示：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" scores "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" team_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("team_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 8-23：访问哈希 map 中储存的蓝队分数")])]),t._v(" "),a("p",[t._v("这里，"),a("code",[t._v("score")]),t._v(" 是与蓝队分数相关的值，应为 "),a("code",[t._v("Some(10)")]),t._v("。因为 "),a("code",[t._v("get")]),t._v(" 返回 "),a("code",[t._v("Option<V>")]),t._v("，所以结果被装进 "),a("code",[t._v("Some")]),t._v("；如果某个键在哈希 map 中没有对应的值，"),a("code",[t._v("get")]),t._v(" 会返回 "),a("code",[t._v("None")]),t._v("。这时就要用某种第六章提到的方法之一来处理 "),a("code",[t._v("Option")]),t._v("。")]),t._v(" "),a("p",[t._v("可以使用与 vector 类似的方式来遍历哈希 map 中的每一个键值对，也就是 "),a("code",[t._v("for")]),t._v(" 循环：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" scores "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("scores "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{}: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这会以任意顺序打印出每一个键值对：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Yellow: 50\nBlue: 10\n")])])]),a("h3",{attrs:{id:"更新哈希-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新哈希-map"}},[t._v("#")]),t._v(" 更新哈希 map")]),t._v(" "),a("p",[t._v("尽管键值对的数量是可以增长的，不过任何时候，每个键只能关联一个值。当我们想要改变哈希 map 中的数据时，必须决定如何处理一个键已经有值了的情况。可以选择完全无视旧值并用新值代替旧值。可以选择保留旧值而忽略新值，并只在键 "),a("strong",[t._v("没有")]),t._v(" 对应值时增加新值。或者可以结合新旧两值。让我们看看这分别该如何处理！")]),t._v(" "),a("h4",{attrs:{id:"覆盖一个值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖一个值"}},[t._v("#")]),t._v(" 覆盖一个值")]),t._v(" "),a("p",[t._v("如果我们插入了一个键值对，接着用相同的键插入一个不同的值，与这个键相关联的旧值将被替换。即便示例 8-24 中的代码调用了两次 "),a("code",[t._v("insert")]),t._v("，哈希 map 也只会包含一个键值对，因为两次都是对蓝队的键插入的值：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" scores "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:?}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 8-24：替换以特定键储存的值")])]),t._v(" "),a("p",[t._v("这会打印出 "),a("code",[t._v('{"Blue": 25}')]),t._v("。原始的值 "),a("code",[t._v("10")]),t._v(" 则被覆盖了。")]),t._v(" "),a("h4",{attrs:{id:"只在键没有对应值时插入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只在键没有对应值时插入"}},[t._v("#")]),t._v(" 只在键没有对应值时插入")]),t._v(" "),a("p",[t._v("我们经常会检查某个特定的键是否有值，如果没有就插入一个值。为此哈希 map 有一个特有的 API，叫做 "),a("code",[t._v("entry")]),t._v("，它获取我们想要检查的键作为参数。"),a("code",[t._v("entry")]),t._v(" 函数的返回值是一个枚举，"),a("code",[t._v("Entry")]),t._v("，它代表了可能存在也可能不存在的值。比如说我们想要检查黄队的键是否关联了一个值。如果没有，就插入值 50，对于蓝队也是如此。使用 entry API 的代码看起来像示例 8-25 这样：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" scores "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("or_insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("or_insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:?}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 8-25：使用 "),a("code",[t._v("entry")]),t._v(" 方法只在键没有对应一个值时插入")])]),t._v(" "),a("p",[a("code",[t._v("Entry")]),t._v(" 的 "),a("code",[t._v("or_insert")]),t._v(" 方法在键对应的值存在时就返回这个值的可变引用，如果不存在则将参数作为新值插入并返回新值的可变引用。这比编写自己的逻辑要简明的多，另外也与借用检查器结合得更好。")]),t._v(" "),a("p",[t._v("运行示例 8-25 的代码会打印出 "),a("code",[t._v('{"Yellow": 50, "Blue": 10}')]),t._v("。第一个 "),a("code",[t._v("entry")]),t._v(" 调用会插入黄队的键和值 "),a("code",[t._v("50")]),t._v("，因为黄队并没有一个值。第二个 "),a("code",[t._v("entry")]),t._v(" 调用不会改变哈希 map 因为蓝队已经有了值 "),a("code",[t._v("10")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"根据旧值更新一个值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据旧值更新一个值"}},[t._v("#")]),t._v(" 根据旧值更新一个值")]),t._v(" "),a("p",[t._v("另一个常见的哈希 map 的应用场景是找到一个键对应的值并根据旧的值更新它。例如，示例 8-26 中的代码计数一些文本中每一个单词分别出现了多少次。我们使用哈希 map 以单词作为键并递增其值来记录我们遇到过几次这个单词。如果是第一次看到某个单词，就插入值 "),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world wonderful world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" word "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split_whitespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("or_insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{:?}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 8-26：通过哈希 map 储存单词和计数来统计出现次数")])]),t._v(" "),a("p",[t._v("这会打印出 "),a("code",[t._v('{"world": 2, "hello": 1, "wonderful": 1}')]),t._v("，"),a("code",[t._v("or_insert")]),t._v(" 方法事实上会返回这个键的值的一个可变引用（"),a("code",[t._v("&mut V")]),t._v("）。这里我们将这个可变引用储存在 "),a("code",[t._v("count")]),t._v(" 变量中，所以为了赋值必须首先使用星号（"),a("code",[t._v("*")]),t._v("）解引用 "),a("code",[t._v("count")]),t._v("。这个可变引用在 "),a("code",[t._v("for")]),t._v(" 循环的结尾离开作用域，这样所有这些改变都是安全的并符合借用规则。")]),t._v(" "),a("h3",{attrs:{id:"哈希函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希函数"}},[t._v("#")]),t._v(" 哈希函数")]),t._v(" "),a("p",[a("code",[t._v("HashMap")]),t._v(" 默认使用一种 “密码学安全的”（“cryptographically strong” ）"),a("a",{attrs:{href:"%5Bhttps://www.131002.net/siphash/siphash.pdf%5D(https://www.131002.net/siphash/siphash.pdf)"}},[t._v("^siphash")]),t._v(" 哈希函数，它可以抵抗拒绝服务（Denial of Service, DoS）攻击。然而这并不是可用的最快的算法，不过为了更高的安全性值得付出一些性能的代价。如果性能监测显示此哈希函数非常慢，以致于你无法接受，你可以指定一个不同的 "),a("em",[t._v("hasher")]),t._v(" 来切换为其它函数。hasher 是一个实现了 "),a("code",[t._v("BuildHasher")]),t._v(" trait 的类型。第十章会讨论 trait 和如何实现它们。你并不需要从头开始实现你自己的 hasher；"),a("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("crates.io"),a("OutboundLink")],1),t._v(" 有其他人分享的实现了许多常用哈希算法的 hasher 的库。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("vector、字符串和哈希 map 会在你的程序需要储存、访问和修改数据时帮助你。这里有一些你应该能够解决的练习问题：")]),t._v(" "),a("ul",[a("li",[t._v("给定一系列数字，使用 vector 并返回这个列表的平均数（mean, average）、中位数（排列数组后位于中间的值）和众数（mode，出现次数最多的值；这里哈希 map 会很有帮助）。")]),t._v(" "),a("li",[t._v("将字符串转换为 Pig Latin，也就是每一个单词的第一个辅音字母被移动到单词的结尾并增加 “ay”，所以 “first” 会变成 “irst-fay”。元音字母开头的单词则在结尾增加  “hay”（“apple” 会变成 “apple-hay”）。牢记 UTF-8 编码！")]),t._v(" "),a("li",[t._v("使用哈希 map 和 vector，创建一个文本接口来允许用户向公司的部门中增加员工的名字。例如，“Add Sally to Engineering” 或 “Add Amir to Sales”。接着让用户获取一个部门的所有员工的列表，或者公司每个部门的所有员工按照字典序排列的列表。")])]),t._v(" "),a("p",[t._v("标准库 API 文档中描述的这些类型的方法将有助于你进行这些练习！")]),t._v(" "),a("p",[t._v("我们已经开始接触可能会有失败操作的复杂程序了，这也意味着接下来是一个了解错误处理的绝佳时机！")])])}),[],!1,null,null,null);s.default=e.exports}}]);