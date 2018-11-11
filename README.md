# Spider
爬虫，主要供人文社科领域在日常数据的获取与分析上应用，先占个坑，以示写出成品的决心，暂定名蜘蛛Spider
## 项目依赖
Node-Router,本人写的一个Node.js后端路由框架，链接：https://github.com/FeilyZhang/Node-Router
## 用法
先开启服务器，cd至服务器文件根目录，然后启动server.js文件,例如
```
[fei@localhost ~]$ cd '/home/fei/Documents/Spider/Node-Router' 
[fei@localhost Node-Router]$ node server.js
```
再打开index.html文件即可
## index.html中各字段解释如下
host=feily.tech&path=/&protocol=https&charset=utf8
host为主机名，需要注意的是不加协议名(https://或http://)和文件路径符号(\);
path为文件路径名，以路径符号\开头，如果访问网站根目录，该字段可不填充值，但不能没有该字段，建议填\号;
protocol为协议名，填http或者https，二选一;
charset为HTML文档默认编码，一般为utf8，部分中文网页为gbk或者gb2312，需要注意的是由于Node.js尚不原生支持gbk和gb2312等编码，因此爬取到的数据均为乱码显示，后期会解决这个问题。
以上四个字段缺一不可
