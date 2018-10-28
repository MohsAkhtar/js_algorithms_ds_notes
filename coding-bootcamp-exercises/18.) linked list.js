// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert into head
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // return number nodes
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  // return head
  getFirst() {
    return this.head;
  }

  // return last node
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // empties list
  clear() {
    this.head = null;
  }

  // remove first node
  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next; // if one node exists it will still point to null
  }

  // remove last node
  removeLast() {
    // edge - no nodes
    if (!this.head) {
      return;
    }

    // edge - 1 node
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // more than 1 node
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  // Insert node at last pos
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are existing nodes in chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  // get node at pos
  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }

    return null; // for out of bounds index
  }

  // removes node at index
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  // insert at index
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
