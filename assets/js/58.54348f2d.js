(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{542:function(t,n,e){"use strict";e.r(n);var a=e(15),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"高阶函数的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数的定义"}},[t._v("#")]),t._v(" 高阶函数的定义")]),t._v(" "),e("p",[t._v("在《javascript设计模式和开发实践》中是这样定义的。")]),t._v(" "),e("ul",[e("li",[t._v("函数可以作为参数被传递；")]),t._v(" "),e("li",[t._v("函数可以作为返回值输出。")])]),t._v(" "),e("p",[t._v("结合这两个特点，首先想到的肯定是回调函数，回调函数也是高阶函数的一种，除了回调函数，还有很多的高阶函数，这篇文章主要是惰性函数、柯里化函数、compose函数这三种。")]),t._v(" "),e("h2",{attrs:{id:"一、惰性函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、惰性函数"}},[t._v("#")]),t._v(" 一、惰性函数")]),t._v(" "),e("h4",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),e("p",[t._v("懒，执行过一遍的东西，如果第二遍执行还是一样的效果，则我们就不想让其重复执行第二遍了")]),t._v(" "),e("h4",{attrs:{id:"栗子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#栗子"}},[t._v("#")]),t._v(" 栗子")]),t._v(" "),e("p",[t._v("我们要封装一个获取元素属性的方法，因为低版本的ie浏览器不支持getComputedStyle方法，做了一个容错处理")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" function getCss(element, attr) {\n\tif ('getComputedStyle' in window) {\n\t\treturn window.getComputedStyle(element)[attr];\n\t}\n\treturn element.currentStyle[attr];\n} \n")])])]),e("p",[t._v("但是每次进这个方法都要做一下判断，为了提高性能，我们可以存一个变量，然后每次进去判断变量就好了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var flag = 'getComputedStyle' in window\nfunction getCss(element, attr) {\n\tif (flag) {\n\t\treturn window.getComputedStyle(element)[attr];\n\t}\n\treturn element.currentStyle[attr];\n} \n")])])]),e("p",[t._v("这样每一次还是需要判断，有没有更好的方法呢？惰性函数的思想就可以完美解决这个问题")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("function getCss(element, attr) {\n\tif ('getComputedStyle' in window) {\n\t\tgetCss = function (element, attr) {\n\t\t\treturn window.getComputedStyle(element)[attr];\n\t\t};\n\t} else {\n\t\tgetCss = function (element, attr) {\n\t\t\treturn element.currentStyle[attr];\n\t\t};\n\t}\n\t// 为了第一次也能拿到值\n\treturn getCss(element, attr);\n}\n\ngetCss(document.body, 'margin');\ngetCss(document.body, 'padding');\ngetCss(document.body, 'width'); \n")])])]),e("p",[t._v("第一次执行，如果有getComputedStyle这个方法，getCss就被赋值成")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("function (element, attr) {\n\treturn window.getComputedStyle(element)[attr];\n};\n")])])]),e("p",[t._v("而后的每一次就会执行上面这个函数，否则则相反")]),t._v(" "),e("h4",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("惰性载入函数有两个主要优点，")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1、是显而易见的效率问题，虽然在第一次执行的时候函数会意味赋值而执行的慢一些，但是后续的调用会因为避免的重复检测更快；")])]),t._v(" "),e("li",[e("p",[t._v("2、是要执行的适当代码只有当实际调用函数是才执行，很多JavaScript库在在加载的时候就根据浏览器不同而执行很多分支，把所有东西实现设置好，而惰性载入函数将计算延迟，不影响初始脚本的执行时间。")])])]),t._v(" "),e("h2",{attrs:{id:"二、函数柯理化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、函数柯理化"}},[t._v("#")]),t._v(" 二、函数柯理化")]),t._v(" "),e("h4",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),e("p",[t._v("利用闭包保存机制，把一些信息预先存储下来（预处理的思想）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("function fn() {\n    \n}\nlet res = fn(1, 2)(3);\nconsole.log(res); //=>6  1+2+3\n")])])]),e("p",[t._v("封装一个方法，调用以后求出和（两次执行的传参个数都不固定）")]),t._v(" "),e("p",[t._v("解题思路：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("函数第二次执行，第一个函数的返回值一定是一个函数,第二个函数的返回值应该是求和的数值\n\nfunction fn(...outerArgs) {\n\treturn function anonymous(...innerArgs) {\n\t\t// args:外层和里层函数传递的所有值都合并在一起\n\t\tlet args = outerArgs.concat(innerArgs);\n\t\treturn args.reduce((n, item) => n + item);\n\t};\n}\n")])])]),e("p",[t._v("第二个函数使用了第一个函数的值，所以函数1不会被释放，利用闭包的保护机制，将值预先保存起来")]),t._v(" "),e("h2",{attrs:{id:"三、compose函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、compose函数"}},[t._v("#")]),t._v(" 三、compose函数")]),t._v(" "),e("h4",{attrs:{id:"定义-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义-2"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),e("p",[t._v("组合函数，把多层函数嵌套调用扁平化")]),t._v(" "),e("h4",{attrs:{id:"栗子-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#栗子-2"}},[t._v("#")]),t._v(" 栗子")]),t._v(" "),e("p",[t._v("下面四个方法，每种方法都会把参数0进行处理，给x传一个值如果要得出四种方法以后的和：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("const fn1 = (x, y) => x + y + 10;\nconst fn2 = x => x - 10;\nconst fn3 = x => x * 10;\nconst fn4 = x => x / 10;\n\nlet res = fn4(fn2(fn3(fn1(20))));\nlet res1 = compose(fn1, fn3, fn2, fn4)(20, 30);\n")])])]),e("p",[t._v("res得出的值，可以实现这个需求，但是需要函数套函数，现在可以定义一个compose函数，使得res和res1的值相等，将函数实现扁平化")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("function compose(...funcs) {\n\t// FUNCS:存储按照顺序执行的函数(数组) =>[fn1, fn3, fn2, fn4]\n\treturn function anonymous(...args) {\n\t\t// ARGS:存储第一个函数执行需要传递的实参信息(数组)  =>[20]\n\t\tif (funcs.length === 0) return args;\n\t\tif (funcs.length === 1) return funcs[0](...args);\n\t\treturn funcs.reduce((N, func) => {\n\t\t\t// 第一次N的值:第一个函数执行的实参  func是第一个函数\n\t\t\t// 第二次N的值:上一次func执行的返回值，作为实参传递给下一个函数执行\n\t\t\treturn Array.isArray(N) ? func(...N) : func(N);\n\t\t}, args);\n\t};\n}\n")])])]),e("p",[t._v("完美实现compose函数，不用再函数套函数")]),t._v(" "),e("p",[t._v("react中的redux源码中的compose函数用的是另外思想实现的")]),t._v(" "),e("h2",{attrs:{id:"四、单例设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、单例设计模式"}},[t._v("#")]),t._v(" 四、单例设计模式")]),t._v(" "),e("h4",{attrs:{id:"定义-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义-3"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var obj1 = {\n    name: 'wanghuahua'\n}\nvar obj2 = {\n    name: 'jerry'\n}\nconsole.log(obj1.name)\nconsole.log(obj2.name)\n")])])]),e("p",[t._v("上面的两个obj就是最基础的单例")]),t._v(" "),e("p",[t._v("单例模式就是：用单独的实例来管理当前事物的相关特征[属性和方法]（类似于实现一个分组的特点）")]),t._v(" "),e("p",[t._v("而此时obj1/obj2不仅仅叫做一个对象，也被成为命名空间")]),t._v(" "),e("h4",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),e("ul",[e("li",[t._v("类只有一个实例")]),t._v(" "),e("li",[t._v("全局可访问该实例")]),t._v(" "),e("li",[t._v("自行实例化（主动实例化）")]),t._v(" "),e("li",[t._v("可推迟初始化，即延迟执行（与静态类/对象的区别）")])]),t._v(" "),e("p",[t._v("虽然全局变量可以实现单例，但因其自身的问题，不建议在实际项目中将其作为单例模式的应用，特别是中大型项目的应用中，全局变量的维护该是考虑的成本。")]),t._v(" "),e("h4",{attrs:{id:"高级单例设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级单例设计模式"}},[t._v("#")]),t._v(" 高级单例设计模式")]),t._v(" "),e("p",[t._v("基于闭包管控的单例模式称为：高级单例设计模式，以此来实现模块划分（最早的模块化思想）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("let wanghuahua = (function () {\n\tfunction query() {}\n\n\tfunction tools() {}\n\n\treturn {\n\t\tname: 'AREA',\n\t\ttools\n\t};\n})();\nwanghuahua.tools(); \n\nlet jerry = (function () {\n\tfunction fn() {\n\t\tmeimei.getXxx();\n\t}\n\n\tfunction query() {}\n\treturn {\n\t\tquery\n\t}\n})();\n\nlet meimei = (function () {\n\tfunction fn() {}\n\n\tfunction getXxx() {}\n\tjerry.query();\n\n\treturn {\n\t\tgetXxx\n\t}\n})(); \n// 每个模块都可以有自己私有的方法，想要暴露给全局的就return出去\n\n// es6的export已经不需要这么写了\n\n公众号：\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/23/1737ab83afff852f?w=258&h=258&f=jpeg&s=27365",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);