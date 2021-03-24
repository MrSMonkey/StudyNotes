## 左中右布局
方式1：
```
// dom结构
<body>
  <div class="middle">中</div>
  <div class="left">left</div>
  <div class="right">right</div>
</body>

// 样式
* {
  margin: 0;
  padding: 0;
}
div{
  height: 150px;
}
.left{
  float: left;
  width: 300px;
  background-color: red;
  margin-left: -100%;
}
.right{
  float: left;
  width: 200px;
  background-color: green;
  margin-left: -200px;
}
.middle{
  float: left;
  background-color: yellow;
  width: 100%;
  padding: 0 200px 0 300px;
  box-sizing: border-box;
}
// 缺点：div.middle中的盒子的样式都会继承box-sizing: border-box;
```

方式2：
```
// dom结构
<body><div class="container">
    <div class="middle">中
      <div>111</div>
    </div>
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</body>

// 样式：
* {
  margin: 0;
  padding: 0;
}
div{
  height: 150px;
}
.container{
  padding: 0 200px 0 300px;
}
.left{
  float: left;
  width: 300px;
  background-color: red;
  margin-left: -100%;
  position: relative;
  left: -300px;
}
.right{
  float: left;
  width: 200px;
  background-color: green;
  margin-left: -200px;
  position: relative;
  right: -200px;
}
.middle{
  float: left;
  background-color: yellow;
  width: 100%;
}
```

方式3：
```
// dom结构
<body>
  <div class="container">
    <div class="middle">
      <div class="inner">中</div>
    </div>
    <div class="left">
    	left
    	<p>222</p>
    </div>
    <div class="right">right</div>
  </div>
</body>
// 样式

* {
  margin: 0;
  padding: 0;
}
<!-- 
 // 实现假等高
.container {
  overflow: hidden;
}
.container div{
  padding-bottom: 99999px;
  margin-bottom: -99999px;
}
-->
.left{
  float: left;
  width: 300px;
  background-color: red;
  margin-left: -100%;
}
.right{
  float: left;
  width: 200px;
  background-color: green;
  margin-left: -200px;
}
.middle{
  float: left;
  background-color: yellow;
  width: 100%;
}
.middle .inner {
  margin-left: 300px;
  margin-right: 200px;
}

```

## css3矩阵
1. 什么是矩阵？<br/>  
![RUNOOB 图标](./images/css/matrix.png)

2. css属性：matrix