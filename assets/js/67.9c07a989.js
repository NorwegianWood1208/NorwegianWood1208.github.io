(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{551:function(e,n,t){"use strict";t.r(n);var a=t(15),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("之前聊了异步编程的回调函数和promise，上一篇文章也说了，用promise解决异步编程，如果多个调用，就会看起来不那么舒服。")]),e._v(" "),t("p",[e._v("es6除了提供了promise还为我们提供了更加强大的async和await，async、await是Generator函数的语法糖，如果想要完全掌握async、await的用法，必须要掌握Generator函数的使用。")]),e._v(" "),t("h2",{attrs:{id:"一、generator-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、generator-函数"}},[e._v("#")]),e._v(" 一、Generator 函数")]),e._v(" "),t("h3",{attrs:{id:"_1、什么是-generator-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是-generator-函数"}},[e._v("#")]),e._v(" 1、什么是 Generator 函数？")]),e._v(" "),t("p",[e._v("来自阮一峰老师文档上的解释：Generator函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。")]),e._v(" "),t("p",[e._v("你可以这么理解，这个函数自己执行不了，得让别人帮忙执行，踢一脚（next()），走一步。")]),e._v(" "),t("h4",{attrs:{id:"基本的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本的用法"}},[e._v("#")]),e._v(" 基本的用法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function* doSomething() {\n    yield '吃饭'\n    return '睡觉'\n}\n\nlet newDoSomething = doSomething() // 自己执行不了，需要指向一个状态机\n\nconsole.log(newDoSomething.next()) // {value: \"吃饭\", done: false}\nconsole.log(newDoSomething.next()) // {value: \"睡觉\", done: true}\n")])])]),t("h5",{attrs:{id:"从上面的例子可以看出来-generator-函数有四个特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从上面的例子可以看出来-generator-函数有四个特点"}},[e._v("#")]),e._v(" 从上面的例子可以看出来，Generator 函数有四个特点：")]),e._v(" "),t("p",[e._v("1、function后面有个小*，这个地方有两种写法，没啥太大区别；")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function* doSomething(){}\nfunction *doSomething(){}\n")])])]),t("p",[e._v("2、函数里面会有一个yield，把函数截成不同的状态；")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("一个yield可以截成两个状态，也就需要两个next()触发；\n")])])]),t("p",[e._v("3、Generator函数自己不会执行，而是会返回一个遍历器对象；")]),e._v(" "),t("p",[e._v("4、遍历器对象会通过.next()方法依次调用各个状态。")]),e._v(" "),t("h4",{attrs:{id:"消息传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息传递"}},[e._v("#")]),e._v(" 消息传递")]),e._v(" "),t("p",[e._v("Generator函数除了能控制函数分状态的执行，还有一个非常重要的作用就是消息传递，还是上例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function *doSomething() {\n    let x = yield 'hhh'\n    console.log(x)\n    return (x * 2)\n}\n\nlet newDoSomething = doSomething()\n\nconsole.log(newDoSomething.next(1))  \nconsole.log(newDoSomething.next(2))  \n\n\n打印结果：\n\n{value: \"hhh\", done: false}\n2\n{value: 4, done: true}\n")])])]),t("p",[e._v("具体分析一下为什么会打印这个：   （"),t("em",[e._v("重点")]),e._v("）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('//{value: "hhh", done: false}\n第一个next()是Generator函数的启动器\n这个时候打印的是yield后面的值\n重点的一句，yield后面的值并不会赋值给x\n\n//2\n暂停执行的时候，yield表达式处可以接收下一个启动它的next(...)传进来的值\n你可以理解为：\n这个时候第二个next传入的参数会把第一个yield的值替换掉\n\n //{value: 4, done: true}\n这个时候，x被赋值2，所以打印2*2\n')])])]),t("h5",{attrs:{id:"注意几个问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意几个问题"}},[e._v("#")]),e._v(" 注意几个问题：")]),e._v(" "),t("h6",{attrs:{id:"第一个next-是用来启动generator函数的-传值会被忽略-没用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一个next-是用来启动generator函数的-传值会被忽略-没用"}},[e._v("#")]),e._v(" 第一个next()是用来启动Generator函数的，传值会被忽略，没用")]),e._v(" "),t("h6",{attrs:{id:"yield的用法和return比较像-你可以当做return来用-如果yield后没值-return-undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yield的用法和return比较像-你可以当做return来用-如果yield后没值-return-undefined"}},[e._v("#")]),e._v(" yield的用法和return比较像，你可以当做return来用，如果yield后没值，return undefined")]),e._v(" "),t("h6",{attrs:{id:"最后一个next-函数-得到的是函数return的值-如果没有-也是undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后一个next-函数-得到的是函数return的值-如果没有-也是undefined"}},[e._v("#")]),e._v(" 最后一个next()函数，得到的是函数return的值，如果没有，也是undefined")]),e._v(" "),t("h5",{attrs:{id:"彻底理解了上面的概念-再来看下下面的栗子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#彻底理解了上面的概念-再来看下下面的栗子"}},[e._v("#")]),e._v(" 彻底理解了上面的概念，再来看下下面的栗子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function *doSomething() {\n    let x = yield 'hhh'\n    let y = yield (x + 3)\n    let z = yield (y * 3)\n    return (x * 2)\n}\n\nlet newDoSomething = doSomething()\n\nconsole.log(newDoSomething.next(1))  // {value: \"hhh\", done: false}\nconsole.log(newDoSomething.next(2))  // {value: 5, done: false}\nconsole.log(newDoSomething.next(100)) // {value: 300, done: false}\nconsole.log(newDoSomething.next(1000)) // {value: 4, done: true}\n")])])]),t("p",[e._v("还是用上面的思路分析一下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("第一个next(1)，传进去的值没用，打印的是yield后的值\n第二个next(2)，这个时候的x已经被赋值为2,所以打印2+3\n第三个next(100)，这个时候的y已经被赋值为100,所以打印100*3\n第四个next(1000)，这个时候y已经被赋值为1000,,但是打印的是x*2，所以打印的4 \n")])])]),t("h5",{attrs:{id:"再来看个特殊的情况-特殊的才是容易掉坑的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#再来看个特殊的情况-特殊的才是容易掉坑的"}},[e._v("#")]),e._v(" 再来看个特殊的情况：（特殊的才是容易掉坑的）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function *doSomething() {\n    let x = yield 'hhh'\n    console.log(x)\n    let y = yield (x + 3)\n    console.log(y)\n    let z = yield (y * 3)\n    return (x * 2)\n}\n\nlet newDoSomething = doSomething()\n\nconsole.log(newDoSomething.next(1))\nconsole.log(newDoSomething.next(2))\nconsole.log(newDoSomething.next())\nconsole.log(newDoSomething.next())\n")])])]),t("p",[e._v("看下打印结果：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{value: "hhh", done: false}\n2\n{value: 5, done: false}\nundefined\n{value: NaN, done: false}\n{value: 4, done: true}\n')])])]),t("p",[e._v("分析下为什么打印undefined？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1、第一个next(1)传进去的1，没有起任何意义，打印的{value: "hhh", done: false}；\n2、第二个next(2)传进去的2，所以x会打印2，第二个next(2)打印2+3；\n3、第三个next()传进去的是空，那么y打印的就是未定义，undefined*3那肯定就是NaN；\n4、第四个next()传进去的是空，但是return的是x，刚才说了x是2，那打印的是2*2\n')])])]),t("h2",{attrs:{id:"二、async、await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、async、await"}},[e._v("#")]),e._v(" 二、async、await")]),e._v(" "),t("h4",{attrs:{id:"_1、什么是async、await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是async、await"}},[e._v("#")]),e._v(" 1、什么是async、await？")]),e._v(" "),t("p",[e._v("async、await是Generator函数的语法糖，原理是通过Generator函数加自动执行器来实现的，这就使得async、await跟普通函数一样了，不用再一直next执行了。")]),e._v(" "),t("p",[e._v("他吸收了Generator函数的优点，可以通过await来把函数分状态执行，但是又不用一直next，可以自动执行。")]),e._v(" "),t("p",[e._v("还是上例子：")]),e._v(" "),t("h5",{attrs:{id:"栗子1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子1"}},[e._v("#")]),e._v(" 栗子1")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function f() {\n    return new Promise(resolve =>{\n        resolve('hhh')\n    })\n}\nasync function doSomething1(){\n    let x = await f()\n}\n\ndoSomething1()\n\n打印结果：\n\nhhh\n")])])]),t("p",[e._v("看了上面的例子，可以看出async有三个特点：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1、函数前面会加一个async修饰符，来证明这个函数是一个异步函数；\n\n2、await 是个运算符，用于组成表达式，它会阻塞后面的代码\n\n3、await 如果等到的是 Promise 对象，则得到其 resolve值。\n")])])]),t("h5",{attrs:{id:"栗子2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栗子2"}},[e._v("#")]),e._v(" 栗子2")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("async function doSomething1(){\n    let x = await 'hhh'\n    return x\n}\n\nconsole.log(doSomething1())\n\ndoSomething1().then(res => {\n    console.log(res)\n})\n\n打印结果：\n\nPromise {<pending>}\nhhh\n")])])]),t("p",[e._v("分析一下上面的栗子可以得到这两个特点：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1、async返回的是一个promise对象，函数内部 return 返回的值，会成为 then 方法回调函数的参数；\n\n2、await如果等到的不是promise对象，就得到一个表达式的运算结果。\n")])])]),t("h3",{attrs:{id:"async、await项目中的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async、await项目中的使用"}},[e._v("#")]),e._v(" async、await项目中的使用")]),e._v(" "),t("p",[e._v("现在有一个封装好的，获取数据的方法，我们分别用promise、Generator、async来实现发请求，做一下比较：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function getList() {\n    return new Promise((resolve, reject) =>{\n        $axios('/pt/getList').then(res => {\n            resolve(res)\n        }, err => {\n            reject(err)\n        })\n    })\n}\n")])])]),t("h4",{attrs:{id:"promise"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[e._v("#")]),e._v(" promise")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function initTable() {\n    getList().then(res => {\n        console.log(res)\n    }).catch(err => {\n        this.$message(err) // element的语法\n    })\n}\n\n然后直接调用就可以\n这么做看起来非常的简洁，但是如果多个请求调用\n就会是.then,.then看起来非常不舒服\n")])])]),t("h4",{attrs:{id:"generator函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generator函数"}},[e._v("#")]),e._v(" Generator函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("function *initTable(args) {\n    const getList = yield getlist(args)\n    return getList\n}\n\nfunction getList() {\n    const g = initTable(this.searchParams)\n    const gg = g.next().value\n    gg.then(res =>{\n        this.total = res.data.count\n        if (res.data.list) {\n          this.tableList = res.data.list\n          this.tableList.forEach(e => {\n            e.receiveAmt = format(e.receiveAmt)\n          })\n        } else {\n          this.tableList = []\n        }\n    })\n}\n\n这个看起来就比较伤，写起来非常麻烦\n")])])]),t("h4",{attrs:{id:"async-await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[e._v("#")]),e._v(" async await")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("async initTable() { // table列表查\n  const getData = await getList(this.searchParams)\n  return getData\n},\n\ngetList() {\n  this.initTable().then(res =>{\n    this.tableList = res.data.list\n  })\n}\n\n这样写好像也很简单，而且非常方便\n\n主要是如果调用多个接口，可以直接多个await\n")])])]),t("h4",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("因为一个好朋友的一道面试题，突然有了写一下关于同步、异步编程的一篇文章，写起来才发现涉及的知识点太杂，就一共写了三篇文章：\n\n1、关于什么同步、异步，其中涉及了一些堆栈和消息队列、事件轮询的知识；\nhttps://mp.weixin.qq.com/s/LAwfxg0TKzY9-guixcCsJw\n\n2、关于异步编程的几个解决方案，主要是回调函数和promise；\nhttps://mp.weixin.qq.com/s/z7b5jzRd17XDiZNb92GrNQ\n\n3、关于异步编程的终极解决方案Generator函数以及他的语法糖async、await。\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);