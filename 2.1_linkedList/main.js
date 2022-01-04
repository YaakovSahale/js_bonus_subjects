class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LInkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertHead(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  insertTail(value) {
    const newTail = new Node(value);
    if (!this.tail) {
      this.tail = newTail;
      this.head = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
  }

  addNodeByIndex(value, index) {
    const newNode = new Node(value);
    let current = this.head;
    let prev = {};
    while (index) {
      prev = current;
      current = current.next;
      index--;
    }

    
  }

  print() {
    let current = this.head;
    let items = ``;
    while (current) {
      items += `${current.data},`;
      current = current.next;
    }
    console.log(items);
  }
}

const linkedList = new LInkedList();

linkedList.insertHead(10);
linkedList.insertHead(20);
linkedList.insertHead(30);
linkedList.insertHead(40);

linkedList.insertTail(3);

console.log(linkedList);

linkedList.print();
