(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{542:function(e,t,n){"use strict";n.r(t);var s=n(15),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("有时候会有这么一个需求，本地写了一个demo需要同局域网的同事看一下，或者写了一个移动端的demo需要手机上进行调试，或者demo里要使用es6的语法，网页打开HTML文件就无法实现，需要在本地起一个node环境，具体的步骤如下：")]),e._v(" "),n("h3",{attrs:{id:"_1、npm-init"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、npm-init"}},[e._v("#")]),e._v(" 1、npm init")]),e._v(" "),n("p",[e._v("这个时候文件夹下会出现一个package.json文件")]),e._v(" "),n("h3",{attrs:{id:"_2、npm-install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、npm-install"}},[e._v("#")]),e._v(" 2、npm install")]),e._v(" "),n("h3",{attrs:{id:"_3、安装http-server和anywhere"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装http-server和anywhere"}},[e._v("#")]),e._v(" 3、安装http-server和anywhere")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("npm install http-server -g\n\nnpm install -g anywhere\n")])])]),n("p",[e._v("安装完输入anywhere -p 8085")]),e._v(" "),n("h3",{attrs:{id:"常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("anywhere : 无法加载文件 C:\\Users\\1\\AppData\\Roaming\\npm\\anywhere.ps1，因为在此系统上禁止运行脚本。\n有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。\n所在位置 行:1 字符: 1\n+ ~~~~~~~~\n    + FullyQualifiedErrorId : UnauthorizedAccess\n")])])]),n("p",[e._v("上网查了一下，说是执行策略有问题解决方案如下：")]),e._v(" "),n("p",[e._v("以管理员身份打开这个文件夹")]),e._v(" "),n("p",[e._v("执行：get-ExecutionPolicy 获取状态是Restricted，这证明是禁用的")]),e._v(" "),n("p",[e._v("执行：set-ExecutionPolicy RemoteSigned")]),e._v(" "),n("p",[e._v("如果没有管理员权限执行命令：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('set-ExecutionPolicy : \n对注册表项“HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\PowerShell\\1\\ShellIds\\Microsoft.PowerShell”的访问被拒绝。 要更改默认(LocalMachine)作用域的执行策略，请使用“以管理员身份运行”选项启动 Wi     \nndows PowerShell。要更改当前用户的执行策略，请运行 "Set-ExecutionPolicy -Scope CurrentUser"。\n所在位置 行:1 字符: 1\n+ set-ExecutionPolicy RemoteSigned\n+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n+ CategoryInfo          : PermissionDenied: (:) [Set-ExecutionPolicy], UnauthorizedAccessException\n+ FullyQualifiedErrorId : System.UnauthorizedAccessException,Microsoft.PowerShell.Commands.SetExecutionPolicyCommand\n')])])]),n("p",[e._v("可以执行：Set-ExecutionPolicy RemoteSigned -Scope CurrentUser")]),e._v(" "),n("p",[e._v("再执行：get-ExecutionPolicy 状态就变成了Restricted")]),e._v(" "),n("p",[e._v("这个时候再执行 anywhere -p 8085，就可以完美的成功了")])])}),[],!1,null,null,null);t.default=a.exports}}]);