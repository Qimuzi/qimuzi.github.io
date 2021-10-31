(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{396:function(v,_,e){"use strict";e.r(_);var t=e(54),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"附录-c-可派生的-trait"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附录-c-可派生的-trait"}},[v._v("#")]),v._v(" 附录 C：可派生的 trait")]),v._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/appendix-03-derivable-traits.md",target:"_blank",rel:"noopener noreferrer"}},[v._v("appendix-03-derivable-traits.md"),e("OutboundLink")],1),v._v(" "),e("br"),v._v("\ncommit 426f3e4ec17e539ae9905ba559411169d303a031")])]),v._v(" "),e("p",[v._v("在本书的各个部分中，我们讨论了可应用于结构体和枚举定义的 "),e("code",[v._v("derive")]),v._v(" 属性。"),e("code",[v._v("derive")]),v._v(" 属性会在使用 "),e("code",[v._v("derive")]),v._v(" 语法标记的类型上生成对应 trait 的默认实现的代码。")]),v._v(" "),e("p",[v._v("在本附录中提供了标准库中所有可以使用 "),e("code",[v._v("derive")]),v._v(" 的 trait 的参考。这些部分涉及到：")]),v._v(" "),e("ul",[e("li",[v._v("该 trait 将会派生什么样的操作符和方法")]),v._v(" "),e("li",[v._v("由 "),e("code",[v._v("derive")]),v._v(" 提供什么样的 trait 实现")]),v._v(" "),e("li",[v._v("由什么来实现类型的 trait")]),v._v(" "),e("li",[v._v("是否允许实现该 trait 的条件")]),v._v(" "),e("li",[v._v("需要 trait 操作的例子")])]),v._v(" "),e("p",[v._v("如果你希望不同于 "),e("code",[v._v("derive")]),v._v(" 属性所提供的行为，请查阅 "),e("a",{attrs:{href:"https://doc.rust-lang.org/std/index.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("标准库文档"),e("OutboundLink")],1),v._v(" 中每个 trait 的细节以了解如何手动实现它们。")]),v._v(" "),e("p",[v._v("标准库中定义的其它 trait 不能通过 "),e("code",[v._v("derive")]),v._v(" 在类型上实现。这些 trait 不存在有意义的默认行为，所以由你负责以合理的方式实现它们。")]),v._v(" "),e("p",[v._v("一个无法被派生的 trait 的例子是为终端用户处理格式化的 "),e("code",[v._v("Display")]),v._v(" 。你应该时常考虑使用合适的方法来为终端用户显示一个类型。终端用户应该看到类型的什么部分？他们会找出相关部分吗？对他们来说最相关的数据格式是什么样的？Rust 编译器没有这样的洞察力，因此无法为你提供合适的默认行为。")]),v._v(" "),e("p",[v._v("本附录所提供的可派生 trait 列表并不全面：库可以为其自己的 trait 实现 "),e("code",[v._v("derive")]),v._v("，可以使用 "),e("code",[v._v("derive")]),v._v(" 的 trait 列表事实上是无限的。实现 "),e("code",[v._v("derive")]),v._v(" 涉及到过程宏的应用，这在第十九章的 "),e("RouterLink",{attrs:{to:"/ch19-06-macros.html#macros"}},[v._v("“宏”")]),v._v(" 有介绍。")],1),v._v(" "),e("h3",{attrs:{id:"用于程序员输出的-debug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用于程序员输出的-debug"}},[v._v("#")]),v._v(" 用于程序员输出的 "),e("code",[v._v("Debug")])]),v._v(" "),e("p",[e("code",[v._v("Debug")]),v._v(" trait 用于开启格式化字符串中的调试格式，其通过在 "),e("code",[v._v("{}")]),v._v(" 占位符中增加 "),e("code",[v._v(":?")]),v._v(" 表明。")]),v._v(" "),e("p",[e("code",[v._v("Debug")]),v._v(" trait 允许以调试目的来打印一个类型的实例，所以使用该类型的程序员可以在程序执行的特定时间点观察其实例。")]),v._v(" "),e("p",[v._v("例如，在使用 "),e("code",[v._v("assert_eq!")]),v._v(" 宏时，"),e("code",[v._v("Debug")]),v._v(" trait 是必须的。如果等式断言失败，这个宏就把给定实例的值作为参数打印出来，如此程序员可以看到两个实例为什么不相等。")]),v._v(" "),e("h3",{attrs:{id:"等值比较的-partialeq-和-eq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#等值比较的-partialeq-和-eq"}},[v._v("#")]),v._v(" 等值比较的 "),e("code",[v._v("PartialEq")]),v._v(" 和 "),e("code",[v._v("Eq")])]),v._v(" "),e("p",[e("code",[v._v("PartialEq")]),v._v(" trait 可以比较一个类型的实例以检查是否相等，并开启了 "),e("code",[v._v("==")]),v._v(" 和 "),e("code",[v._v("!=")]),v._v(" 运算符的功能。")]),v._v(" "),e("p",[v._v("派生的 "),e("code",[v._v("PartialEq")]),v._v(" 实现了 "),e("code",[v._v("eq")]),v._v(" 方法。当 "),e("code",[v._v("PartialEq")]),v._v(" 在结构体上派生时，只有"),e("em",[v._v("所有")]),v._v(" 的字段都相等时两个实例才相等，同时只要有任何字段不相等则两个实例就不相等。当在枚举上派生时，每一个成员都和其自身相等，且和其他成员都不相等。")]),v._v(" "),e("p",[v._v("例如，当使用 "),e("code",[v._v("assert_eq!")]),v._v(" 宏时，需要比较比较一个类型的两个实例是否相等，则 "),e("code",[v._v("PartialEq")]),v._v(" trait 是必须的。")]),v._v(" "),e("p",[e("code",[v._v("Eq")]),v._v(" trait 没有方法。其作用是表明每一个被标记类型的值等于其自身。"),e("code",[v._v("Eq")]),v._v(" trait 只能应用于那些实现了 "),e("code",[v._v("PartialEq")]),v._v(" 的类型，但并非所有实现了 "),e("code",[v._v("PartialEq")]),v._v(" 的类型都可以实现 "),e("code",[v._v("Eq")]),v._v("。浮点类型就是一个例子：浮点数的实现表明两个非数字（"),e("code",[v._v("NaN")]),v._v("，not-a-number）值是互不相等的。")]),v._v(" "),e("p",[v._v("例如，对于一个 "),e("code",[v._v("HashMap<K, V>")]),v._v(" 中的 key 来说， "),e("code",[v._v("Eq")]),v._v(" 是必须的，这样 "),e("code",[v._v("HashMap<K, V>")]),v._v(" 就可以知道两个 key 是否一样了。")]),v._v(" "),e("h3",{attrs:{id:"次序比较的-partialord-和-ord"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#次序比较的-partialord-和-ord"}},[v._v("#")]),v._v(" 次序比较的 "),e("code",[v._v("PartialOrd")]),v._v(" 和 "),e("code",[v._v("Ord")])]),v._v(" "),e("p",[e("code",[v._v("PartialOrd")]),v._v(" trait 可以基于排序的目的而比较一个类型的实例。实现了 "),e("code",[v._v("PartialOrd")]),v._v(" 的类型可以使用 "),e("code",[v._v("<")]),v._v("、 "),e("code",[v._v(">")]),v._v("、"),e("code",[v._v("<=")]),v._v(" 和 "),e("code",[v._v(">=")]),v._v(" 操作符。但只能在同时实现了 "),e("code",[v._v("PartialEq")]),v._v(" 的类型上使用 "),e("code",[v._v("PartialOrd")]),v._v("。")]),v._v(" "),e("p",[v._v("派生 "),e("code",[v._v("PartialOrd")]),v._v(" 实现了 "),e("code",[v._v("partial_cmp")]),v._v(" 方法，其返回一个 "),e("code",[v._v("Option<Ordering>")]),v._v(" ，但当给定值无法产生顺序时将返回 "),e("code",[v._v("None")]),v._v("。尽管大多数类型的值都可以比较，但一个无法产生顺序的例子是：浮点类型的非数字值。当在浮点数上调用 "),e("code",[v._v("partial_cmp")]),v._v(" 时，"),e("code",[v._v("NaN")]),v._v(" 的浮点数将返回 "),e("code",[v._v("None")]),v._v("。")]),v._v(" "),e("p",[v._v("当在结构体上派生时，"),e("code",[v._v("PartialOrd")]),v._v(" 以在结构体定义中字段出现的顺序比较每个字段的值来比较两个实例。当在枚举上派生时，认为在枚举定义中声明较早的枚举变体小于其后的变体。")]),v._v(" "),e("p",[v._v("例如，对于来自于 "),e("code",[v._v("rand")]),v._v(" crate 中的 "),e("code",[v._v("gen_range")]),v._v(" 方法来说，当在一个大值和小值指定的范围内生成一个随机值时，"),e("code",[v._v("PartialOrd")]),v._v(" trait 是必须的。")]),v._v(" "),e("p",[e("code",[v._v("Ord")]),v._v(" trait 也让你明白在一个带注解类型上的任意两个值存在有效顺序。"),e("code",[v._v("Ord")]),v._v(" trait 实现了 "),e("code",[v._v("cmp")]),v._v(" 方法，它返回一个 "),e("code",[v._v("Ordering")]),v._v(" 而不是 "),e("code",[v._v("Option<Ordering>")]),v._v("，因为总存在一个合法的顺序。只可以在实现了 "),e("code",[v._v("PartialOrd")]),v._v(" 和 "),e("code",[v._v("Eq")]),v._v("（"),e("code",[v._v("Eq")]),v._v(" 依赖 "),e("code",[v._v("PartialEq")]),v._v("）的类型上使用 "),e("code",[v._v("Ord")]),v._v(" trait 。当在结构体或枚举上派生时， "),e("code",[v._v("cmp")]),v._v(" 和以 "),e("code",[v._v("PartialOrd")]),v._v(" 派生实现的 "),e("code",[v._v("partial_cmp")]),v._v(" 表现一致。")]),v._v(" "),e("p",[v._v("例如，当在 "),e("code",[v._v("BTreeSet<T>")]),v._v("（一种基于有序值存储数据的数据结构）上存值时，"),e("code",[v._v("Ord")]),v._v(" 是必须的。")]),v._v(" "),e("h3",{attrs:{id:"复制值的-clone-和-copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制值的-clone-和-copy"}},[v._v("#")]),v._v(" 复制值的 "),e("code",[v._v("Clone")]),v._v(" 和 "),e("code",[v._v("Copy")])]),v._v(" "),e("p",[e("code",[v._v("Clone")]),v._v(" trait 可以明确地创建一个值的深拷贝（deep copy），复制过程可能包含任意代码的执行以及堆上数据的复制。查阅第四章 "),e("RouterLink",{attrs:{to:"/ch04-01-what-is-ownership.html#ways-variables-and-data-interact-clone"}},[v._v("“变量和数据的交互方式：移动”")]),v._v("  以获取有关 "),e("code",[v._v("Clone")]),v._v(" 的更多信息。")],1),v._v(" "),e("p",[v._v("派生 "),e("code",[v._v("Clone")]),v._v(" 实现了 "),e("code",[v._v("clone")]),v._v(" 方法，其为整个的类型实现时，在类型的每一部分上调用了 "),e("code",[v._v("clone")]),v._v(" 方法。这意味着类型中所有字段或值也必须实现了 "),e("code",[v._v("Clone")]),v._v("，这样才能够派生 "),e("code",[v._v("Clone")]),v._v(" 。")]),v._v(" "),e("p",[v._v("例如，当在一个切片（slice）上调用 "),e("code",[v._v("to_vec")]),v._v(" 方法时，"),e("code",[v._v("Clone")]),v._v(" 是必须的。切片并不拥有其所包含实例的类型，但是从 "),e("code",[v._v("to_vec")]),v._v(" 中返回的 vector 需要拥有其实例，因此，"),e("code",[v._v("to_vec")]),v._v(" 在每个元素上调用 "),e("code",[v._v("clone")]),v._v("。因此，存储在切片中的类型必须实现 "),e("code",[v._v("Clone")]),v._v("。")]),v._v(" "),e("p",[e("code",[v._v("Copy")]),v._v(" trait 允许你通过只拷贝存储在栈上的位来复制值而不需要额外的代码。查阅第四章 "),e("RouterLink",{attrs:{to:"/ch04-01-what-is-ownership.html#stack-only-data-copy"}},[v._v("“只在栈上的数据：拷贝”")]),v._v(" 的部分来获取有关 "),e("code",[v._v("Copy")]),v._v(" 的更多信息。")],1),v._v(" "),e("p",[e("code",[v._v("Copy")]),v._v(" trait 并未定义任何方法来阻止编程人员重写这些方法或违反不需要执行额外代码的假设。尽管如此，所有的编程人员可以假设复制（copy）一个值非常快。")]),v._v(" "),e("p",[v._v("可以在类型内部全部实现 "),e("code",[v._v("Copy")]),v._v(" trait 的任意类型上派生 "),e("code",[v._v("Copy")]),v._v("。 但只可以在那些同时实现了 "),e("code",[v._v("Clone")]),v._v(" 的类型上使用 "),e("code",[v._v("Copy")]),v._v(" trait ，因为一个实现了 "),e("code",[v._v("Copy")]),v._v(" 的类型也简单地实现了 "),e("code",[v._v("Clone")]),v._v("，其执行和 "),e("code",[v._v("Copy")]),v._v(" 相同的任务。")]),v._v(" "),e("p",[e("code",[v._v("Copy")]),v._v(" trait 很少使用；实现 "),e("code",[v._v("Copy")]),v._v(" 的类型是可以优化的，这意味着你无需调用 "),e("code",[v._v("clone")]),v._v("，这让代码更简洁。")]),v._v(" "),e("p",[v._v("任何使用 "),e("code",[v._v("Copy")]),v._v(" 的代码都可以通过 "),e("code",[v._v("Clone")]),v._v(" 实现，但代码可能会稍慢，或者不得不在代码中的许多位置上使用 "),e("code",[v._v("clone")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"固定大小的值到值映射的-hash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#固定大小的值到值映射的-hash"}},[v._v("#")]),v._v(" 固定大小的值到值映射的 "),e("code",[v._v("Hash")])]),v._v(" "),e("p",[e("code",[v._v("Hash")]),v._v(" trait 可以实例化一个任意大小的类型，并且能够用哈希（hash）函数将该实例映射到一个固定大小的值上。派生 "),e("code",[v._v("Hash")]),v._v(" 实现了 "),e("code",[v._v("hash")]),v._v(" 方法。"),e("code",[v._v("hash")]),v._v(" 方法的派生实现结合了在类型的每部分调用 "),e("code",[v._v("hash")]),v._v(" 的结果，这意味着所有的字段或值也必须实现了 "),e("code",[v._v("Hash")]),v._v("，这样才能够派生 "),e("code",[v._v("Hash")]),v._v("。")]),v._v(" "),e("p",[v._v("例如，在 "),e("code",[v._v("HashMap<K, V>")]),v._v(" 上存储数据，存放 key 的时候，"),e("code",[v._v("Hash")]),v._v(" 是必须的。")]),v._v(" "),e("h3",{attrs:{id:"默认值的-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认值的-default"}},[v._v("#")]),v._v(" 默认值的 "),e("code",[v._v("Default")])]),v._v(" "),e("p",[e("code",[v._v("Default")]),v._v(" trait 使你创建一个类型的默认值。 派生 "),e("code",[v._v("Default")]),v._v(" 实现了 "),e("code",[v._v("default")]),v._v(" 函数。"),e("code",[v._v("default")]),v._v(" 函数的派生实现调用了类型每部分的 "),e("code",[v._v("default")]),v._v(" 函数，这意味着类型中所有的字段或值也必须实现了 "),e("code",[v._v("Default")]),v._v("，这样才能够派生 "),e("code",[v._v("Default")]),v._v(" 。")]),v._v(" "),e("p",[e("code",[v._v("Default::default")]),v._v(" 函数通常结合结构体更新语法一起使用，这在第五章的 "),e("RouterLink",{attrs:{to:"/ch05-01-defining-structs.html#creating-instances-from-other-instances-with-struct-update-syntax"}},[v._v("“使用结构体更新语法从其他实例中创建实例”")]),v._v(" 部分有讨论。可以自定义一个结构体的一小部分字段而剩余字段则使用 "),e("code",[v._v("..Default::default()")]),v._v(" 设置为默认值。")],1),v._v(" "),e("p",[v._v("例如，当你在 "),e("code",[v._v("Option<T>")]),v._v(" 实例上使用 "),e("code",[v._v("unwrap_or_default")]),v._v(" 方法时，"),e("code",[v._v("Default")]),v._v(" trait是必须的。如果 "),e("code",[v._v("Option<T>")]),v._v(" 是 "),e("code",[v._v("None")]),v._v("的话, "),e("code",[v._v("unwrap_or_default")]),v._v(" 方法将返回存储在 "),e("code",[v._v("Option<T>")]),v._v(" 中 "),e("code",[v._v("T")]),v._v(" 类型的 "),e("code",[v._v("Default::default")]),v._v(" 的结果。")])])}),[],!1,null,null,null);_.default=o.exports}}]);