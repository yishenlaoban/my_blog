(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{584:function(a,t,e){"use strict";e.r(t);var s=e(3),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_3-render和ui渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-render和ui渲染"}},[a._v("#")]),a._v(" 3.render和UI渲染")]),a._v(" "),e("h3",{attrs:{id:"_1-renderxxxx-渲染页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-renderxxxx-渲染页面"}},[a._v("#")]),a._v(" 1.renderXXXX()  渲染页面")]),a._v(" "),e("p",[a._v("注意：后面的如果一个Action(方法)有多个render,那么后续的render会覆盖前面的render")]),a._v(" "),e("p",[a._v("​           renderError()除外，")]),a._v(" "),e("p",[a._v("**注意：**在前后端分离时，我们使用 创建JSon对象获取数据（这样做就只会返回前端需要的数据，而set方法会把一些不相关的数据也返回），在renderJson回去，前端会处理Json对象，")]),a._v(" "),e("p",[a._v("在未分离的项目中，我们使用set 方法，这样更方便处理数据")]),a._v(" "),e("h3",{attrs:{id:"_2-模板引擎-如freemark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-模板引擎-如freemark"}},[a._v("#")]),a._v(" 2.模板引擎（如FreeMark）")]),a._v(" "),e("p",[a._v("定义： 是一种可以把“标签”转化成HTML的一个程序或功能，通过类HTML的标签，实现HTML片段的重用，数据与业务代码分离等功能")]),a._v(" "),e("h1",{attrs:{id:"_4-jfinal转发与跳转的三种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-jfinal转发与跳转的三种方式"}},[a._v("#")]),a._v(" 4.JFinal转发与跳转的三种方式")]),a._v(" "),e("h2",{attrs:{id:"_1-界面的跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-界面的跳转"}},[a._v("#")]),a._v(" 1.界面的跳转")]),a._v(" "),e("h3",{attrs:{id:"_1-redirect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-redirect"}},[a._v("#")]),a._v(" 1.redirect()")]),a._v(" "),e("p",[a._v("​                                   实质的源码解析：  response()传过去一个url")]),a._v(" "),e("h3",{attrs:{id:"_2-直接调用action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-直接调用action"}},[a._v("#")]),a._v(" 2.直接调用action")]),a._v(" "),e("h3",{attrs:{id:"_3-forwardaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-forwardaction"}},[a._v("#")]),a._v(" 3.forwardAction()")]),a._v(" "),e("p",[a._v("​                             三种方法的传参是String类， 里面是action的路径")]),a._v(" "),e("h2",{attrs:{id:"_2-防止重复提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-防止重复提交"}},[a._v("#")]),a._v(" 2.防止重复提交")]),a._v(" "),e("p",[a._v("​                                      1.使用Token() ： 在提交表单的时候生成token, 提交不成功返回此页面Token会删除")]),a._v(" "),e("p",[a._v("​                                             createToken() ,validateToken() 获取之前创建的Token,合用")]),a._v(" "),e("h2",{attrs:{id:"_3-验证码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证码"}},[a._v("#")]),a._v(" 3.验证码；")]),a._v(" "),e("p",[a._v("​                               在Action 里  renderCaptcha(), jfinal生成验证码渲染到界面")]),a._v(" "),e("p",[a._v("​                               验证码验证：")]),a._v(" "),e("p",[a._v("​                      "),e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202501622.png",alt:"image-20220115202501622"}})]),a._v(" "),e("p",[a._v("​")]),a._v(" "),e("h2",{attrs:{id:"_4-keep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-keep"}},[a._v("#")]),a._v(" 4.keep")]),a._v(" "),e("p",[a._v("​      一般使用于查看，提交表单或搜索功能 等这这些有输入框的页面，当提交信息的时候，检查到信息错误或者是填写的搜索内容保持在界面上，这时我们可以在Action 或者Interceptor中写方法")]),a._v(" "),e("h3",{attrs:{id:"_1、keeppara"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、keeppara"}},[a._v("#")]),a._v(" 1、keepPara")]),a._v(" "),e("p",[a._v("​    当页面提交表单请求到 action，如果提交过来的数据存在错误或者缺失，这时应该让用户继续修改或填写表单数据，这时可以使用 keepPara 方法将用户之前填写过的内容保持住：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 保持住所有表单域")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("keepPara")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//指定保持住的表单域，如： nickName、email 等等")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("keepPara")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nickName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"email"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("如上，"),e("strong",[a._v("不带参的 keepPara() 方法将保持住所有表单域的内容")]),a._v("。以上两种用法保持住的参数返回页面时，无论是什么类型都将转换成 String 类型，所以，如果表单域的类型必须要保持住的话可以使用如下的方式：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 指定 keep 后的类型为 ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DatekeepPara")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"createAt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 指定 keep 后的类型为")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IntegerkeepPara")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"age"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("​     由于上面的 createAt、age 两个表单域 keep 时指定了类型，所以在页中就可以利用其类型参与表达式求值，例如：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 由于前面代码 keep 时指定 createAT 为 Date，所以 #date(...) 指令输出时不会抛异常")]),a._v("\n#"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("createAt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 由于前面代码 keep 时指定 age 类型为 Integer，所以才可以进行 age > 18 操作")]),a._v("\n#"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n#end\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("​    当然，如果类型为 Integer、Long、Float、Double、Byte、Short、String，还可以使用 enjoy 的 extension method 来解决类型问题，例如：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[a._v("#"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("toInt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("#end\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("如上所示，age 被 keepPara() 后为 String 型，那么 age.toInt() 会将其转化成 Integer 型。extension method 更多文档请见："),e("a",{attrs:{href:"https://www.jfinal.com/doc/6-9",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.jfinal.com/doc/6-9"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("keepPara 一般用在 Validator 或者拦截器之中，在本站首页右侧可以下载 jfinal demo for maven，里面有实际的例子。")]),a._v(" "),e("h3",{attrs:{id:"_2、keepmodel-与-keepbean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、keepmodel-与-keepbean"}},[a._v("#")]),a._v(" 2、keepModel 与 keepBean")]),a._v(" "),e("p",[a._v("​    keepModel 可以将以 modelName 前缀的表单域保持住内容与类型，例如：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("input name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blog.title"')]),a._v("   value"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#(blog.title ??)"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("input name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"blog.content"')]),a._v(" value"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#(blog.content ??)"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("​    如上所示，表单域是以前缀为 blog 的 model，提交到后端是通过 getModel 来接收数据，如果\b提交的数据不完整或者有错误可以使用 keepModel 保持住内容返回给页面，让用户继续填写。")]),a._v(" "),e("p",[a._v("keepBean 与 keepModel 的功能相似，只不过 keepBean 针对的是传统 java bean，而不是 Model。当然，如果 Model 使用生成器生成了 setter 方法，使用 keepBean 也可以。")]),a._v(" "),e("p",[a._v("注意：keepModel 与 keepBean 都可以 keep 住表单域原有的类型，无需指定类型。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202530708.png",alt:"image-20220115202530708"}})]),a._v(" "),e("p",[a._v("​")]),a._v(" "),e("p",[a._v("​          简化KeepPara() 一行代码就可以实现，再者就是在界面进行接收")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202540423.png",alt:"image-20220115202540423"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);