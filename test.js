function teset() {
  var a = 'hh';
  return function () {
    window.eval('console.log(a)')
  }
}
const tt = teset()();

function Promise(fn) {
  var callback;
  this.then = function (done) {
    callback = done;
  }
  function resolve(data) {
    setTimeout(function () {
      callback(data)
    },0)
  }
  function reject(err) {
    setTimeout(function () {
      callback(err)
    },0)
  }
  fn(resolve, reject)
}

new Promise(function (resolve, reject) {
  resolve(1)
}).then((data) => {
  console.log('res', data)
})