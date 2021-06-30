## 类型保护
## 不常用关键字
* Omit
* Partial
## 联合类型、交叉类型
## interface与type的区别
## keyof
keyof，即 索引类型查询操作符，我们可以将 keyof 作用于泛型 T 上来获取泛型 T 上的所有 public 属性名构成的 联合类型
>注意："public、protected、private"修饰符不可出现在类型成员上
```
type unionKey = keyof IUser
// unionKey 结果如下，其获得了接口类型 IUser 中的所有属性名组成的联合类型
type unionKey = "name" | "age" | "department"
type values = IUser[unionKey] // string | number 属性值类型组成的联合类型
```