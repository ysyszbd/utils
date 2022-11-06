- 初始化npm项目

      npm init -y    or    npm init
npm init -y会直接默认配置，npm init会按顺序挨个手动输入。

完成后会生成package.json文件

这次的公共函数打算使用typeScript编写，所以以此安装typeScript相关的依赖

      npm i typescript

      npm i ts-node

ts-node可以将ts转换为js，无需预编译即可直接在node.js上使用。

接下来我们写个小demo运行在试试：

----

对于工具函数，我们先提前定下来使用es6的export语法，方便用户引入。

由于浏览器和node.js都是只能直接运行javascript，而不能直接运行typescript，所以我们在最后打包时需要将ts编译为js。


