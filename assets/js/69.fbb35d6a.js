(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{606:function(n,t,a){"use strict";a.r(t);var s=a(3),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"注解-annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解-annotation"}},[n._v("#")]),n._v(" 注解(Annotation)")]),n._v(" "),a("blockquote",[a("p",[n._v("从JDK 5.0开始,Java增加了对元数据(MetaData)的支持,也就是Annotation(注解)\nAnnotation其实就是代码里的特殊标记,这些标记可以在编译,类加载,运行时被读取,并执行相应的处理。通过使用Annotation,程序员可以在不改变原有逻辑的情况下,在源文件中嵌入一些补充信息。代码分析工具、开发工具和部署工具可以通过这些补充信息进行验证或者进行部署。\nAnnotation可以像修饰符一样被使用,可用于修饰包,类,构造器,方法,成员变量,参数,局部变量的声明,这些信息被保存在Annotatio的“name=value”对中。")]),n._v(" "),a("ul",[a("li",[n._v("在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在JavaEEtAndroid中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替JavaEE旧版中所遗留的繁冗代码和XML配置等。")]),n._v(" "),a("li",[n._v("未来的开发模式都是基于注解的，JPA是基于注解的，Spring2.5以上都是基于注解的，Hibernate3.x以后也是基于注解的，现在的Struts2有一部分也是基于注解的了，注解是一种趋势，一定程度上可以说:框架=注解＋反射＋设计模式。")])])]),n._v(" "),a("h3",{attrs:{id:"常见的annotation示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的annotation示例"}},[n._v("#")]),n._v(" 常见的Annotation示例")]),n._v(" "),a("blockquote",[a("p",[n._v("●使用Annotation时要在其前面增加@符号,并把该Annotation当成\n一个修饰符使用。用于修饰它支持的程序元素")]),n._v(" "),a("p",[n._v("●示例一:生成文档相关的注解\nauthor：标明开发该类模块的作者，多个作者之间使用,分割version标明该类模块的版本\nsee：参考转向，也就是相关主题since从哪个版本开始增加的\nparam：对方法中某参数的说明，如果没有参数就不能写\nreturn：对方法返回值的说明，如果方法的返回值类型是void就不能写\nexception：对方法可能抛出的异常进行说明，如果方法没有用throws显式抛出的异常就不能写o其中\nparam @return和 exception这三个标记都是只用于方法的。param的格式要求:@param 形参名 形参类型 形参说明\nreturn的格式要求：@return 返回值类型 返回值说明")]),n._v(" "),a("p",[n._v("exception的格式要求:@exception 异常类型 异常说明")]),n._v(" "),a("p",[n._v("param和@exception可以并列多个")]),n._v(" "),a("ul",[a("li",[n._v("示例二：")])]),n._v(" "),a("p",[n._v("在编译时进行格式检查(JDK内置的三个基本注解)")]),n._v(" "),a("p",[n._v("@override:限定重写父类方法,该注解只能用于方法")]),n._v(" "),a("p",[n._v("@Deprecated:用于表示所修饰的元素(类,方法等)已过时。通常是因为所修饰的结构危险或存在更好的选择")]),n._v(" "),a("p",[n._v("@SuppressWarnings:抑制编译器警告")])]),n._v(" "),a("h3",{attrs:{id:"如何自定义注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何自定义注解"}},[n._v("#")]),n._v(" 如何自定义注解")]),n._v(" "),a("blockquote",[a("p",[n._v("定义新的Annotation类型使用interface关键字")]),n._v(" "),a("p",[n._v("自定义注解自动继承了java.lang.annotation.Annotation接口")]),n._v(" "),a("p",[n._v("Annotation 的成员变量在Annotation定义中以无参数方法的形式来声明。其方法名和返回值刘义了该成员的名字和类型。我们称为配置参数。类型只能是八种基本数据类型、String类型、Class类型、enum类型、Annotation类型、以上所有类型的数组。")]),n._v(" "),a("p",[n._v("可以在定义 Annotation的成员变量时为其指定初始值，指定成员变量的初始值可使用default关键字")]),n._v(" "),a("p",[n._v("如果只有一个参数成员，建议使用参数名为value")]),n._v(" "),a("p",[n._v("如果定义的注解含有配置参数，那么使用时必须指定参数值，除非它有默认值。格式是“参数名=参数值”，如果只有一个参数成员，且名称为value，可以省略“value=”")]),n._v(" "),a("p",[n._v("没有成员定义的Annotation称为标记;包含成员变量的Annotation称为元数据Annotation\n注意:自定义注解必须配上注解的信息处理流程才有意义。")])]),n._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@interface")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotation")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\tstring "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h3",{attrs:{id:"元注解-对现有的注解进行解释的注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元注解-对现有的注解进行解释的注解"}},[n._v("#")]),n._v(" 元注解：对现有的注解进行解释的注解")]),n._v(" "),a("blockquote",[a("p",[n._v("JDK 中的元注解")]),n._v(" "),a("p",[n._v("JDK的元Annotation用于修饰其他Annotation定义")]),n._v(" "),a("p",[n._v("JDK5.0提供了4个标准的meta-annotation类型，分别是:")]),n._v(" "),a("ul",[a("li",[n._v("Retention")])]),n._v(" "),a("p",[n._v("@Retention:只能用于修饰一个Annotation定义,用于指定该Annotation的生命周期,@Rentention包含一个RetentionPolicy类型的成员变量,使用\n@Rentention时必须为该value成员变量指定值:")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("RetentionPolicy.SOURCE:在源文件中有效（即源文件保留），编译器直接丢弃这种策略的注释")])]),n._v(" "),a("li",[a("p",[n._v("RetentionPolicy.CLASS:在class文件中有效(即class保留），当运行Java程序时,JVM不会保留注解。这是默认值")])]),n._v(" "),a("li",[a("p",[n._v("RetentionPolicy.RUNTIME:在运行时有效（即运行时保留），当运行Java程序时JVM会保留注释。程序可以通过反射获取该注释。")])]),n._v(" "),a("li",[a("p",[n._v("Target")])])]),n._v(" "),a("p",[n._v("用于修饰Annotation定如用于指定被修饰的Annotation 能用于修饰哪些程序元素。Target也包含一个名为value的成员变量。\nCONSTRUCTOR\n用于描述构造器\nPACKAGE\n用于描述包\nFIELD\n用于描述域\nPARAMETER\n用于描述参数\nLOCAL_VARIABLE")]),n._v(" "),a("p",[n._v("用于描述局部变量")]),n._v(" "),a("p",[n._v("TYPE\n用于描述类、接口(包括注解类型)或enum声明")]),n._v(" "),a("p",[n._v("METHOD\n用于描述方法")]),n._v(" "),a("ul",[a("li",[n._v("Documented")])]),n._v(" "),a("p",[n._v("@Documgnted:用于指定被该元Annotation修饰的Annotation类将被javadoc工具提取成文档(保留下来)。默认情况下，javadoc是不包括注解的。>定义为Documented的注解必须设置Retention值为RUNTIME。")]),n._v(" "),a("ul",[a("li",[n._v("Inherited")])]),n._v(" "),a("p",[n._v("@lnherited:被它修饰的Annotation将具有继承性。如果某个类使用了被@Inherited修饰的Annotation,则其子类将自动具有该注解。")]),n._v(" "),a("p",[n._v("比如:如果把标有@Inherited注解的自定义的注解标注在类级别上，子类则可以继承父类类级别的注解\n实际应用中，使用较少")])]),n._v(" "),a("h2",{attrs:{id:"jdk1-8中新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8中新特性"}},[n._v("#")]),n._v(" jdk1.8中新特性")]),n._v(" "),a("h3",{attrs:{id:"可重复注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可重复注解"}},[n._v("#")]),n._v(" 可重复注解")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("jdk8之前：")]),n._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@MyAnnotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationTest")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n * @author fengzhu\n */")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@interface")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("String")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n * @author fengzhu\n */")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@interface")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotations")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("jdk8")]),n._v(" "),a("p",[n._v("在MyAnnotation上声明@Repeatable，成员值为MyAnnotations.class，两个注解上的元注解信息要保持一致")]),n._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationTest")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n * @author fengzhu\n */")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Repeatable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@interface")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("String")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n * @author fengzhu\n */")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@interface")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotations")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br")])])])]),n._v(" "),a("h5",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])]),n._v(" "),a("h2",{attrs:{id:"类型注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型注解"}},[n._v("#")]),n._v(" 类型注解")]),n._v(" "),a("blockquote",[a("p",[n._v("JDK1.8之后，关于元注解@Target的参数类型ElementType枚举值多了两个:TYPE_PARAMETER,TYPE_USE。\n在Java 8之前，注解只能是在声明的地方所使用，Java8开始，注解可以应用在任何地方。")]),n._v(" "),a("ul",[a("li",[n._v("ElemlentType.TYPE_PARAMETER表示该注解能写在类型变量的声明语句中(如:泛型声明)。")]),n._v(" "),a("li",[n._v("ElementType.TYPE_USE表示该注解能写在使用类型的任何语句中。")])])]),n._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TestTypeDefine")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@TypeDefine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("U")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("private")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("U")]),n._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@TypeDefine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("T")]),n._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("TYPE_PARAMETER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@interface")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TypeDefine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);