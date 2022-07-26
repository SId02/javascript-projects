axios
	.get("https://api.hnpwa.com/v0/newest/1.json")
	.then(function (response) {
		createListItem(response);
	})
	.catch(function (error) {
		console.log(error);
	});

function createListItem(response) {
	response.data.forEach(function (listItem) {
		var div = document.createElement("div");
		div.setAttribute("class", "card-content");
		var span = document.createElement("span");
		span.setAttribute("class", "subtitle");

		var anchor = document.createElement("a");
		anchor.setAttribute("href", listItem.url);
		anchor.setAttribute("target", "__blank");
		anchor.innerHTML = listItem.title;
		anchor.prepend(span);

		div.appendChild(anchor);

		document.querySelector(".card").appendChild(div);
	});
}
