function LinkedList() {
 this.head = null;
}

LinkedList.prototype.push = function (val) {

  const node = { value: val, next: null }

  if(!this.head){
    this.head = node;
  }
  else{
    current = this.head
    while(current.next){
      current = current.next
    }
    current.next = node;
  }
}


let ll = new LinkedList();

ll.push(235)
ll.push(123)
ll.push(456)

console.log(ll.head)

module.exports = LinkedList;
