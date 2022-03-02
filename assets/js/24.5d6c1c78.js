(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{562:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一、nosql概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、nosql概述"}},[s._v("#")]),s._v(" 一、Nosql概述")]),s._v(" "),n("h3",{attrs:{id:"为什么使用nosql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用nosql"}},[s._v("#")]),s._v(" 为什么使用Nosql")]),s._v(" "),n("blockquote",[n("p",[s._v("1、单机mysql时代")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207215601489.png",alt:"image-20220207215601489"}})]),s._v(" "),n("p",[s._v("90年代,一个网站的访问量一般不会太大，单个数据库完全够用。随着用户增多，网站出现以下问题")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("数据量增加到一定程度，单机数据库就放不下了")])]),s._v(" "),n("li",[n("p",[s._v("数据的索引（B+ Tree）,一个机器内存也存放不下")])]),s._v(" "),n("li",[n("p",[s._v("访问量变大后（读写混合），一台服务器承受不住。")])])]),s._v(" "),n("blockquote",[n("p",[s._v("2、MemCached (缓存)+ Mysql +垂直差分")])]),s._v(" "),n("p",[s._v("网站80%的情况都是在读，每次都要去查询数据库的话就十分的麻烦！所以说我们希望减轻数据库的压力，我们可以使用缓存来保证效率！")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207220837661.png",alt:"image-20220207220837661"}})]),s._v(" "),n("p",[s._v("优化过程经历了以下几个过程：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("    * 优化数据库的数据结构和索引(难度大)\n    * 文件缓存，通过IO流获取比每次都访问数据库效率略高，但是流量爆炸式增长时候，IO流也承受不了\n    * MemCache,当时最热门的技术，通过在数据库和数据库访问层之间加上一层缓存，第一次访问时查询数据库，将结果保存到缓存，后续的查询先检查缓存，若有直接拿去使用，效率显著提升。\n")])])]),n("blockquote",[n("p",[s._v("3、分库分表 + 水平拆分 + Mysql集群")])]),s._v(" "),n("p",[s._v("==本质：数据库的读写问题==")]),s._v(" "),n("p",[s._v("早些年的引擎MyISAM：表锁，十分影响效率！高并发下就会出现严重的锁问题")]),s._v(" "),n("p",[s._v("转战Innodb: 行锁")]),s._v(" "),n("p",[s._v("慢慢的就开始使用分表来解决写的压力！MySql在那个 年代推出了表分区，这个并没有多少公司使用")]),s._v(" "),n("p",[s._v("Mysql集群的出现，很好的满足了那个年代所有需求")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207224716594.png",alt:"image-20220207224716594"}})]),s._v(" "),n("blockquote",[n("p",[s._v("4、如今最近的年代")])]),s._v(" "),n("p",[s._v("2010 --2020 十年之间，互联网世界发生巨大变化（定位也是一种数据，音乐，热榜）")]),s._v(" "),n("p",[s._v("Mysql等关系型数据库就不够用了！数据很多，"),n("strong",[s._v("变化很快~")])]),s._v(" "),n("p",[s._v("Mysql有的使用它来存储一些比较大的文件，博客，图片！数据很大，效率就低了！如果有一种数据库来专门处理这种数据，")]),s._v(" "),n("p",[s._v("Mysql的压力就会变的十分小（研究如何处理这些问题！）大数据的IO压力下，表结构几乎没法更改！")]),s._v(" "),n("blockquote",[n("p",[s._v("为什么要用NoSQL ？")])]),s._v(" "),n("p",[s._v("用户的个人信息，社交网络，地理位置。用户自己产生的数据，用户日志等等爆发式增长！\n这时候我们就需要使用NoSQL数据库的，Nosql可以很好的处理以上的情况！")]),s._v(" "),n("h3",{attrs:{id:"什么是nosql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是nosql"}},[s._v("#")]),s._v(" 什么是Nosql")]),s._v(" "),n("p",[s._v("==NoSQL = Not Only SQL（不仅仅是SQL==")]),s._v(" "),n("p",[s._v("Not Only Structured Query Language")]),s._v(" "),n("p",[s._v("关系型数据库：列+行，同一个表下数据的结构是一样的。")]),s._v(" "),n("p",[s._v("非关系型数据库：==数据存储没有固定的格式，并且可以进行横向扩展。==")]),s._v(" "),n("p",[s._v("NoSQL泛指非关系型数据库，随着web2.0互联网的诞生，传统的关系型数据库很难对付web2.0时代！尤其是超大规模的高并发的社区，暴露出来很多难以克服的问题，NoSQL在当今大数据环境下发展的十分迅速，Redis是发展最快的。")]),s._v(" "),n("h3",{attrs:{id:"nosql特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nosql特点"}},[s._v("#")]),s._v(" Nosql特点")]),s._v(" "),n("p",[s._v("1.方便扩展（数据之间没有关系，很好扩展）")]),s._v(" "),n("p",[s._v("2.大数据量高性能（Redis一秒可以写8万次，读11万次，NoSQL的缓存记录级的，是一种细粒度的缓存，性能会比较高！）")]),s._v(" "),n("p",[s._v("3.数据类型是多样型的！ （不需要事先就设计好数据库，随取随用）")]),s._v(" "),n("p",[s._v("4.传统的RDBMS 和NoSQL")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v("传统的 RDBMS(关系型数据库)\n- 结构化组织\n- SQL\n- 数据和关系都存在单独的表中 row col\n- 操作，数据定义语言\n- 严格的一致性\n- 基础的事务\n- ...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v("Nosql\n- 不仅仅是数据\n- 没有固定的查询语言\n- 键值对存储，列存储，文档存储，图形数据库（社交关系）\n- 最终一致性\n- CAP定理和BASE\n- 高性能，高可用，高扩展\n- ...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("了解：3V + 3高")])]),s._v(" "),n("p",[s._v("大数据时代的3V ：主要是"),n("strong",[s._v("描述问题")]),s._v("的")]),s._v(" "),n("ol",[n("li",[s._v("海量Velume")]),s._v(" "),n("li",[s._v("多样Variety")]),s._v(" "),n("li",[s._v("实时Velocity")])]),s._v(" "),n("p",[s._v("大数据时代的3高 ： 主要是"),n("strong",[s._v("对程序的要求")])]),s._v(" "),n("ol",[n("li",[s._v("高并发")]),s._v(" "),n("li",[s._v("高可扩")]),s._v(" "),n("li",[s._v("高性能")])]),s._v(" "),n("p",[s._v("真正在公司中的实践：NoSQL + RDBMS 一起使用才是最强的。")]),s._v(" "),n("h3",{attrs:{id:"阿里巴巴演进分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阿里巴巴演进分析"}},[s._v("#")]),s._v(" 阿里巴巴演进分析")]),s._v(" "),n("p",[s._v("推荐阅读：阿里云的这群疯子https://yq.aliyun.com/articles/653511")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220209173738641.png",alt:"image-20220209173738641"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220209173827436.png",alt:"image-20220209173827436"}})]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v("# 商品信息\n- 一般存放在关系型数据库：Mysql,阿里巴巴使用的Mysql都是经过内部改动的。\n\n# 商品描述、评论(文字居多)\n- 文档型数据库：MongoDB\n\n# 图片\n- 分布式文件系统 FastDFS\n- 淘宝：TFS\n- Google: GFS\n- Hadoop: HDFS\n- 阿里云: oss\n\n# 商品关键字 用于搜索\n- 搜索引擎：solr,elasticsearch\n- 阿里：Isearch 多隆\n\n# 商品热门的波段信息\n- 内存数据库：Redis，Memcache\n\n# 商品交易，外部支付接口\n- 第三方应用\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220209174109354.png",alt:"image-20220209174109354"}})]),s._v(" "),n("h3",{attrs:{id:"nosql的四大分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nosql的四大分类"}},[s._v("#")]),s._v(" Nosql的四大分类")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("KV 键值对")])])]),s._v(" "),n("ul",[n("li",[s._v("新浪："),n("strong",[s._v("Redis")])]),s._v(" "),n("li",[s._v("美团：Redis + Tair")]),s._v(" "),n("li",[s._v("阿里、百度：Redis + Memcache")])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("文档型数据库（bson数据格式）：")])])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("MongoDB")]),s._v("(掌握)\n"),n("ul",[n("li",[s._v("基于分布式文件存储的数据库。C++编写，用于处理大量文档。")]),s._v(" "),n("li",[s._v("MongoDB是RDBMS和NoSQL的中间产品。MongoDB是非关系型数据库中功能最丰富的，NoSQL中最像关系型数据库的数据库。")])])]),s._v(" "),n("li",[s._v("ConthDB")])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("列存储数据库")])])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("HBase")]),s._v("(大数据必学)")]),s._v(" "),n("li",[s._v("分布式文件系统")])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("图关系数据库")])])]),s._v(" "),n("p",[s._v("用于广告推荐，社交网络（社交关系）")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("Neo4j")]),s._v("、InfoGrid")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220209180212522.png",alt:"image-20220209180212522"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);