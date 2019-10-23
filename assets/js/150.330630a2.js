(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{276:function(t,v,_){"use strict";_.r(v);var a=_(2),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-操作系统逻辑结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作系统逻辑结构"}},[t._v("#")]),t._v(" 1. 操作系统逻辑结构")]),t._v(" "),_("p",[t._v("逻辑结构的种类：")]),t._v(" "),_("ul",[_("li",[t._v("整体式结构")]),t._v(" "),_("li",[t._v("层次式结构")]),t._v(" "),_("li",[t._v("微内核结构")])]),t._v(" "),_("h3",{attrs:{id:"整体式结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整体式结构"}},[t._v("#")]),t._v(" 整体式结构")]),t._v(" "),_("p",[t._v("以"),_("strong",[t._v("模块")]),t._v("为基本单位构建。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7cx7f8a2dj30fc0ec43d.jpg",alt:"image-20190926145036216"}})]),t._v(" "),_("p",[_("strong",[t._v("特点")]),t._v("：模块设计、编码和调试独立，调用自由，模块以"),_("strong",[t._v("全局变量")]),t._v("形式完成。")]),t._v(" "),_("p",[_("strong",[t._v("缺点")]),t._v("：信息传递随意，维护和更新困难。")]),t._v(" "),_("h3",{attrs:{id:"分层结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分层结构"}},[t._v("#")]),t._v(" 分层结构")]),t._v(" "),_("p",[t._v("所有功能模块按照"),_("strong",[t._v("调用次序")]),t._v("拍成若干层，相邻层之间只能"),_("strong",[t._v("单向")]),t._v("依赖或"),_("strong",[t._v("单向")]),t._v("调用。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7cxqpzu6nj30mc0csq71.jpg",alt:"image-20190926150907112"}})]),t._v(" "),_("p",[_("strong",[t._v("特点")]),t._v("：方便系统维护、扩充、移植；结构清晰，避免"),_("strong",[t._v("循环调用")]),t._v("；整体问题局部化，系统正确性可以保证。")]),t._v(" "),_("h3",{attrs:{id:"微内核结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微内核结构"}},[t._v("#")]),t._v(" 微内核结构")]),t._v(" "),_("p",[t._v("操作系统 = 微内核 + 核外服务器")]),t._v(" "),_("p",[t._v("微内核：足够小，提供os最基本核心功能和服务。比如与硬件相关处理。")]),t._v(" "),_("p",[t._v("核外服务器：完成os的绝大部分服务功能。比如进程/线程服务器。")]),t._v(" "),_("h2",{attrs:{id:"_2-cpu态（mode）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-cpu态（mode）"}},[t._v("#")]),t._v(" 2. CPU态（Mode）")]),t._v(" "),_("p",[t._v("操作系统需要依赖的"),_("strong",[t._v("最基本硬件")]),t._v("：CPU、内存、中断、时钟。")]),t._v(" "),_("h3",{attrs:{id:"cpu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[t._v("#")]),t._v(" CPU")]),t._v(" "),_("p",[t._v("CPU Mode指的是cpu的工作状态，影响着资源和指令的使用。比如下面特权指令，只有mode处于很高权限才可以。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7cyaa8lrfj30h80amtbc.jpg",alt:"image-20190926152757300"}})]),t._v(" "),_("h3",{attrs:{id:"cpu态的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu态的分类"}},[t._v("#")]),t._v(" CPU态的分类")]),t._v(" "),_("p",[t._v("1、核态（kernel mode）：能访问所有资源和指令")]),t._v(" "),_("p",[t._v("2、用户态（User mode）：仅能访问部分资源")]),t._v(" "),_("p",[t._v("3、管态（Supervisor mode）：介于两者之间。")]),t._v(" "),_("p",[t._v("用户态和核态可以相互转换：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7cycuuhgij30bg0a20vl.jpg",alt:"image-20190926153025845"}})]),t._v(" "),_("h3",{attrs:{id:"存储器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储器"}},[t._v("#")]),t._v(" 存储器")]),t._v(" "),_("p",[t._v("分类方法：")]),t._v(" "),_("ul",[_("li",[t._v("按存储器读写工作方式：\n"),_("ul",[_("li",[t._v("RAM")]),t._v(" "),_("li",[t._v("ROM")])])]),t._v(" "),_("li",[t._v("按存储元材料：\n"),_("ul",[_("li",[t._v("半导体存储器（常做主存）")]),t._v(" "),_("li",[t._v("磁存储器（磁盘）")]),t._v(" "),_("li",[t._v("光存储器（光盘）")])])]),t._v(" "),_("li",[t._v("按与CPU联系\n"),_("ul",[_("li",[t._v("主存：直接与CPU交换信息（内存）")]),t._v(" "),_("li",[t._v("辅存：不能直接和CPU交换信息（外存）")])])])]),t._v(" "),_("h3",{attrs:{id:"实际存储体系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实际存储体系"}},[t._v("#")]),t._v(" 实际存储体系")]),t._v(" "),_("p",[t._v("实际的存储体系，是由多种存储器混搭而成：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7czy0tu2wj30xo0ag0x2.jpg",alt:"image-20190926162521977"}})]),t._v(" "),_("p",[t._v("它的工作原理是：")]),t._v(" "),_("ol",[_("li",[t._v("cpu访问告诉缓存，如果指令数据在，那么就是"),_("strong",[t._v("命中")]),t._v("；没有命中，访问主存")]),t._v(" "),_("li",[t._v("如果主存没有命中，那么就是"),_("strong",[t._v("缺页")]),t._v("。会从辅存上将内容调入主存。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7czyu62hzj30gy0aqjuk.jpg",alt:"image-20190926162609113"}})]),t._v(" "),_("h2",{attrs:{id:"_3-中断机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-中断机制"}},[t._v("#")]),t._v(" 3. 中断机制")]),t._v(" "),_("p",[t._v("定义：CPU对突发的外部事件的反应过程或者机制。本质上，中断是交换指令执行地址，与交换CPU的态。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7d02wf1axj309g06gmym.jpg",alt:"image-20190926163003192"}})]),t._v(" "),_("p",[t._v("上图是中断机制的工作流程，"),_("strong",[t._v("中断服务程序")]),t._v("是事先准备好的专门用来处理中断的程序。")]),t._v(" "),_("h3",{attrs:{id:"相关概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关概念"}},[t._v("#")]),t._v(" 相关概念")]),t._v(" "),_("p",[t._v("断点：程序中断的地方，将要执行的下一指令的地址（放入CS:IP）")]),t._v(" "),_("p",[t._v("现场：程序正确运行所运行的信息集合，比如寄存器中的数据。")]),t._v(" "),_("p",[t._v("每次中断进行的前后，都要借助"),_("strong",[t._v("栈")]),t._v("，来完成现场的保护和恢复。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g7d0d4vhgej30f409ujtw.jpg",alt:"image-20190926163953712"}})])])}),[],!1,null,null,null);v.default=s.exports}}]);