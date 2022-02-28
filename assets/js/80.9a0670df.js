(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{617:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"vmware快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vmware快捷键"}},[s._v("#")]),s._v(" VMware快捷键")]),s._v(" "),t("ul",[t("li",[s._v("ctrl+alt鼠标移出虚拟机系统")]),s._v(" "),t("li",[s._v("su 用户名 ：切换对应用户")]),s._v(" "),t("li",[s._v("打开终端terminal：ctrl + alt + t 新窗口中打开")]),s._v(" "),t("li",[s._v("打开终端terminal：ctrl + shift +t 新标签页中打开")])]),s._v(" "),t("h3",{attrs:{id:"解决克隆虚拟机后-网络不可用的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决克隆虚拟机后-网络不可用的问题"}},[s._v("#")]),s._v(" 解决克隆虚拟机后，网络不可用的问题")]),s._v(" "),t("ol",[t("li",[s._v("使用ip addr查看 2：ens33下，克隆后自动生成的link/ether 后的 mac地址")]),s._v(" "),t("li",[s._v("然后编辑此文件vim /etc/sysconfig/network-scripts/ifcfg-ens33")]),s._v(" "),t("li",[s._v("将HWADDR的值改为生成后的mac地址")]),s._v(" "),t("li",[s._v("然后 service network restart   重启网络服务")]),s._v(" "),t("li",[s._v("00:0c:29:37:ee:5f")])]),s._v(" "),t("h3",{attrs:{id:"安装jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk"}},[s._v("#")]),s._v(" 安装jdk")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建目录、压解")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/java\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zvxf server-jre-8u271-linux-x64.tar.tar.gz -C /usr/java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置环境变量")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改环境配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑配置文件，在里面添加如下三行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/java/jdk1.8.0_271\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使环境变量生效")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证是否配置成功，查看java版本")]),s._v("\njava -version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"安装mysql-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-mariadb"}},[s._v("#")]),s._v(" 安装MySQL(Mariadb)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mariadb\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mariadb mariadb-server\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\nsystemctl start mariadb\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mariadb\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进行配置")]),s._v("\nmysql_secure_installation\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#首先是设置密码，会提示先输入密码")]),s._v("\n\nEnter current password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("enter "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("–初次运行直接回车\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置密码")]),s._v("\n\nSet root password? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("– y\nNew password: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("– 设置root用户的密码\nRe-enter new password: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("– 再输入一次你设置的密码\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#其他配置")]),s._v("\n\nRemove anonymous users? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("– y\n\nDisallow root login remotely? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("– n\n\nRemove "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database and access to it? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("– y\n\nReload privilege tables now? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("– y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置MariaDB的字符集")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n\n在"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("标签下添加\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("init_connect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET collation_connection = utf8_unicode_ci'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("init_connect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET NAMES utf8'")]),s._v("  \ncharacter-set-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8  \ncollation-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8_unicode_ci  \nskip-character-set-client-handshake\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf.d/client.cnf\n在"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("中添加\ndefault-character-set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf.d/mysql-clients.cnf\n在"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("中添加\ndefault-character-set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全部配置完成，重启")]),s._v("\nsystemctl restart mariadb\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入MariaDB查看字符集")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show variables like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%character%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("show variables like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%collation%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看用户信息")]),s._v("\nMariaDB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" User, "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" from mysql.user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新权限")]),s._v("\nFLUSH PRIVILEGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置远程访问")]),s._v("\nGRANT ALL PRIVILEGES ON *.* TO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" WITH GRANT OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br")])]),t("h3",{attrs:{id:"安装mysql-废弃"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-废弃"}},[s._v("#")]),s._v(" 安装MySQL(废弃)")]),s._v(" "),t("h4",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载mysql仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装mysql仓库")]),s._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rh-mysql80-mysql-server.x86_64\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可以安装的版本")]),s._v("\nyum list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" server\nmysql-community-server.x86_64        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v(".21-1.el7             mysql80-community\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 MySQL ")]),s._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h4",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动MySQL")]),s._v("\nsystemctl restart mysqld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status mysqld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"修改mysql密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改mysql密码"}},[s._v("#")]),s._v(" 修改MySQL密码")]),s._v(" "),t("p",[s._v("查看mysql默认密码，默认在/var/log/mysqld.log")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" password /var/log/mysqld.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("复制上面的密码，先登进去")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -u root -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("再修改密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ALTER "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("注意：mysql8.0.21版本的密码默认要8位，并且是数字、大小写字母、特殊符号组成。")])]),s._v(" "),t("h4",{attrs:{id:"修改成功后-设置远程访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改成功后-设置远程访问"}},[s._v("#")]),s._v(" 修改成功后，设置远程访问")]),s._v(" "),t("p",[s._v("登入到mysql")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \nupdate user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" where user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"开放防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开放防火墙"}},[s._v("#")]),s._v(" 开放防火墙")]),s._v(" "),t("p",[s._v("查看防火墙状态:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl status firewalld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("开启：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start firewalld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("设置自启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("有需要则可以禁止防火墙开机自动启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl disable firewalld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("开放mysql的3306端口，并重启防火墙")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("/tcp --permanent\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("用Navicat远程连接mysql，可能遇到的问题2059 - Authentication plugin ‘caching_sha2_password’ cannot be loaded: dlopen(…/Frameworks/caching_sha2_password.so, 2): image not found")]),s._v(" "),t("p",[s._v("在mysql上修改一下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -u root -p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nALTER "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"查看端口占用寄关闭、查看进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看端口占用寄关闭、查看进程"}},[s._v("#")]),s._v(" 查看端口占用寄关闭、查看进程")]),s._v(" "),t("ul",[t("li",[s._v("netstat -a：查看已经拦截的服务端口")]),s._v(" "),t("li",[s._v("netstat -ap：查看所有的服务端口")]),s._v(" "),t("li",[s._v("netstat -ap|grep 端口号：查看指定端口的进程占用，或使用lsof -i:端口号")]),s._v(" "),t("li",[s._v("kill -9 pid号：关闭进程")])]),s._v(" "),t("h3",{attrs:{id:"ubuntu添加用户及设置管理员权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu添加用户及设置管理员权限"}},[s._v("#")]),s._v(" Ubuntu添加用户及设置管理员权限")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用sudo su切换到root用户(使用su 用户名切换到普通用户，或者Ctrl+D，或者exit)")])]),s._v(" "),t("li",[t("p",[s._v("新增用户：adduser 用户名")])]),s._v(" "),t("li",[t("p",[s._v("home目录下会自动创建名为用户名的文件夹，也可以自己创建：useradd -d /home/用户名 -m 用户名")]),s._v(" "),t("ul",[t("li",[s._v("-d：指定用户目录")]),s._v(" "),t("li",[s._v("-m：创建用户目录(如果该目录不存在)")])])]),s._v(" "),t("li",[t("p",[s._v("删除用户：deluser -r 用户名")])])]),s._v(" "),t("h3",{attrs:{id:"linux关机指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux关机指令"}},[s._v("#")]),s._v(" Linux关机指令")]),s._v(" "),t("ul",[t("li",[s._v("sync：将数据由内存同步到硬盘中")]),s._v(" "),t("li",[s._v("shutdown：关机指令")]),s._v(" "),t("li",[s._v("shutdown -h 10：10分钟后关机")]),s._v(" "),t("li",[s._v("shutdown now：立刻关机")]),s._v(" "),t("li",[s._v("shutdown -h 20:25：在指定时间关机")]),s._v(" "),t("li",[s._v("shutdown -h +10：十分钟后关机")]),s._v(" "),t("li",[s._v("shutdown -r now：立刻重启")]),s._v(" "),t("li",[s._v("shutdown -r +10：十分钟后重启")]),s._v(" "),t("li",[s._v("reboot：立刻重启等同于shutdown -r now")]),s._v(" "),t("li",[s._v("halt：关闭系统，等同于shutdown -h now和poweroff")])]),s._v(" "),t("h3",{attrs:{id:"linux目录解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux目录解释"}},[s._v("#")]),s._v(" Linux目录解释")]),s._v(" "),t("ul",[t("li",[s._v("/bin : bin是Binary的缩写,这个目录存放着最经常使用的命令。")]),s._v(" "),t("li",[s._v("/boot :这里存放的是启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。")]),s._v(" "),t("li",[s._v("/dev : dev是Device(设备)的缩写,存放的是Linux的外部设备，在Linux中访问设备的方式和访问文件的方式是相同的。")]),s._v(" "),t("li",[s._v("/etc :这个目录用来存放所有的系统管理所需要的配置文件和子目录。\n/home :用户的主目录，在Linux中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。")]),s._v(" "),t("li",[s._v("/lib:这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。")]),s._v(" "),t("li",[s._v("/lost+found:这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。")]),s._v(" "),t("li",[s._v("/media : linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。")]),s._v(" "),t("li",[s._v("/mnt:系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上然后进入该目录就可以查者光驱里的内容了。")]),s._v(" "),t("li",[s._v("/opt :这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")]),s._v(" "),t("li",[s._v("/proc:这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。")]),s._v(" "),t("li",[s._v("/root:该目录为系统管理员，也称作超级权限者的用户主目录。")]),s._v(" "),t("li",[s._v("/sbin : s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序。")]),s._v(" "),t("li",[s._v("/srv:该目录存放一些服务启动之后需要提取的数据。")]),s._v(" "),t("li",[s._v("/sys:这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统sysfs。")]),s._v(" "),t("li",[s._v("/tmp:这个目录是用来存放一些临时文件的。")]),s._v(" "),t("li",[s._v("/usr:这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于windows下的program files目录。")]),s._v(" "),t("li",[s._v("/usr/bin :系统用户使用的应用程序。")]),s._v(" "),t("li",[s._v("/www:存放服务器网站相关的资源，环境，网站的项目")])])])}),[],!1,null,null,null);a.default=e.exports}}]);