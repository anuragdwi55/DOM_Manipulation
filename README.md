DOM (Document Object Model) manipulation is a fundamental aspect of web development that allows developers to dynamically interact with and modify the structure, style, and content of a web page. JavaScript provides a variety of methods and properties to manipulate the DOM, enabling developers to create interactive and responsive user experiences.

===============================================================Selecting Elements=============================================================================================
To manipulate DOM elements, you first need to select them. JavaScript offers several methods for this purpose:

document.getElementById('id'): Selects a single element by its ID.
document.getElementsByClassName('class'): Selects all elements with a given class name.
document.getElementsByTagName('tag'): Selects all elements with a given tag name.
document.querySelector('selector'): Selects the first element that matches a CSS selector.
document.querySelectorAll('selector'): Selects all elements that match a CSS selector.
Modifying Elements
Once elements are selected, you can modify them in various ways:

===================================================================================Changing Content:============================================================================

element.textContent = 'New Text': Changes the text content of an element.
element.innerHTML = '<p>New HTML</p>': Changes the HTML content of an element.

=====================================================================================Changing Attributes:==================================================================

element.setAttribute('attribute', 'value'): Sets the value of an attribute.
element.getAttribute('attribute'): Gets the value of an attribute.
element.removeAttribute('attribute'): Removes an attribute.
Changing Styles:

element.style.property = 'value': Changes an inline style property.
==========================================================================================Adding/Removing Classes:=============================================================

element.classList.add('class'): Adds a class to an element.
element.classList.remove('class'): Removes a class from an element.
element.classList.toggle('class'): Toggles a class on an element.
Creating and Removing Elements

===========================================================================================Creating Elements:====================================================================

document.createElement('tag'): Creates a new element.
parentElement.appendChild(newElement): Appends a new element as a child of a parent element.

===============================================================================================Removing Elements:==================================================================

element.remove(): Removes an element from the DOM.
parentElement.removeChild(childElement): Removes a child element from a parent element.

Event Handling
Event handling is a crucial part of DOM manipulation, allowing you to respond to user interactions:

=================================================================================================Adding Event Listeners:================================================================

element.addEventListener('event', function): Attaches an event handler function to an element.
Removing Event Listeners:

element.removeEventListener('event', function): Removes an event handler function from an element.
