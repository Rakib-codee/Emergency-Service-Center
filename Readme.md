1.getElementById(id): Selects a single element based on its unique id attribute.
getElementsByClassName(className): Selects all elements that possess a specific class name.
querySelector(selector): Selects the first element that matches a specified CSS selector (e.g., #myId, .myClass, div, input[type="text"]).
querySelectorAll(selector): Selects all elements that match a specified CSS selector.



2.Creating and inserting a new element into the Document Object Model (DOM) in JavaScript involves two main steps: creating the element and then attaching it to an existing element in the document.


3.Event bubbling is a JavaScript mechanism where an event, like a click, starts at the target element that triggered it and then propagates or "bubbles up" through its ancestor elements in the Document Object Model (DOM) tree, up to the root of the document.


4.Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each individual child. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to its parent elements in the Document Object Model (DOM) tree. 

*Improved Performance and Memory Usage:
*Simplified Code and Maintainability:
*Reduced DOM Manipulation:
*Handling Dynamic Content:


5.preventDefault() and stopPropagation() are distinct methods of the Event interface in the Document Object Model (DOM), used to control event behavior in web development.