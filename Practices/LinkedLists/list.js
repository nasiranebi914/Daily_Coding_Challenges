class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node("A");
let node2 = new Node("B");
let node3 = new Node("A");
let node4 = new Node("D");
let node5 = new Node("E");
let node6 = new Node("A");
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
list = new LinkedList(node1);

LinkedList.prototype.printList = function () {
  let current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};
// 1. Remove Dups
LinkedList.prototype.removeDups = function () {
  let obj = {};
  if (!this.head) {
    return;
  }
  let node = this.head;
  // loop through the list and mark numbers of attends
  while (node) {
    if (node.data in obj) {
      obj[node.data] += 1;
    } else {
      obj[node.data] = 1;
    }
    node = node.next;
  }
  let prev = this.head;
  // if the node appeared >1 in obj, remove it from the list
  while (prev) {
    if (obj[prev.data] > 1) {
      this.head = prev.next;
    }
    if (obj[prev.next.data] > 1) {
      prev.next = prev.next.next;
    }
    prev = prev.next;
  }
  return this.head;
};

LinkedList.prototype.returnKthToLast = function (index) {
  let counter = 0;
  if (!this.head) {
    return;
  }
  if (index === 0) {
    return this.head;
  }
  let node = this.head;
  while (node) {
    if (counter === index) {
      this.head = node;
      return this.head;
    }
    node = node.next;
    counter += 1;
  }
};

LinkedList.prototype.deleteMiddleNode = function (node) {
  if (node === null || node.next === null) {
    return;
  }
  let nextNode = node.next;
  node.data = nextNode.data;
  node.next = nextNode.next;
};

LinkedList.prototype.partition = function (value) {
  if (value === null) {
    return;
  }
  let node = this.head;
  while (node) {
    if (node < value) {
    }
    node = node.next;
  }
};
