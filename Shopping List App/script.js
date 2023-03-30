'use strict';

const todoList = document.querySelector('.todo-list');

const eventHandler = (e) => {
	const tagName = e.target.tagName;
	console.log("Clicked on: ", tagName);
  if (tagName === "LI") e.target.classList.add("completed");
  else if (tagName === "SPAN") e.target.parentNode.remove();
  else console.log("Unknown TagName: ", tagName);  
}

todoList.addEventListener('click', eventHandler);

const addNewItem = () => {
	console.log("Adding new item...");
	const input = document.getElementById('new-item-text');
  const item = `<li class="todo-item">${input.value}<span class="remove"></span></li>`;
  todoList.insertAdjacentHTML('beforeend', item);
  input.value = ''; 
}

document.getElementById('add-item').addEventListener('click', addNewItem);

document.getElementById('new-item-text').addEventListener('keydown', (e) => {
  if (e.key == 'Enter' || e.keyCode == 13) {
		console.log("Enter key pressed...");
		addNewItem();
	}
});
