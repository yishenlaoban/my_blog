(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{554:function(s,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#%E6%A6%82%E8%BF%B0"}},[s._v("概述")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98%E9%85%8D%E7%BD%AE"}},[s._v("查询缓存配置")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%BC%80%E5%90%AF%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98"}},[s._v("开启查询缓存")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98select%E9%80%89%E9%A1%B9"}},[s._v("查询缓存SELECT选项")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98%E5%A4%B1%E6%95%88%E7%9A%84%E6%83%85%E5%86%B5"}},[s._v("查询缓存失效的情况")])])]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("开启Mysql的查询缓存，当执行完全相同的SQL语句的时候，服务器就会直接从缓存中读取结果，当数据被修改，之前的缓存会失效，修改比较频繁的表不适合做查询缓存。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hnistzdk/picture/raw/master/images/202203011855172.png",alt:"20180919131632347"}})]),s._v(" "),a("ol",[a("li",[s._v("客户端发送一条查询给服务器；")]),s._v(" "),a("li",[s._v("服务器先会检查查询缓存，如果命中了缓存，则立即返回存储在缓存中的结果。否则进入下一阶段；")]),s._v(" "),a("li",[s._v("服务器端进行SQL解析、预处理，再由优化器生成对应的执行计划；")]),s._v(" "),a("li",[s._v("MySQL根据优化器生成的执行计划，调用存储引擎的API来执行查询；")]),s._v(" "),a("li",[s._v("将结果返回给客户端。")])]),s._v(" "),a("h2",{attrs:{id:"查询缓存配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存配置"}},[s._v("#")]),s._v(" 查询缓存配置")]),s._v(" "),a("ul",[a("li",[s._v("查看当前的MySQL数据库是否支持查询缓存：")])]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'have_query_cache'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hnistzdk/picture/raw/master/images/202203011855066.png",alt:"1555249929012"}})]),s._v(" "),a("p",[a("font",{attrs:{color:"red"}},[s._v("在Mysql8，已经取消了查询缓存")])],1),s._v(" "),a("ul",[a("li",[s._v("查看当前MySQL是否开启了查询缓存 ：")])]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'query_cache_type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hnistzdk/picture/raw/master/images/202203011855861.png",alt:"1555250015377"}})]),s._v(" "),a("ul",[a("li",[s._v("查看查询缓存的占用大小 ：")])]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'query_cache_size'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hnistzdk/picture/raw/master/images/202203011855159.png",alt:"1555250142451"}})]),s._v(" "),a("ul",[a("li",[s._v("查看查询缓存的状态变量：")])]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Qcache%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hnistzdk/picture/raw/master/images/202203011855649.png",alt:"1555250443958"}})]),s._v(" "),a("p",[s._v("各个变量的含义如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("含义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Qcache_free_blocks")]),s._v(" "),a("td",[s._v("查询缓存中的可用内存块数")])]),s._v(" "),a("tr",[a("td",[s._v("Qcache_free_memory")]),s._v(" "),a("td",[s._v("查询缓存的可用内存量")])]),s._v(" "),a("tr",[a("td",[s._v("Qcache_hits")]),s._v(" "),a("td",[s._v("查询缓存命中数")])]),s._v(" "),a("tr",[a("td",[s._v("Qcache_inserts")]),s._v(" "),a("td",[s._v("添加到查询缓存的查询数")])]),s._v(" "),a("tr",[a("td",[s._v("Qcache_lowmen_prunes")]),s._v(" "),a("td",[s._v("由于内存不足而从查询缓存中删除的查询数")])]),s._v(" "),a("tr",[a("td",[s._v("Qcache_not_cached")]),s._v(" "),a("td",[s._v("非缓存查询的数量（由于 query_cache_type 设置而无法缓存或未缓存）")])]),s._v(" "),a("tr",[a("td",[s._v("Qcache_queries_in_cache")]),s._v(" "),a("td",[s._v("查询缓存中注册的查询数")])]),s._v(" "),a("tr",[a("td",[s._v("Qcache_total_blocks")]),s._v(" "),a("td",[s._v("查询缓存中的块总数")])])])]),s._v(" "),a("h2",{attrs:{id:"开启查询缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启查询缓存"}},[s._v("#")]),s._v(" 开启查询缓存")]),s._v(" "),a("p",[s._v("MySQL的查询缓存默认是关闭的，需要手动配置参数 query_cache_type ， 来开启查询缓存。")]),s._v(" "),a("p",[s._v("query_cache_type 该参数的可取值有三个 ：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("值")]),s._v(" "),a("th",[s._v("含义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("OFF 或 0")]),s._v(" "),a("td",[s._v("查询缓存功能关闭")])]),s._v(" "),a("tr",[a("td",[s._v("ON 或 1")]),s._v(" "),a("td",[s._v("查询缓存功能打开，SELECT的结果符合缓存条件即会缓存，否则，不予缓存，显式指定 SQL_NO_CACHE，不予缓存")])]),s._v(" "),a("tr",[a("td",[s._v("DEMAND 或 2")]),s._v(" "),a("td",[s._v("查询缓存功能按需进行，显式指定 SQL_CACHE 的SELECT语句才会缓存；其它均不予缓存")])])])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/usr/my.cnf")]),s._v(" 配置中（宝塔在 "),a("code",[s._v("/etc/my.cnf")]),s._v(" ），增加以下配置 ：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启mysql的查询缓存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("query_cache_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("配置完毕之后，重启服务既可生效 , "),a("code",[s._v("service mysqld restart")]),s._v("；")]),s._v(" "),a("p",[s._v("然后就可以在命令行执行SQL语句进行验证 ，执行一条比较耗时的SQL语句，然后再多执行几次，查看后面几次的执行时间；获取通过查看查询缓存的缓存命中数，来判定是否走查询缓存。")]),s._v(" "),a("h2",{attrs:{id:"查询缓存select选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存select选项"}},[s._v("#")]),s._v(" 查询缓存SELECT选项")]),s._v(" "),a("p",[s._v("可以在 SELECT 语句中指定两个与查询缓存相关的选项 ：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("SQL_CACHE")]),s._v(" "),a("p",[s._v("如果查询结果是可缓存的，并且 query_cache_type 系统变量的值为 ON 或 DEMAND ，则缓存查询结果 。")])]),s._v(" "),a("li",[a("p",[s._v("SQL_NO_CACHE")]),s._v(" "),a("p",[s._v("服务器不使用查询缓存。它既不检查查询缓存，也不检查结果是否已缓存，也不缓存查询结果。")])])]),s._v(" "),a("p",[s._v("例子：")]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SQL_CACHE id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" SQL_NO_CACHE id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("​")]),s._v(" "),a("h2",{attrs:{id:"查询缓存失效的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存失效的情况"}},[s._v("#")]),s._v(" 查询缓存失效的情况")]),s._v(" "),a("p",[s._v("1） SQL 语句不一致的情况， 要想命中查询缓存，查询的SQL语句必须一致。")]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- SQL1 : ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- SQL2 : ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("2） 当查询语句中有一些不确定的时，则不会缓存。如 ： now() , current_date() , curdate() , curtime() , rand() , uuid() , user() , database() 。")]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" updatetime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("3） 不使用任何表查询语句。")]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4）  查询 mysql， information_schema或  performance_schema 系统数据库中的表时，不会走查询缓存。")]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("engines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5） 在存储的函数，触发器或事件的主体内执行的查询。")]),s._v(" "),a("p",[s._v("6） 如果表更改，则使用该表的所有高速缓存查询都将变为无效并从高速缓存中删除。这包括使用"),a("code",[s._v("MERGE")]),s._v("映射到已更改表的表的查询。一个表可以被许多类型的语句，如被改变 INSERT， UPDATE， DELETE， TRUNCATE TABLE， ALTER TABLE， DROP TABLE，或 DROP DATABASE 。")])])}),[],!1,null,null,null);t.default=r.exports}}]);