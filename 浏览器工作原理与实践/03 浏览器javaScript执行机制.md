
## 变量提升
1. JavaScript代码执行过程中需要先做**变量提升**，而之所以需要实现变量提升，是因为JavaScript代码在执行之前需要先编译；
2. 在**编译阶段**，变量和函数会放到**变量环境**中，变量的默认值会被设置为undefined；在代码**执行阶段**，JavaScript引擎会从变量环境中查找自定义的变量和函数。
```js
showName()
console.log(myname)
var myname = '极客时间'
function showName() {
  console.log('函数 showName 被执行');
}
// 输出结果:
// 函数 showName 被执行
// undefined
```
上述代码执行过程模拟：
```js
/*
* 编译阶段-变量提升部分
*/
// 把变量 myname 提升到开头，
// 同时给 myname 赋值为 undefined
var myname = undefined
// 把函数 showName 提升到开头
function showName() {
  console.log('showName 被调用');
}


/*
* 执行阶段-可执行代码部分
*/
showName()
console.log(myname)
// 去掉 var 声明部分，保留赋值语句
myname = '极客时间'
```
3. 在编译阶段，如果存在同名的函数，变量环境中只存放最后定义的那个；如果变量与函数同名（与定义的顺序无关），变量的声明会被忽略。
```js
function showName() {
  console.log('极客邦');
}
showName();
function showName() {
  console.log('极客时间');
}
showName();
// 输出结果:
// 极客时间
// 极客时间
```
```js
showName()
var showName = function() {
  console.log(2)
}
function showName() {
  console.log(1)
}
// 输出结果:
// 1
```

```js
showName()
function showName() {
  console.log(1)
}
var showName = function() {
  console.log(2)
}
// 输出结果:
// 1
```

## 调用栈


