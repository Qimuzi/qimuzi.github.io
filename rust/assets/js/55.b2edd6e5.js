(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{438:function(s,t,e){"use strict";e.r(t);var a=e(54),v=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"panic-还是不-panic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#panic-还是不-panic"}},[s._v("#")]),s._v(" "),e("code",[s._v("panic!")]),s._v(" 还是不 "),e("code",[s._v("panic!")])]),s._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/ch09-03-to-panic-or-not-to-panic.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("ch09-03-to-panic-or-not-to-panic.md"),e("OutboundLink")],1),s._v(" "),e("br"),s._v("\ncommit 76df60bccead5f3de96db23d97b69597cd8a2b82")])]),s._v(" "),e("p",[s._v("那么，该如何决定何时应该 "),e("code",[s._v("panic!")]),s._v(" 以及何时应该返回 "),e("code",[s._v("Result")]),s._v(" 呢？如果代码 panic，就没有恢复的可能。你可以选择对任何错误场景都调用 "),e("code",[s._v("panic!")]),s._v("，不管是否有可能恢复，不过这样就是你代替调用者决定了这是不可恢复的。选择返回 "),e("code",[s._v("Result")]),s._v(" 值的话，就将选择权交给了调用者，而不是代替他们做出决定。调用者可能会选择以符合他们场景的方式尝试恢复，或者也可能干脆就认为 "),e("code",[s._v("Err")]),s._v(" 是不可恢复的，所以他们也可能会调用 "),e("code",[s._v("panic!")]),s._v(" 并将可恢复的错误变成了不可恢复的错误。因此返回 "),e("code",[s._v("Result")]),s._v(" 是定义可能会失败的函数的一个好的默认选择。")]),s._v(" "),e("p",[s._v("有一些情况 panic 比返回 "),e("code",[s._v("Result")]),s._v(" 更为合适，不过他们并不常见。让我们讨论一下为何在示例、代码原型和测试中，以及那些人们认为不会失败而编译器不这么看的情况下， panic 是合适的。章节最后会总结一些在库代码中如何决定是否要 panic 的通用指导原则。")]),s._v(" "),e("h3",{attrs:{id:"示例、代码原型和测试都非常适合-panic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例、代码原型和测试都非常适合-panic"}},[s._v("#")]),s._v(" 示例、代码原型和测试都非常适合 panic")]),s._v(" "),e("p",[s._v("当你编写一个示例来展示一些概念时，在拥有健壮的错误处理代码的同时也会使得例子不那么明确。例如，调用一个类似 "),e("code",[s._v("unwrap")]),s._v(" 这样可能 "),e("code",[s._v("panic!")]),s._v(" 的方法可以被理解为一个你实际希望程序处理错误方式的占位符，它根据其余代码运行方式可能会各不相同。")]),s._v(" "),e("p",[s._v("类似地，在我们准备好决定如何处理错误之前，"),e("code",[s._v("unwrap")]),s._v("和"),e("code",[s._v("expect")]),s._v("方法在原型设计时非常方便。当我们准备好让程序更加健壮时，它们会在代码中留下清晰的标记。")]),s._v(" "),e("p",[s._v("如果方法调用在测试中失败了，我们希望这个测试都失败，即便这个方法并不是需要测试的功能。因为 "),e("code",[s._v("panic!")]),s._v(" 会将测试标记为失败，此时调用 "),e("code",[s._v("unwrap")]),s._v(" 或 "),e("code",[s._v("expect")]),s._v(" 是恰当的。")]),s._v(" "),e("h3",{attrs:{id:"当我们比编译器知道更多的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当我们比编译器知道更多的情况"}},[s._v("#")]),s._v(" 当我们比编译器知道更多的情况")]),s._v(" "),e("p",[s._v("当你有一些其他的逻辑来确保 "),e("code",[s._v("Result")]),s._v(" 会是 "),e("code",[s._v("Ok")]),s._v(" 值时，调用 "),e("code",[s._v("unwrap")]),s._v(" 也是合适的，虽然编译器无法理解这种逻辑。你仍然需要处理一个 "),e("code",[s._v("Result")]),s._v(" 值：即使在你的特定情况下逻辑上是不可能的，你所调用的任何操作仍然有可能失败。如果通过人工检查代码来确保永远也不会出现 "),e("code",[s._v("Err")]),s._v(" 值，那么调用 "),e("code",[s._v("unwrap")]),s._v(" 也是完全可以接受的，这里是一个例子：")]),s._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("std"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("net"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IpAddr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" home"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IpAddr")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("unwrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[s._v("我们通过解析一个硬编码的字符来创建一个 "),e("code",[s._v("IpAddr")]),s._v(" 实例。可以看出 "),e("code",[s._v("127.0.0.1")]),s._v(" 是一个有效的 IP 地址，所以这里使用 "),e("code",[s._v("unwrap")]),s._v(" 是可以接受的。然而，拥有一个硬编码的有效的字符串也不能改变 "),e("code",[s._v("parse")]),s._v(" 方法的返回值类型：它仍然是一个 "),e("code",[s._v("Result")]),s._v(" 值，而编译器仍然会要求我们处理这个 "),e("code",[s._v("Result")]),s._v("，好像还是有可能出现 "),e("code",[s._v("Err")]),s._v(" 成员那样。这是因为编译器还没有智能到可以识别出这个字符串总是一个有效的 IP 地址。如果 IP 地址字符串来源于用户而不是硬编码进程序中的话，那么就 "),e("strong",[s._v("确实")]),s._v(" 有失败的可能性，这时就绝对需要我们以一种更健壮的方式处理 "),e("code",[s._v("Result")]),s._v(" 了。")]),s._v(" "),e("h3",{attrs:{id:"错误处理指导原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误处理指导原则"}},[s._v("#")]),s._v(" 错误处理指导原则")]),s._v(" "),e("p",[s._v("在当有可能会导致有害状态的情况下建议使用 "),e("code",[s._v("panic!")]),s._v(" —— 在这里，有害状态是指当一些假设、保证、协议或不可变性被打破的状态，例如无效的值、自相矛盾的值或者被传递了不存在的值 —— 外加如下几种情况：")]),s._v(" "),e("ul",[e("li",[s._v("有害状态并不包含 "),e("strong",[s._v("预期")]),s._v(" 会偶尔发生的错误")]),s._v(" "),e("li",[s._v("在此之后代码的运行依赖于不处于这种有害状态")]),s._v(" "),e("li",[s._v("当没有可行的手段来将有害状态信息编码进所使用的类型中的情况")])]),s._v(" "),e("p",[s._v("如果别人调用你的代码并传递了一个没有意义的值，最好的情况也许就是 "),e("code",[s._v("panic!")]),s._v(" 并警告使用你的库的人他的代码中有 bug 以便他能在开发时就修复它。类似的，如果你正在调用不受你控制的外部代码，并且它返回了一个你无法修复的无效状态，那么 "),e("code",[s._v("panic!")]),s._v(" 往往是合适的。")]),s._v(" "),e("p",[s._v("然而当错误预期会出现时，返回 "),e("code",[s._v("Result")]),s._v(" 仍要比调用 "),e("code",[s._v("panic!")]),s._v(" 更为合适。这样的例子包括解析器接收到格式错误的数据，或者 HTTP 请求返回了一个表明触发了限流的状态。在这些例子中，应该通过返回 "),e("code",[s._v("Result")]),s._v(" 来表明失败预期是可能的，这样将有害状态向上传播，调用者就可以决定该如何处理这个问题。使用 "),e("code",[s._v("panic!")]),s._v(" 来处理这些情况就不是最好的选择。")]),s._v(" "),e("p",[s._v("当代码对值进行操作时，应该首先验证值是有效的，并在其无效时 "),e("code",[s._v("panic!")]),s._v("。这主要是出于安全的原因：尝试操作无效数据会暴露代码漏洞，这就是标准库在尝试越界访问数组时会 "),e("code",[s._v("panic!")]),s._v(" 的主要原因：尝试访问不属于当前数据结构的内存是一个常见的安全隐患。函数通常都遵循 "),e("strong",[s._v("契约")]),s._v("（"),e("em",[s._v("contracts")]),s._v("）：他们的行为只有在输入满足特定条件时才能得到保证。当违反契约时 panic 是有道理的，因为这通常代表调用方的 bug，而且这也不是那种你希望所调用的代码必须处理的错误。事实上所调用的代码也没有合理的方式来恢复，而是需要调用方的 "),e("strong",[s._v("程序员")]),s._v(" 修复其代码。函数的契约，尤其是当违反它会造成 panic 的契约，应该在函数的 API 文档中得到解释。")]),s._v(" "),e("p",[s._v("虽然在所有函数中都拥有许多错误检查是冗长而烦人的。幸运的是，可以利用 Rust 的类型系统（以及编译器的类型检查）为你进行很多检查。如果函数有一个特定类型的参数，可以在知晓编译器已经确保其拥有一个有效值的前提下进行你的代码逻辑。例如，如果你使用了一个并不是 "),e("code",[s._v("Option")]),s._v(" 的类型，则程序期望它是 "),e("strong",[s._v("有值")]),s._v(" 的并且不是 "),e("strong",[s._v("空值")]),s._v("。你的代码无需处理 "),e("code",[s._v("Some")]),s._v(" 和 "),e("code",[s._v("None")]),s._v(" 这两种情况，它只会有一种情况就是绝对会有一个值。尝试向函数传递空值的代码甚至根本不能编译，所以你的函数在运行时没有必要判空。另外一个例子是使用像 "),e("code",[s._v("u32")]),s._v(" 这样的无符号整型，也会确保它永远不为负。")]),s._v(" "),e("h3",{attrs:{id:"创建自定义类型进行有效性验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建自定义类型进行有效性验证"}},[s._v("#")]),s._v(" 创建自定义类型进行有效性验证")]),s._v(" "),e("p",[s._v("让我们使用 Rust 类型系统的思想来进一步确保值的有效性，并尝试创建一个自定义类型以进行验证。回忆一下第二章的猜猜看游戏，我们的代码要求用户猜测一个 1 到 100 之间的数字，在将其与秘密数字做比较之前我们从未验证用户的猜测是位于这两个数字之间的，我们只验证它是否为正。在这种情况下，其影响并不是很严重：“Too high” 或 “Too low” 的输出仍然是正确的。但是这是一个很好的引导用户得出有效猜测的辅助，例如当用户猜测一个超出范围的数字或者输入字母时采取不同的行为。")]),s._v(" "),e("p",[s._v("一种实现方式是将猜测解析成 "),e("code",[s._v("i32")]),s._v(" 而不仅仅是 "),e("code",[s._v("u32")]),s._v("，来默许输入负数，接着检查数字是否在范围内：")]),s._v(" "),e("div",{staticClass:"language-rust,ignore extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('loop {\n    // --snip--\n\n    let guess: i32 = match guess.trim().parse() {\n        Ok(num) => num,\n        Err(_) => continue,\n    };\n\n    if guess < 1 || guess > 100 {\n        println!("The secret number will be between 1 and 100.");\n        continue;\n    }\n\n    match guess.cmp(&secret_number) {\n    // --snip--\n}\n')])])]),e("p",[e("code",[s._v("if")]),s._v(" 表达式检查了值是否超出范围，告诉用户出了什么问题，并调用 "),e("code",[s._v("continue")]),s._v(" 开始下一次循环，请求另一个猜测。"),e("code",[s._v("if")]),s._v(" 表达式之后，就可以在知道 "),e("code",[s._v("guess")]),s._v(" 在 1 到 100 之间的情况下与秘密数字作比较了。")]),s._v(" "),e("p",[s._v("然而，这并不是一个理想的解决方案：如果让程序仅仅处理 1 到 100 之间的值是一个绝对需要满足的要求，而且程序中的很多函数都有这样的要求，在每个函数中都有这样的检查将是非常冗余的（并可能潜在的影响性能）。")]),s._v(" "),e("p",[s._v("相反我们可以创建一个新类型来将验证放入创建其实例的函数中，而不是到处重复这些检查。这样就可以安全的在函数签名中使用新类型并相信他们接收到的值。示例 9-10 中展示了一个定义 "),e("code",[s._v("Guess")]),s._v(" 类型的方法，只有在 "),e("code",[s._v("new")]),s._v(" 函数接收到 1 到 100 之间的值时才会创建 "),e("code",[s._v("Guess")]),s._v(" 的实例：")]),s._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[s._v("Guess")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("i32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("impl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Guess")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("new")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("i32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Guess")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("panic!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Guess value must be between 1 and 100, got {}."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Guess")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            value\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("i32")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[e("span",{staticClass:"caption"},[s._v("示例 9-10：一个 "),e("code",[s._v("Guess")]),s._v(" 类型，它只在值位于 1 和 100 之间时才继续")])]),s._v(" "),e("p",[s._v("首先，我们定义了一个包含 "),e("code",[s._v("i32")]),s._v(" 类型字段 "),e("code",[s._v("value")]),s._v(" 的结构体 "),e("code",[s._v("Guess")]),s._v("。这里是储存猜测值的地方。")]),s._v(" "),e("p",[s._v("接着在 "),e("code",[s._v("Guess")]),s._v(" 上实现了一个叫做 "),e("code",[s._v("new")]),s._v(" 的关联函数来创建 "),e("code",[s._v("Guess")]),s._v(" 的实例。"),e("code",[s._v("new")]),s._v(" 定义为接收一个 "),e("code",[s._v("i32")]),s._v(" 类型的参数 "),e("code",[s._v("value")]),s._v(" 并返回一个 "),e("code",[s._v("Guess")]),s._v("。"),e("code",[s._v("new")]),s._v(" 函数中代码的测试确保了其值是在 1 到 100 之间的。如果 "),e("code",[s._v("value")]),s._v(" 没有通过测试则调用 "),e("code",[s._v("panic!")]),s._v("，这会警告调用这个函数的程序员有一个需要修改的 bug，因为创建一个 "),e("code",[s._v("value")]),s._v(" 超出范围的 "),e("code",[s._v("Guess")]),s._v(" 将会违反 "),e("code",[s._v("Guess::new")]),s._v(" 所遵循的契约。"),e("code",[s._v("Guess::new")]),s._v(" 会出现 panic 的条件应该在其公有 API 文档中被提及；第十四章会涉及到在 API 文档中表明 "),e("code",[s._v("panic!")]),s._v(" 可能性的相关规则。如果 "),e("code",[s._v("value")]),s._v(" 通过了测试，我们新建一个 "),e("code",[s._v("Guess")]),s._v("，其字段 "),e("code",[s._v("value")]),s._v(" 将被设置为参数 "),e("code",[s._v("value")]),s._v(" 的值，接着返回这个 "),e("code",[s._v("Guess")]),s._v("。")]),s._v(" "),e("p",[s._v("接着，我们实现了一个借用了 "),e("code",[s._v("self")]),s._v(" 的方法 "),e("code",[s._v("value")]),s._v("，它没有任何其他参数并返回一个 "),e("code",[s._v("i32")]),s._v("。这类方法有时被称为 "),e("em",[s._v("getter")]),s._v("，因为它的目的就是返回对应字段的数据。这样的公有方法是必要的，因为 "),e("code",[s._v("Guess")]),s._v(" 结构体的 "),e("code",[s._v("value")]),s._v(" 字段是私有的。私有的字段 "),e("code",[s._v("value")]),s._v(" 是很重要的，这样使用 "),e("code",[s._v("Guess")]),s._v(" 结构体的代码将不允许直接设置 "),e("code",[s._v("value")]),s._v(" 的值：调用者 "),e("strong",[s._v("必须")]),s._v(" 使用 "),e("code",[s._v("Guess::new")]),s._v(" 方法来创建一个 "),e("code",[s._v("Guess")]),s._v(" 的实例，这就确保了不会存在一个 "),e("code",[s._v("value")]),s._v(" 没有通过 "),e("code",[s._v("Guess::new")]),s._v(" 函数的条件检查的 "),e("code",[s._v("Guess")]),s._v("。")]),s._v(" "),e("p",[s._v("于是，一个接收（或返回） 1 到 100 之间数字的函数就可以声明为接收（或返回） "),e("code",[s._v("Guess")]),s._v("的实例，而不是 "),e("code",[s._v("i32")]),s._v("，同时其函数体中也无需进行任何额外的检查。")]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("Rust 的错误处理功能被设计为帮助你编写更加健壮的代码。"),e("code",[s._v("panic!")]),s._v(" 宏代表一个程序无法处理的状态，并停止执行而不是使用无效或不正确的值继续处理。Rust 类型系统的 "),e("code",[s._v("Result")]),s._v(" 枚举代表操作可能会在一种可以恢复的情况下失败。可以使用 "),e("code",[s._v("Result")]),s._v(" 来告诉代码调用者他需要处理潜在的成功或失败。在适当的场景使用 "),e("code",[s._v("panic!")]),s._v(" 和 "),e("code",[s._v("Result")]),s._v(" 将会使你的代码在面对不可避免的错误时显得更加可靠。")]),s._v(" "),e("p",[s._v("现在我们已经见识过了标准库中 "),e("code",[s._v("Option")]),s._v(" 和 "),e("code",[s._v("Result")]),s._v(" 泛型枚举的能力了，在下一章让我们聊聊泛型是如何工作的，以及如何在你的代码中使用他们。")])])}),[],!1,null,null,null);t.default=v.exports}}]);