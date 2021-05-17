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
<body>
  <div class="container">
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

## OO CSS
1. OO CSS概念<br/>
![](./images/css/001.png)<br/>
2. OO CSS的作用<br/>
![](./images/css/002.png)<br/>
3. OO CSS的注意事项<br/>
* 不要直接定义子节点，应把共性申明放到父类；
* 结构和皮肤相分离
* 容器和内容相分离
* 抽象出可重用元素，建好组件库，在组件库内寻找可用的元素组装页面
* 给想要扩展的对象本身增加class而不是修改它的父节点
* 对象应保持独立性<br/>
![](./images/css/003.png)<br/>
* 避免使用ID选择器
* 避免位置相关的样式-<br/>
![](./images/css/004.png)<br/>
注：#footer h1与#header h1的样式有大部分是一样的，只有颜色可能不一样；但是我们不应该#footer h1与#header h1这两个选择器去实现不同的样式，而是应该给两个h1分别添加不同的class，在这个class里面书写他们的颜色
* 保证选择器相同的权重
* 类名 简短 清晰 语义化 OOCSS的名字并不影响HTML语义化

## 比较好用的CSS基础样式库
1. reset.css
2. normalize.css
3. neat.css

## Icon-font与常用字体排版
![](./images/css/005.png)<br/>

## css分层理论

1. 为什么要分层<br/>
![](./images/css/008.png)<br/> 
2. SMACSS<br/>
![](./images/css/006.png)<br/>
3. BEM（业内常用）<br/>
![](./images/css/007.png)<br/>
4. SUIT<br/>
![](./images/css/010.png)<br/>
5. ACSS（业内常用）<br/>
![](./images/css/009.png)<br/>
6. ITCSS<br/>
![](./images/css/011.png)<br/>


## post-css
1. 理念 css in js
2. postcss值得收藏插件<br/>
![](./images/css/012.png)<br/>
3. [css-doodle](https://css-doodle.com)是一个用来绘制CSS图案的WEB组件

## Houdini
![](./images/css/013.png)<br/>
1. 理念 js in css

