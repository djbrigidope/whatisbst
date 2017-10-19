// let queue = []
//
//
// queue.push(1)
// queue.push(2)
// queue.push(3)
//
//
// console.log(queue.push('poo'));
// console.log(queue);


function Queue() {
    this.elements = [];
  }

  Queue.prototype.enqueue = function (e){
    this.elements.push(e);
  }

  Queue.prototype.dequeue = function(){
    return this.elements.shift();
  }

  Queue.protoype.isEmpty = function (){
    return this.elements.length == 0;
  }

  Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements([0:undefined])

}

Queue.push('a');
Queue.push('b');
Queue.push('c');

console.log(Queue());



// module.exports = Queue;
