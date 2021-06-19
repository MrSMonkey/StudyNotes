
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
  console.log('connected被调用');
});
myEmitter.emit('event');
console.log('程序执行完毕');