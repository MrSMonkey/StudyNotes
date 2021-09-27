
## PM2
1. 常用命令
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

// 线上监控,需要申请账号pm2 link 
pm2 link seuafdvei9vm04l metk4crxsfq7ihz
```

3. 日志管理
一般都是使用log4

## 部署中常用的linux命令
```
ps aux | grep node // 查看node应用
lsof -i tcp:3000 // 查看3000端口被占用的进程ID
kill -9 pid // 通过ID将某个进程停止
ssh 用户名@密码 // 服务器权限获取
scp // 文件拷贝命令
```