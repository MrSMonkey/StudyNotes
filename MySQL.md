## 数据库客户端基础
```
// 创建数据库db_test,并设定字符集为utf8
CREATE SCHEMA 'db_test' DEFAULT CHARACTER SET utf8

// 通过命令行登录MySQL -u后面的root是用户名，中间不需要空格；回车后输入密码
mysql -uroot -p

// 展示MySQL中的数据库列表
show databases;

// 切换到某个数据库,
use db_test;

//
```