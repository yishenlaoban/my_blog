(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{574:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"十三、redis主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十三、redis主从复制"}},[s._v("#")]),s._v(" 十三、Redis主从复制")]),s._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("p",[s._v("​          主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点（Master/Leader）,后者称为从节点（Slave/Follower）， ==数据的复制是单向的！只能由主节点复制到从节点==（主节点以写为主、从节点以读为主）。")]),s._v(" "),t("p",[s._v("​          默认情况下，每台Redis服务器都是主节点，一个主节点可以有0个或者多个从节点，但每个从节点只能由一个主节点。")]),s._v(" "),t("h3",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("ul",[t("li",[s._v("==数据冗余==：主从复制实现了数据的热备份，是持久化之外的一种数据冗余的方式。")]),s._v(" "),t("li",[s._v("==故障恢复==：当主节点故障时，从节点可以暂时替代主节点提供服务，是一种服务冗余的方式")]),s._v(" "),t("li",[s._v("==负载均衡==：在主从复制的基础上，配合读写分离，由主节点进行写操作，从节点进行读操作，分担服务器的负载；尤其是在多读少写的场景下，通过多个从节点分担负载，提高并发量。")]),s._v(" "),t("li",[s._v("==高可用基石==：主从复制还是哨兵和集群能够实施的基础。")])]),s._v(" "),t("h3",{attrs:{id:"为什么使用集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用集群"}},[s._v("#")]),s._v(" 为什么使用集群")]),s._v(" "),t("ol",[t("li",[s._v("单台服务器难以负载大量的请求")]),s._v(" "),t("li",[s._v("单台服务器故障率高，系统崩坏概率大")]),s._v(" "),t("li",[s._v("单台服务器内存容量有限。")])]),s._v(" "),t("h3",{attrs:{id:"环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[s._v("#")]),s._v(" 环境配置")]),s._v(" "),t("p",[s._v("我们在讲解配置文件的时候，注意到有一个"),t("code",[s._v("replication")]),s._v("模块 (见Redis.conf中第8条)")]),s._v(" "),t("p",[s._v("查看当前库的信息："),t("code",[s._v("info replication")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" info replication\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 角色")]),s._v("\nconnected_slaves:0  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从机数量")]),s._v("\nmaster_replid:3b54deef5b7b7b7f7dd8acefa23be48879b4fcff\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:0\nsecond_repl_offset:-1\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:0\nrepl_backlog_histlen:0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"模拟多个redis-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模拟多个redis-server"}},[s._v("#")]),s._v(" 模拟多个redis-server")]),s._v(" "),t("p",[s._v("既然需要启动多个服务，就需要多个配置文件。每个配置文件对应修改以下信息：")]),s._v(" "),t("ul",[t("li",[s._v("端口号")]),s._v(" "),t("li",[s._v("pid文件名")]),s._v(" "),t("li",[s._v("日志文件名")]),s._v(" "),t("li",[s._v("rdb文件名")])]),s._v(" "),t("p",[s._v("然后==用不同的配置文件启动redis-server== 即可")]),s._v(" "),t("p",[s._v("启动单机多服务集群：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212210050607.png",alt:"image-20220212210050607"}})]),s._v(" "),t("h3",{attrs:{id:"一主二从配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一主二从配置"}},[s._v("#")]),s._v(" 一主二从配置")]),s._v(" "),t("p",[s._v("==默认情况下，每台Redis服务器都是主节点；==我们一般情况下只用配置从机就好了！")]),s._v(" "),t("p",[s._v("==认老大！==一主（79）二从（80，81）")]),s._v(" "),t("p",[s._v("在从机中使用"),t("code",[s._v("SLAVEOF host port")]),s._v("就可以为从机配置主机了。")]),s._v(" "),t("p",[s._v("注：在命令行修改配置，和配置主从复制，只在当前启动的进程中有效，如果想要永久生效必须改配置，重启服务")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212210736657.png",alt:"image-20220212210736657"}})]),s._v(" "),t("p",[t("strong",[s._v("从机状态")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212211105526.png",alt:"image-20220212211105526"}})]),s._v(" "),t("p",[t("strong",[s._v("然后主机上也能看到从机的状态：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220212211141272.png",alt:"image-20220212211141272"}})]),s._v(" "),t("h3",{attrs:{id:"使用规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用规则"}},[s._v("#")]),s._v(" 使用规则")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("从机只能读，不能写，主机可读可写但是多用于写。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:638"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name sakura "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从机6381写入失败")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" READONLY You can"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t write against a read only replica.\n\n127.0.0.1:6380> set name sakura # 从机6380写入失败\n(error) READONLY You can'")]),s._v("t "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" against a "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" only replica.\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name sakura\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get name\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sakura"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("当==主机断电宕机==后，默认情况下从机的==角色不会发生变化== ，集群中只是失去了写操作，当主机恢复以后，又会连接上从机恢复原状。")])]),s._v(" "),t("li",[t("p",[s._v("当==从机断电宕机==后，若不是使用配置文件配置的从机，再次启动后作为主机是无法获取之前主机的数据的，若此时重新配置称为从机，又可以获取到主机的所有数据。这里就要提到一个同步原理。")])]),s._v(" "),t("li",[t("p",[s._v("第二条中提到，默认情况下，主机故障后，不会出现新的主机，有两种方式可以产生新的主机：")])])]),s._v(" "),t("p",[s._v("​           1.  从机手动执行命令"),t("code",[s._v("slaveof no one")]),s._v(",这样执行以后从机会独立出来成为一个主机")]),s._v(" "),t("p",[s._v("​            2.  使用哨兵模式（自动选举）")]),s._v(" "),t("blockquote",[t("p",[s._v("如果没有老大了，这个时候能不能选择出来一个老大呢？手动！")])]),s._v(" "),t("p",[s._v("如果主机断开了连接，我们可以使用"),t("code",[s._v("SLAVEOF no one")]),s._v("让自己变成主机！其他的节点就可以手动连接到最新的主节点（手动）！如果这个时候老大修复了，他也不会是老大了，那么就重新连接！")])])}),[],!1,null,null,null);a.default=r.exports}}]);