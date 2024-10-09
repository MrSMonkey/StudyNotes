## 常量值
```js
// threjs中几何体的颜色设置
THREE.NoColors = 0; // 无色
THREE.FaceColors = 1; // 使用面的颜色
THREE.VertexColors = 2; // 使用顶点的颜色
```

```js
var geometry = new THREE.PlaneGeometry(300, 300, 2, 3); // 四边形
var material = new THREE.MeshPhongMaterial( {
  flatShading: true,
  vertexColors: THREE.VertexColors,
  shininess: 0
} );

var colors = [
  new THREE.Color(0x049583),
  new THREE.Color(0x047783),
  new THREE.Color(0x999583),
  new THREE.Color(0x044483),
]
colors.forEach()
```