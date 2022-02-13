(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{561:function(t,a,e){"use strict";e.r(a);var r=e(3),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_5-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-handler"}},[t._v("#")]),t._v(" 5. handler")]),t._v(" "),e("h2",{attrs:{id:"_1-定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[t._v("#")]),t._v(" 1. 定义 ：")]),t._v(" "),e("p",[t._v("​              处理器，他在Jfinal中的定义是http处理器，所有的http请求都会优先进入 handler进行处理，然后再分发给其他的模块。（也就是说所有的请求都是要经过handler）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202558939.png",alt:"image-20220115202558939"}})]),t._v(" "),e("p",[t._v("​             注意他在JFinal的体系里，具有最高的优先权")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202614519.png",alt:"image-20220115202614519"}})]),t._v(" "),e("h2",{attrs:{id:"_4-实际操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-实际操作"}},[t._v("#")]),t._v(" 4.实际操作")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202624731.png",alt:"image-20220115202624731"}})]),t._v(" "),e("p",[t._v("最后一个handler的next指向的ActionHandler")]),t._v(" "),e("p",[t._v("只有在ActionHendler执行的过程中才会有Controller 中的渲染")]),t._v(" "),e("h2",{attrs:{id:"_5-案例-伪静态化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-案例-伪静态化"}},[t._v("#")]),t._v(" 5.案例--伪静态化")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202654490.png",alt:"image-20220115202654490"}})]),t._v(" "),e("p",[t._v('在路径中handler不处理 含有  "  .  "的静态文件，所以，改变传过来的target值,')]),t._v(" "),e("p",[t._v("localhost:/index.html ---\x3e localhost:/index")]),t._v(" "),e("h2",{attrs:{id:"_4-handler来做路由的重新分配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-handler来做路由的重新分配"}},[t._v("#")]),t._v(" 4.handler来做路由的重新分配")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202710995.png",alt:"image-20220115202710995"}})]),t._v(" "),e("p",[t._v("在handler中强行设置target ,改传过来的target")]),t._v(" "),e("h1",{attrs:{id:"_6-拦截器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-拦截器"}},[t._v("#")]),t._v(" 6.拦截器")]),t._v(" "),e("h2",{attrs:{id:"_1-定义-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义-2"}},[t._v("#")]),t._v(" 1.定义：")]),t._v(" "),e("p",[t._v("在某个方法执行之前可以定义一个“拦截器”对这个方法进行拦截，通过拦截器的拦截之后，可以允许或拒绝某个方法执行")]),t._v(" "),e("p",[t._v("通常在众多的MVC框架中，拦截器是相对控制器controller而言的，意义在于可以对某个http请求进行拦截")]),t._v(" "),e("p",[t._v("在JFinal的体现中，拦截器不紧急可以对controller控制器拦截，也可以对servicece层或dao层等任意拦截")]),t._v(" "),e("h2",{attrs:{id:"_2-实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-实例"}},[t._v("#")]),t._v(" 2.实例")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202722343.png",alt:"image-20220115202722343"}})]),t._v(" "),e("p",[t._v("创建一个拦截器， 需要将拦截器配置到MainConfig类里面，inv.inoke()方法用来执行下一步，否则一直被拦截，controller无法执行")]),t._v(" "),e("p",[t._v("最后一个intercept的下一个invoke是执行controller，")]),t._v(" "),e("p",[t._v("如果在中间某个intrecept后而跳过后面的拦截器直接去controller里的方法：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202731499.png",alt:"image-20220115202731499"}})]),t._v(" "),e("p",[t._v("注意：这种也有错误，就是一直访问/user，然后/user在请求的时候又执行拦截器，这样就会陷入死循环")]),t._v(" "),e("p",[t._v("改善方法如下：这样所访问的方法是“/user”他就会inv.invoke()进入下一步，就跳出了当前拦截器的死循环")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202741201.png",alt:"image-20220115202741201"}})]),t._v(" "),e("h2",{attrs:{id:"_3-clear-和-before"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-clear-和-before"}},[t._v("#")]),t._v(" 3.@clear 和 before")]),t._v(" "),e("p",[t._v("@clear(xxxx.class)  和@Before(xxxx.class)")]),t._v(" "),e("p",[t._v("xxxx代表拦截器，clean注解可清空或者说是之前的“拦截器”对该方法无效")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202750513.png",alt:"image-20220115202750513"}})]),t._v(" "),e("p",[t._v("此注解也可以放在次controller上面，这样这个类里的所用action都对“拦截器”无视")]),t._v(" "),e("p",[t._v("这是就可以用@Before(xxx.class),这是指某个action执行前要被这个“拦截器”拦截")]),t._v(" "),e("p",[t._v("如下")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202802219.png",alt:"image-20220115202802219"}})]),t._v(" "),e("p",[t._v("如果某个action要添加多个Intercept，可以用数组的形式添加")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202851015.png",alt:"image-20220115202851015"}})]),t._v(" "),e("h2",{attrs:{id:"_4-jfinal自带的拦截器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-jfinal自带的拦截器"}},[t._v("#")]),t._v(" 4.JFinal自带的拦截器")]),t._v(" "),e("p",[t._v("这里只是主要的拦截器")]),t._v(" "),e("p",[t._v("​         缓存Cache   :CacheIntercept.class")]),t._v(" "),e("p",[t._v("​         清除缓存的拦截器：EvictIntercept.class")]),t._v(" "),e("p",[t._v('两者使用时要加如   @CacheName（"xxxx"）; xxxx为缓存的名字，目的是要将缓存的信息传入什么位置')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202906022.png",alt:"image-20220115202906022"}})]),t._v(" "),e("p",[t._v("SessionInViewInterceptor.class  拦截器：在执行此action前先执行Session的内容")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202916394.png",alt:"image-20220115202916394"}})]),t._v(" "),e("p",[t._v("GET   、 POST  :请求方式的拦截器")]),t._v(" "),e("p",[t._v("NotAction：给Controller通用方法设置拦截器；因为这个方法用来给其他Action调用的，所以此方法不需要被调用，所以给它设置NotAction")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/yishenlaoban/git-typore/raw/master/image_my/image-20220115202925771.png",alt:"image-20220115202925771"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);