(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{655:function(t,s,v){"use strict";v.r(s);var _=v(3),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"如何实现一个ioc容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个ioc容器"}},[t._v("#")]),t._v(" 如何实现一个IOC容器")]),t._v(" "),v("p",[t._v("1、配置文件的包扫描路径")]),t._v(" "),v("p",[t._v("2、递归包扫描获取.class文件")]),t._v(" "),v("p",[t._v("3、通过反射确定交给IOC管理的类")]),t._v(" "),v("p",[t._v("4、对需要注入的类进行依赖注入")]),t._v(" "),v("ul",[v("li",[t._v("配置文件指定需要扫描的包路径；")]),t._v(" "),v("li",[t._v("定义一些注解，分别表示访问控制层，业务服务层，数据持久层，依赖注入注解，获取配置文件注解；")]),t._v(" "),v("li",[t._v("从配置文件中获取需要扫描的包路径，获取到当前路径下文件夹信息，我们将当前路径下所有以.class结尾的文件添加到一个Set集合中进行存储；")]),t._v(" "),v("li",[t._v("遍历这个set集合，获取在类上有指定注解的类，并将其交给IOC容器，定义一个安全的Map用来存储这些对象；")]),t._v(" "),v("li",[t._v("遍历IOC容器，获取到每一个类的实例，判断里面是有依赖其他的类的实例，然后进行递归注入。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);