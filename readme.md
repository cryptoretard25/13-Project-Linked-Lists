<h2>Assignment</h2>
<h3>You will need two classes or factories:</h3>
<ol>
<li>LinkedList class / factory, which will represent the full list.</li>
<li>Node class / factory, containing a value function and a link to the nextNode, set both as null by default.</li>
</ol>
<h3>Build the following functions in your linked list class:</h3>
<ol>
  <li>append(value) adds a new node containing value to the end of the list</li>
  <li>prepend(value) adds a new node containing value to the start of the list</li>
  <li>size returns the total number of nodes in the list</li>
  <li>head returns the first node in the list</li>
  <li>tail returns the last node in the list</li>
  <li>at(index) returns the node at the given index</li>
  <li>contains(value) returns true if the passed in value is in the list and otherwise returns false.</li>
  <li>find(value) returns the index of the node containing value, or null if not found.</li>
  <li>toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null</li>
</ol>
<h3>Extra Credit</h3>
<ol>
  <li>insertAt(value, index) that inserts a new node with the provided value at the given index.</li>
  <li>removeAt(index) that removes the node at the given index.</li>
</ol>
<p>
  <h4>Extra Credit Tip:</h4> When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
</p>