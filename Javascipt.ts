// script.js

// Task 1: Change text content dynamically
const changeTextButton = document.getElementById('change-text-button');
const dynamicTextElement = document.getElementById('dynamic-text');

function changeText() {
    dynamicTextElement.textContent = 'The text has been dynamically changed!';
}

changeTextButton.addEventListener('click', changeText);

// Task 2: Modify CSS styles via JavaScript
const changeStyleButton = document.getElementById('change-style-button');
const styledElement = document.getElementById('styled-element');

function changeStyle() {
    styledElement.style.backgroundColor = 'lightgreen';
    styledElement.style.color = 'darkgreen';
    styledElement.style.fontWeight = 'bold';
}

changeStyleButton.addEventListener('click', changeStyle);

// Task 3: Add or remove an element when a button is clicked
const addItemButton = document.getElementById('add-item-button');
const removeItemButton = document.getElementById('remove-item-button');
const itemList = document.getElementById('item-list');
let itemCount = itemList.children.length + 1;

function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    itemList.appendChild(newItem);
    itemCount++;
}

function removeItem() {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
        itemCount--;
    } else {
        alert('No more items to remove!');
    }
}

addItemButton.addEventListener('click', addItem);
removeItemButton.addEventListener('click', removeItem);