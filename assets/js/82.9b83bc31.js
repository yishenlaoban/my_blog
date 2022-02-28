(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{619:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),n("p",[s._v("使用我们平台的用户越来越多了，并发量慢慢增大了，这时候一台服务器满足不了我们的需求了。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205195048889.png",alt:"image-20220205195048889"}})]),s._v(" "),n("p",[s._v("于是我们横向扩展，又增加了服务器。这个时候几个项目启动在不同的服务器上，用户要访问，就需要增加一个代理服务器了，通过代理服务器来帮我们转发和处理请求。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205195136932.png",alt:"image-20220205195136932"}})]),s._v(" "),n("p",[s._v("我们希望这个代理服务器可以帮助我们接收用户的请求，然后将用户的请求按照规则帮我们转发到不同的服务器节点之上。这个过程用户是无感知的，用户并不知道是哪个服务器返回的结果，我们还希望他可以按照服务器的性能提供不同的权重选择。保证最佳体验！所以我们使用了Nginx。")]),s._v(" "),n("h1",{attrs:{id:"什么是nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是nginx"}},[s._v("#")]),s._v(" 什么是Nginx？")]),s._v(" "),n("p",[s._v("Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。2011年6月1日，nginx 1.0.4发布。")]),s._v(" "),n("p",[s._v("其特点是占有内存少，并发能力强，事实上nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。在全球活跃的网站中有12.18%的使用比率，大约为2220万个网站。")]),s._v(" "),n("p",[s._v("Nginx 是一个安装非常的简单、配置文件非常简洁（还能够支持perl语法）、Bug非常少的服务。Nginx 启动特别容易，并且几乎可以做到7*24不间断运行，即使运行数个月也不需要重新启动。你还能够不间断服务的情况下进行软件版本的升级。")]),s._v(" "),n("p",[s._v("Nginx代码完全用C语言从头写成。官方数据测试表明能够支持高达 50,000 个并发连接数的响应。")]),s._v(" "),n("h1",{attrs:{id:"nginx作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx作用"}},[s._v("#")]),s._v(" Nginx作用？")]),s._v(" "),n("blockquote",[n("p",[s._v("Http代理，反向代理：作为web服务器最常用的功能之一，尤其是反向代理。")])]),s._v(" "),n("p",[s._v("正向代理 (代理客户端发送请求)")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205202903215.png",alt:"image-20220205202903215"}})]),s._v(" "),n("p",[s._v("反向代理（代理服务端处理请求）")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205203017759.png",alt:"image-20220205203017759"}})]),s._v(" "),n("blockquote",[n("p",[s._v("Nginx提供的负载均衡策略有2种：内置策略和扩展策略。内置策略为轮询，加权轮询，Ip hash。扩展策略，就天马行空，只有你想不到的没有他做不到的。")])]),s._v(" "),n("p",[s._v("轮询")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205203046026.png",alt:"image-20220205203046026"}})]),s._v(" "),n("p",[s._v("加权轮询")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205203209671.png",alt:"image-20220205203209671"}})]),s._v(" "),n("blockquote",[n("p",[s._v("iphash对客户端请求的ip进行hash操作，然后根据hash结果将同一个客户端ip的请求分发给同一台服务器进行处理，可以解决session不共享的问题。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205203421614.png",alt:"image-20220205203421614"}})]),s._v(" "),n("p",[s._v("ipHash 的弊端也很大，如果这台服务器挂了，存在这台服务器的所有用户信息都没了")]),s._v(" "),n("blockquote",[n("p",[s._v("动静分离，在我们的软件开发中，有些请求是需要后台处理的，有些请求是不需要经过后台处理的（如：css、html、jpg、js等等文件），这些不需要经过后台处理的文件称为静态文件。让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，我们就可以根据静态资源的特点将其做缓存操作。提高资源响应的速度。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220205204831922.png",alt:"image-20220205204831922"}})]),s._v(" "),n("p",[s._v("目前，通过使用Nginx大大提高了我们网站的响应速度，优化了用户体验，让网站的健壮性更上一层楼！")]),s._v(" "),n("h1",{attrs:{id:"nginx的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx的安装"}},[s._v("#")]),s._v(" Nginx的安装")]),s._v(" "),n("h2",{attrs:{id:"windows下安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows下安装"}},[s._v("#")]),s._v(" windows下安装")]),s._v(" "),n("p",[n("strong",[s._v("1、下载nginx")])]),s._v(" "),n("p",[s._v("http://nginx.org/en/download.html 下载稳定版本。\n以nginx/Windows-1.16.1为例，直接下载 nginx-1.16.1.zip。\n下载后解压，解压后如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207125102005.png",alt:"image-20220207125102005"}})]),s._v(" "),n("p",[s._v("2、启动nginx")]),s._v(" "),n("p",[s._v("有很多种方法启动nginx")]),s._v(" "),n("p",[s._v("(1)直接双击nginx.exe，双击后一个黑色的弹窗一闪而过")]),s._v(" "),n("p",[s._v("(2)打开cmd命令窗口，切换到nginx解压目录下，输入命令 nginx.exe ，回车即可")]),s._v(" "),n("p",[s._v("3、检查nginx是否启动成功")]),s._v(" "),n("p",[s._v("直接在浏览器地址栏输入网址 http://localhost:80 回车，出现以下页面说明启动成功！")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207125149120.png",alt:"image-20220207125149120"}})]),s._v(" "),n("p",[n("strong",[s._v("4、配置监听")])]),s._v(" "),n("p",[s._v("nginx的配置文件是conf目录下的nginx.conf，默认配置的nginx监听的端口为80，如果80端口被占用可以修改为未被占用的端口即可。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207125214805.png",alt:"image-20220207125214805"}})]),s._v(" "),n("p",[s._v("当我们修改了nginx的配置文件nginx.conf 时，不需要关闭nginx后重新启动nginx，只需要执行命令 "),n("code",[s._v("nginx -s reload")]),s._v(" 即可让改动生效")]),s._v(" "),n("h2",{attrs:{id:"linux下安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux下安装"}},[s._v("#")]),s._v(" linux下安装")]),s._v(" "),n("p",[n("strong",[s._v("1、安装gcc")])]),s._v(" "),n("p",[s._v("安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("2、PCRE pcre-devel 安装")])]),s._v(" "),n("p",[s._v("PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  pcre pcre-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("3、zlib 安装")])]),s._v(" "),n("p",[s._v("zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  zlib zlib-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("4、OpenSSL 安装")]),s._v("\nOpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。\nnginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y openssl openssl-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("5、下载安装包")])]),s._v(" "),n("p",[s._v("手动下载.tar.gz安装包，地址：https://nginx.org/en/download.html")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207125801366.png",alt:"image-20220207125801366"}})]),s._v(" "),n("p",[s._v("下载完毕上传到服务器上 /root")]),s._v(" "),n("p",[n("strong",[s._v("6、解压")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nginx-1.18.0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.18.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207125849289.png",alt:"image-20220207125849289"}})]),s._v(" "),n("p",[n("strong",[s._v("7、配置")])]),s._v(" "),n("p",[s._v("使用默认配置，在nginx根目录下执行")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./configure\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("查找安装路径： "),n("code",[s._v("whereis nginx")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207130034251.png",alt:"image-20220207130034251"}})]),s._v(" "),n("h2",{attrs:{id:"nginx常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用命令"}},[s._v("#")]),s._v(" Nginx常用命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin/\n./nginx  启动\n./nginx -s stop  停止\n./nginx -s quit  安全退出\n./nginx -s reload  重新加载配置文件\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx  查看nginx进程\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("启动成功访问 服务器ip:80")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220207130111802.png",alt:"image-20220207130111802"}})]),s._v(" "),n("p",[s._v("注意：如何连接不上，检查阿里云安全组是否开放端口，或者服务器防火墙是否开放端口！")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld start\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld stop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙规则")]),s._v("\nfirewall-cmd --list-all\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询端口是否开放")]),s._v("\nfirewall-cmd --query-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放80端口")]),s._v("\nfirewall-cmd --permanent --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除端口")]),s._v("\nfirewall-cmd --permanent --remove-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启防火墙(修改配置后要重启防火墙)")]),s._v("\nfirewall-cmd --reload\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参数解释")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、firwall-cmd：是Linux提供的操作firewall的一个工具；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、--permanent：表示设置为持久；\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、--add-port：标识添加的端口；\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h1",{attrs:{id:"演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[s._v("#")]),s._v(" 演示")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("upstream lb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" weight"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(" weight"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tproxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);