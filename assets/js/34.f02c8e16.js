(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{570:function(s,e,a){"use strict";a.r(e);var n=a(3),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"十一、持久化-aof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十一、持久化-aof"}},[s._v("#")]),s._v(" 十一、持久化—AOF")]),s._v(" "),a("p",[a("strong",[s._v("Append Only File")])]),s._v(" "),a("p",[s._v("将我们所有的命令都记录下来，history，恢复的时候就把这个文件全部再执行一遍")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212193444975.png",alt:"image-20220212193444975"}})]),s._v(" "),a("blockquote",[a("p",[s._v("以日志的形式来记录每个写的操作，将Redis执行过的所有指令记录下来（读操作不记录），只许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，redis重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作。")])]),s._v(" "),a("p",[s._v("什么是AOF\n快照功能（RDB）并不是非常耐久（durable）： 如果 Redis 因为某些原因而造成故障停机， 那么服务器将丢失最近写入、以及未保存到快照中的那些数据。 从 1.1 版本开始， Redis 增加了一种完全耐久的持久化方式： AOF 持久化。")]),s._v(" "),a("p",[s._v("如果要使用AOF，需要修改配置文件：\n"),a("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212193543548.png",alt:"image-20220212193543548"}})]),s._v(" "),a("p",[a("code",[s._v("appendonly no yes")]),s._v(" 则表示启用AOF")]),s._v(" "),a("p",[s._v("默认是不开启的，我们需要手动配置，然后重启redis，就可以生效了！")]),s._v(" "),a("p",[s._v("如果这个aof文件有错位，这时候redis是启动不起来的，我需要修改这个aof文件")]),s._v(" "),a("p",[s._v("redis给我们提供了一个工具 ==redis-check-aof --fix==")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认是不开启aof模式的，默认是使用rdb方式持久化的，在大部分的情况下，rdb完全够用")]),s._v("\nappendfilename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# appendfsync always # 每次修改都会sync 消耗性能")]),s._v("\nappendfsync everysec "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每秒执行一次 sync 可能会丢失这一秒的数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# appendfsync no # 不执行 sync ,这时候操作系统自己同步数据，速度最快")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("优点和缺点")])]),s._v(" "),a("p",[a("strong",[s._v("优点")])]),s._v(" "),a("ol",[a("li",[s._v("每一次修改都会同步，文件的完整性会更加好")]),s._v(" "),a("li",[s._v("没秒同步一次，可能会丢失一秒的数据")]),s._v(" "),a("li",[s._v("从不同步，效率最高")])]),s._v(" "),a("p",[a("strong",[s._v("缺点")])]),s._v(" "),a("ol",[a("li",[s._v("相对于数据文件来说，aof远远大于rdb，修复速度比rdb慢！")]),s._v(" "),a("li",[s._v("Aof运行效率也要比rdb慢，所以我们redis默认的配置就是rdb持久化")])])])}),[],!1,null,null,null);e.default=t.exports}}]);