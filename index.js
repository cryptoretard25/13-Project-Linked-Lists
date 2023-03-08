const { log } = console;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  empty() {
    return this.#size === 0;
  }

  append(value) {
    // adds a new node containing value to the end of the list
    const node = new Node(value);
    if (this.empty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#size++;
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
    const node = new Node(value);
    if (this.empty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    this.#size++;
  }

  size() {
    // returns the total number of nodes in the list
    return this.#size;
  }

  head() {
    return this.#head;
  }

  tail() {
    // returns the last node in the list
    return this.#tail;
  }

  at(index) {
    // returns the node at the given index
    if (this.empty()) return -1;
    let current = this.#head;
    for (let i = 0; i < this.#size; i++) {
      if (i === index) return current;
      current = current.next;
    }
    return -1;
  }

  shift() {
    // removes the first element from the list
    if (this.empty()) return null;
    const removed = this.#head;
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#head = removed.next;
    }
    this.#size--;
    return removed.value;
  }

  pop() {
    // removes the last element from the list
    if (this.empty()) return null;
    const removed = this.#tail;
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      let current = this.#head;
      while (current.next !== removed) {
        current = current.next;
      }
      current.next = null;
      this.#tail = current;
    }
    this.#size--;
    return removed.value;
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.
    if (this.empty()) return false;
    let current = this.#head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) {
    // returns the index of the node containing value, or null if not found.
    if (this.empty()) return null;
    let current = this.#head;
    let i = 0;
    while (current) {
      if (current.value === value) return i;
      current = current.next;
      i++;
    }
    // for(let i = 0; i<this.#size; i++){
    //   if(current.value === value) return i;
    //   current = current.next
    // }
    return null;
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    if (this.empty()) return "null";
    let curr = this.#head;
    let str = "";
    while (curr) {
      str += `(${curr.value}) -> `;
      curr = curr.next;
    }
    str += `${curr}`;
    return str;
  }

  // Extra Credit
  insertAt(value, index) {
    // inserts a new node with the provided value at the given index
    if (index < 0 || index > this.#size) return null;
    if (index === 0) this.prepend(value);
    else if (index === this.#size) this.append(value);
    else {
      const node = new Node(value);
      let prev = this.#head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.#size++;
    }
  }

  removeAt(index) {
    // removes the node at the given index
    if (index < 0 || index >= this.#size) return null;
    if (index === 0) return this.shift();
    if (index === this.#size - 1) return this.pop();
    let prev = this.#head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    const removed = prev.next;
    prev.next = removed.next;
    this.size--;
    return removed.value;
  }
}

const linkedlist = new LinkedList();
linkedlist.append(1);
linkedlist.prepend(0);
linkedlist.append(2);
log("Is empty?:", linkedlist.empty());
log("Tail:", linkedlist.tail());
log("Head:", linkedlist.head());
log("Size:", linkedlist.size());
log("Return node by given index");
log("At 0:", linkedlist.at(0));
log("At 1:", linkedlist.at(1));
log("At 2:", linkedlist.at(2));
log("At 3:", linkedlist.at(3));
log("Remove from end");
linkedlist.pop();
log("Head:", linkedlist.head());
log("Tail:", linkedlist.tail());
log("Contains");
log("Contains 0:", linkedlist.contains(0));
log("Contains 1:", linkedlist.contains(1));
log("Contains 1552:", linkedlist.contains(1552));
log("Find value index");
log("Find 0:", linkedlist.find(0));
log("Find 1:", linkedlist.find(1));
log("Find 1552:", linkedlist.find(1552));
log("Print Linked list values");
linkedlist.prepend(-1);
linkedlist.append(2);
linkedlist.append(3);
log(linkedlist.toString());
log(linkedlist.size());
log(linkedlist.removeAt(0));
log(linkedlist.size());
log(linkedlist.removeAt(3));
log(linkedlist.removeAt(5));
log(linkedlist.toString());
log(linkedlist.removeAt(0));
log(linkedlist.toString());
linkedlist.insertAt(0, 0)
linkedlist.insertAt(3, 3)
linkedlist.insertAt(0.5, 1)
linkedlist.insertAt(1.5, 3)
linkedlist.insertAt(2.5, 5)
log(linkedlist.toString())
log(linkedlist.size())
