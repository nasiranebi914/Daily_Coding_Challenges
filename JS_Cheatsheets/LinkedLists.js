class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Function to print out a list of nodes
  printList() {
    let n = this.head;
    while (n != null) {
      console.log(n.data);
      n = n.next;
    }
  }
  // Function to get the size of the list
  getSize() {
    let n = this.head;
    let counter = 0;
    while (n) {
      counter += 1;
      n = n.next;
    }
    return counter;
  }

  // Function to delete the whole list
  clear() {
    return (this.head = null);
  }

  // Function to get the last node
  getLast() {
    if (this.head === null) {
      return;
    }
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  // Function to get the first node
  getFirst() {
    if (this.head === null) {
      return;
    }
    return this.head;
  }

  // Functions to insert a node to the list
  // 1.Add node to the front
  addToFront(node) {
    let n = this.head;
    node.next = n;
    this.head = node;
  }
  //2.Add node to the given index
  addToIndex(node, index) {
    if (this.head === null || node === null) {
      return;
    }
    if (index === 0) {
      this.addToFront(node);
    }

    let counter = 0;
    let prev = this.head;
    let prevNext = prev.next;

    while (prevNext) {
      counter += 1;
      if (counter === index) {
        prev.next = node;
        node.next = prevNext;
      }
      prev = prev.next;
      prevNext = prevNext.next;
    }
    return this.head;
  }
  //3.Add to last index
  addToLast(node) {
    let n = this.head;
    while (n.next != null) {
      n = n.next;
    }
    n.next = node;
    return this.head;
  }

  //Functions to delete a node from a list
  //1. Delete the head
  deleteHead() {
    let n = this.head.next;
    this.head = n;
    return this.head;
  }
  //2. Delete from index
  deleteIndex(index) {
    let counter = 0;
    let prev = this.head;
    let prevNext = prev.next;
    if (index === 0) {
      this.deleteHead();
    }
    while (prevNext) {
      counter += 1;
      if (counter === index) {
        prev.next = prevNext.next;
      }
      prev = prev.next;
      prevNext = prevNext.next;
    }
    return this.head;
  }
  //3. Delete last index
  deleteLast() {
    let n = this.head;
    while (n.next.next !== null) {
      n = n.next;
    }
    n.next = null;
    return this.head;
  }
  //4.Delete given node
  deleteNode(node) {
    let prev = this.head;
    let prevNext = prev.next;
    while (prevNext) {
      if (prevNext === node) {
        prev.next = prevNext.next;
      }
      prev = prev.next;
      prevNext = prevNext.next;
    }
  }

  //Function to get node by index
  getIndex(index) {
    let n = this.head;
    let counter = 0;
    while (n) {
      if (counter === index) {
        return n;
      }
      counter += 1;
      n = n.next;
    }
  }
  //Function to get the middle node
  getMiddle() {
    let n = this.head;
    let counter = 0;
    let half = 0;
    while (n) {
      counter += 1;
      n = n.next;
    }
    n = this.head;
    while (n) {
      if (counter % 2 === 0) {
        if (counter / 2 === half) {
          return n;
        }
        half += 1;
        n = n.next;
      } else {
        if (Math.floor(counter / 2) === half) {
          return n;
        }
        half += 1;
        n = n.next;
      }
    }
  }

  // Function to remove duplicated nodes in a list
  removeDups() {
    let set = new Set();
    let prev = this.head;
    let next = this.head.next;
    while (next) {
      if (set.has(next.data)) {
        prev.next = next.next;
      } else {
        set.add(next.data);
      }
      prev = prev.next;
      next = next.next;
    }

    return set;
  }

  //Function to return nodes from the kth index to the last index
  returnKthToLast(index) {
    if (index === 0) {
      return this.head;
    }
    let counter = 0;
    let n = this.head;
    while (n) {
      if (counter === index) {
        this.head = n;
        return this.head;
      }
      counter += 1;
      n = n.next;
    }
    if (index >= counter) {
      return "Out of length";
    }
  }
  //Function to reverse a list
  reverseList() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this.head;
  }

  //Function to return the sum of two reversed nodes
  addTwoNumbers = function (l1, l2) {
    let tmp = 0;
    let sum = [];
    let carry = 0;
    while (l1 || l2) {
      if (l1.val + l2.val >= 10) {
        tmp = parseInt((l1.val + l2.val).toString()[1]);
        sum.push(tmp);
        carry = 1;
      } else {
        let n = l1.val + l2.val;
        if (carry === 1) {
          n += 1;
        }
        sum.push(n);
        carry = 0;
      }

      l1 = l1.next;
      l2 = l2.next;
    }

    return sum;
  };
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node("a");
let node2 = new Node("b");
let node3 = new Node("c");
let node4 = new Node("d");
let node5 = new Node("e");
let node6 = new Node("c");

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let list = new LinkedList(node1);

console.log(list.reverseList());
list.printList();
