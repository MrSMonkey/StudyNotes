1. nvm安装包下载
https://github.com/coreybutler/nvm-windows/releases

2. 设置node包安装镜像
  ```cmd
  nvm node_mirror https://npmmirror.com/mirrors/node/ 
  nvm node_mirror https://npmmirror.com/mirrors/npm/
  ```
* 镜像地址：https://registry.npmmirror.com - 无效

3. 安装node包并且使用此版本

  ```cmd
  # 安装node v16.20.2
  nvm install 16.20.2
  # 使用node v16.20.2
  nvm use 16.20.2
  # 当前版本
  node -v

  # 安装node v15.14.0
  nvm install 15.14.0
  # 使用node v15.14.0
  nvm use 15.14.0
  # 当前版本
  node -v
  ```

4. 其他命令
  ```cmd
  # 查看已安装的node版本列表
  nvm list
  # 卸载某个版本的node
  nvm uninstall 14.14.0 
  ```
