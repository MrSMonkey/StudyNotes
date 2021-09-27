## 常用命令
```
// 启动nodeJs服务
pm2 start app.js
pm2 start pm2.json

// 重新启动nodeJs服务
pm2 restart app.js
pm2 restart pm2.json

// 停止服务
pm2 stop all

// 查看启动情况
pm2 list

// 打开监控界面
pm2 monit

// pm2 link
pm2 link seuafdvei9vm04l metk4crxsfq7ihz
```
## 其他命令
```
ps aux | grep node
lsof -i tcp:3000

```
## 日志管理
一般都是使用log4