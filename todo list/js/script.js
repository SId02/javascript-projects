let form = document.querySelector("#addForm");
let itemList = document.querySelector("#add_list");


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
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
   
  }
}


