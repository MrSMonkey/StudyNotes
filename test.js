// implement javascript new keyword
function mockNew(constructor, ...args) {
  const temp = new Object();
  temp.__proto__ = mockNew.prototype;
  People.call(temp, ...args)
  console.log()
  return temp;
}
// example
function People(name) {
  this.name = name;
  this.sayHello = function() {
    console.log(`hello, I am ${this.name}`);
  };
}
// should equal to jack = new People('jack')
const jack = mockNew(People, "jack");
expect(jack instanceof People === true)
