class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;

let list = new LinkedList(node1);

// helper methods

LinkedList.prototype.insertAtBeginning = function (data) {
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  return this.head;
};

LinkedList.prototype.insertAtEnd = function (data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};
LinkedList.prototype.insertBetween = function (data, index) {
  let newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  if (index === 0) {
    let nextNode = this.head;
    this.head = newNode;
    this.head.next = nextNode;
    return this.head;
  }

  const previous = this.getAt(index - 1);
  newNode.next = previous.next;
  previous.next = newNode;
  return this.head;
};

LinkedList.prototype.deleteFirst = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
};
LinkedList.prototype.deleteLast = function () {
  if (!this.head) {
    return;
  }
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let previous = this.head;
  let tail = this.head.next;
  while (tail.next) {
    previous = tail;
    tail = tail.next;
  }
  previous.next = null;
  return this.head;
};

LinkedList.prototype.deleteAt = function (index) {
  if (!this.head) {
    return;
  }

  if (index == 0) {
    this.head = this.head.next;
    return this.head;
  }

  const previous = this.getAt(index - 1);
  if (!previous || !previous.next) {
    return;
  }
  previous.next = previous.next.next;
  return this.head;
};
