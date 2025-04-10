let form = document.querySelector("#addForm");
let itemList = document.querySelector("#add_list");
const body = document.body;
const toggleModeBtn = document.querySelector('#toggleMode');

form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);

function addItem(e) {
	e.preventDefault();
	// Get input value
	let newItem = document.querySelector("#todo_insert").value;
	let li = document.createElement("li");
	li.className = "card-content";
	li.appendChild(document.createTextNode(newItem));
	li.className = "notification is-info is-light";
	let deleteBtn = document.createElement("button");
	deleteBtn.className = "delete";
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);
	itemList.appendChild(li);
	document.querySelector("#todo_insert").value = "";
}

// Remove item
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		let li = e.target.parentElement;
		itemList.removeChild(li);
	}
}

toggleModeBtn.addEventListener('click', () => {
	if (body.classList.contains('light-mode')) {
		body.classList.remove('light-mode');
		body.classList.add('dark-mode');
	} else {
		body.classList.remove('dark-mode');
		body.classList.add('light-mode');
	}
});
