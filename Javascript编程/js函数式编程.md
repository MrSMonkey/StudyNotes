## 基础理论
![](./../images/JS/js001.png)
## 函数式编程特点
![](./../images/JS/js002.png)
## 函数式编程常用核心概念
![](./../images/JS/js003.png)
1. 纯函数<br/>
![](./../images/JS/js004.png)
2. 函数柯理化<br/>
![](./../images/JS/js005.png)
```
function foo (p1, p2) {
  this.val = p1 + p2;
}
// 利用bind实现foo的柯理化
var bar = foo.bind(null, "p1"); // 返回一个函数
var baz = new bar("p2");
console.log(baz.val);
```
![](./../images/JS/js006.png)

3. 函数组合<br/>
![](./../images/JS/js007.png)
![](./../images/JS/js008.png)
4. Point Free<br/>
![](./../images/JS/js009.png)
5. 声明式与命令式代码<br/>
![](./../images/JS/js010.png)
6. 惰性函数、惰性求值<br/>
![](./../images/JS/js011.png)
```
// 第二次调用时，ajax的值已不再是函数，不需要再进行if判断
function ajax () {
  var xhr;
  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = ActiveXObject('Microsoft.XMLHTTP');
  }
  ajax = xhr;
  return xhr;
}
```
7. 高阶函数<br/>
![](./../images/JS/js012.png)
8. 尾调用优化<br/>
![](./../images/JS/js013.png)
* 传统递归<br/>
![](./../images/JS/js014.png)
* 传统递归<br/>
![](./../images/JS/js014.png)
* 尾递归优化<br/>
![](./../images/JS/js015.png)
8. 闭包<br/>
![](./../images/JS/js016.png)
## 函数式编程常用核心概念-范畴与容器
![](./../images/JS/js017.png)
1. 函子（functor）<br/>
![](./../images/JS/js018.png)
2. 容器、函子（functor）<br/>
![](./../images/JS/js019.png)
![](./../images/JS/js020.png)
3. of方法<br/>
![](./../images/JS/js021.png)
4. Maybe函子<br/>
![](./../images/JS/js023.png)
* Maybe函子实现方式如下<br/>
![](./../images/JS/js024.png)
5. 错误处理Either<br/>
![](./../images/JS/js025.png)
* Either函子实现方式如下<br/>
![](./../images/JS/js022.png)

## 函数式编程常用核心概念-IO
![](./../images/JS/js026.png)
<br/>
![](./../images/JS/js027.png)
<br/>
![](./../images/JS/js028.png)
<br/>
![](./../images/JS/js030.png)
```
var Container = function(x) {
  this._value = x;
}
Container.of = x => new Container(x);
Container.prototype.map = function (f) {
  return Container.of(f(this._value));
}

import 'lodash' from 'lodash';
var compose = lodash.flowRight; // 调用函数的顺序是从右往左的, 每一个连续调用，传入的参数都是前一个函数返回的结果

class Monad extends Container {
  join() {
    return this._value;
  }
  faltMap(f) {
    return this.map(f).join();
  }
}
class IO extends Monad {
  constructor(value) {
    super();
    this._value = value;
  }
  map(f) {
    return IO.of(compose(f, this._value))
  }
}

var readFile = (fileName) => {
  return new IO(() => {
    return fs.readFileSync(fileName)
  });
}

readFile('test.txt').faltMap(tail).faltMap(print); //最终转化成 compose(print, tail, readFileSync(fileName))
```
![](./../images/JS/js029.png)








