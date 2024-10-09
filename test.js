// implement javascript new keyword
// function mockNew(constructor, ...args) {
//   const temp = new Object();
//   temp.__proto__ = mockNew.prototype;
//   People.call(temp, ...args)
//   console.log()
//   return temp;
// }
// // example
// function People(name) {
//   this.name = name;
//   this.sayHello = function() {
//     console.log(`hello, I am ${this.name}`);
//   };
// }
// // should equal to jack = new People('jack')
// const jack = mockNew(People, "jack");
// expect(jack instanceof People === true)

// function BST() {
//   this.root = null;
//   this.insert = insert
// }
// function Node(value, left, right) {
//   this.show = false;
//   this.data = value;
//   this.left = left;
//   this.right = right;
// }

// function show() {
//   return this.data;
// }
// function insert(data) {
//   let n = new Node(data)
//   if(this.root == null) {
//     this.root = n

//   } else {
//     let current = this.root;
//     let parent;
//     while(true) {
//       parent = current;
//       if(data < current.data) {
//         current = current.left
//         if(current == null) {
//           parent.left = n;
//           break;
//         }
//       } else {
//         current = current.right
//         if(current == null) {
//           parent.right = n;
//           break;
//         }
//       }
//     }
//   }
// }
// 节点对象
function Node(data, left, right) {
  this.data = data; // 节点值
  this.left = left; // 当前节点的左子节点
  this.right = right; // 当前节点的右子节点
  this.show = show; // 辅助function
}

function show() {
  return this.data;
}
function BST() {
  this.root = null;
  this.insert = insert;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
   this.root = n;
  }
  else {
   var current = this.root;
   var parent;
   while (true) {
     parent = current;
     if (data < current.data) {
      current = current.left;
      if (current == null) {
        parent.left = n;
        break;
      }
     }
     else {
      current = current.right;
      if (current == null) {
        parent.right = n;
        break;
      }
     }
   }
  }
}

const bst = new BST();
[4,3,9,5].forEach((i) => {
  bst.insert(i)
})
console.log(bst)

let arr = [3, 9, 5, 4,10, 11,99,52,1,77]

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j+1]) {
        const temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
}
// bubble(arr)
// console.log(arr);
function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >=0 && arr[j] > arr[j+1] ; j--) {
        console.log(134564,j);
        const temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
    }
  }
}
// insert(arr)
// console.log(arr);

function quickSort(arr) {
  if(arr.length <=1) return arr;
  const middleIndex = Math.ceil(arr.length / 2)
  const middleNum = arr.splice(middleIndex, 1)[0];
  console.log('middleNum', middleNum);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < middleNum) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([middleNum], quickSort(right))
}
tt = quickSort(arr)
console.log('quickSort',tt);
showName()

function showName() {
  console.log(1);
}

var showName = function() {
  console.log(2);
}

function Foo() {
  this.name = 1;
  return 11
}
console.log('f00', new Foo());

const first = () => (new Promise((resolve,reject)=>{
  console.log(3);
  let p = new Promise((resolve, reject)=>{
       console.log(7);
      setTimeout(()=>{
         console.log(5);
         resolve(6); 
      },0)
      resolve(1);
  }); 
  resolve(2);
  p.then((arg)=>{
      console.log(arg);
  });

}));

first().then((arg)=>{
  console.log(arg);
});
console.log(4);