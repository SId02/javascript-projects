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
    // Create List Item
    var div = document.createElement("div");
    div.setAttribute("class", "card-content");

    //Create Badge
    var span = document.createElement("span");
    span.setAttribute("class", "subtitle");
    // span.innerHTML = listItem.points;

    var anchor = document.createElement("a");
    anchor.setAttribute("href", listItem.url);
    anchor.setAttribute("target", "__blank");
    anchor.innerHTML = listItem.title;
    anchor.prepend(span);

    div.appendChild(anchor);

    document.querySelector(".card").appendChild(div);
  });
}





/*
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
    // Create List Item
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");

    //Create Badge
    var span = document.createElement("span");
    span.setAttribute("class", "badge badge-primary");
    span.innerHTML = listItem.points;

    var anchor = document.createElement("a");
    anchor.setAttribute("href", listItem.url);
    anchor.setAttribute("target", "__blank");
    anchor.innerHTML = listItem.title;
    anchor.prepend(span);

    li.appendChild(anchor);

    document.querySelector(".list-group").appendChild(li);
  });
}

*/