const { log } = console;
const LinkedList = require('./LinkedList')

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