
## callee/caller
## eval
```
function test() {
  var a = 'hh';
  return function () {
    eval('console.log(a)') // 方式1
    window.eval('console.log(a)') // 方式2
  }
}
const tt = teset()();
// 执行结果：
// 方式1: hh
// 方式2: Uncaught ReferenceError: a is not defined

```
上述代码：<br/>
方式1: 打印test函数内部变量a，且teset()执行后，test函数内部变量a不会被销毁；<br/>
方式2: 报错，且teset()执行后，test函数内部变量a会被销毁.<br/>
## 元编程
1. symbol
2. proxy
3. Reflect

## Promise实现
```
function Pr
```