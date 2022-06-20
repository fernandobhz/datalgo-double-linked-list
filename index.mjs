class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newTail = {
      value,
      next: null
    }

    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
  }
  prepend(value) {
    const newHead = {
      value,
      next: this.head
    }

    this.head = newHead;
    this.length++;
  }
  insert(index, value) {
    if (index < 1) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }
        
    let previousNode = this.head;
    let currentNode = this.head.next;
    let currentIndex = 1;

    while(currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    const newNode = {
      value,
      next: currentNode
    }

    previousNode.next = newNode;
  }
  remove(index) {
    if (index < 1) {
      this.head = this.head.next;
      return;
    }

    if (index >= this.length) {
      throw new Error('index out of range');
    }
        
    let previousNode = this.head;
    let currentNode = this.head.next;
    let currentIndex = 1;

    while(currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    previousNode.next = currentNode.next;
  }
  printList(label = 0) {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(label, array.join(' > '));
  }
}
// 1 > 10 > 5 > 16
// 1 > 10 > 99 > 5 > 16

let myLinkedList = new LinkedList(10);
myLinkedList.printList(1);

myLinkedList.append(5);
myLinkedList.printList(2);

myLinkedList.append(16);
myLinkedList.printList(3);

myLinkedList.prepend(1);
myLinkedList.printList(4);

myLinkedList.append(99);
myLinkedList.printList(5);

myLinkedList.insert(2, 99);
myLinkedList.printList(6);

myLinkedList.insert(20, 88);
myLinkedList.printList(7);

myLinkedList.insert(0, -1);
myLinkedList.printList(7);

myLinkedList.remove(0);
myLinkedList.printList(8);

myLinkedList.remove(2);
myLinkedList.printList(9);