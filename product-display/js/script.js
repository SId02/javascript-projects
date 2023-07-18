let checkCat = [];
let productDiv = document.querySelector(".product");
let CategoryListDiv = document.querySelector(".CategoryList");
let allCategoryList = [];
let displayproduct = async (allCheckCat = []) => {
	productDiv.innerHTML = "";
	let product = await fetch("https://fakestoreapi.com/products");
	let finalproduct = await product.json();
	finalproduct.forEach((element) => {
		if (!allCategoryList.includes(element.category)) {
			CategoryListDiv.innerHTML += `
										  <label class="checkbox">
												<input type="checkbox" value="${element.category}" onClick='categoryFilter()'>
												${element.category}
											</label>`;
			allCategoryList.push(element.category);
		}

		if (allCheckCat.length == 0) {
			allCheckCat = allCategoryList;
		}
		if (allCheckCat.includes(element.category)) {
			productDiv.innerHTML += `
			<div class="column is-4-desktop">
			<div class="card">
			  <div class="card-image">
				<figure class="image is-4by3">
				  <img src="${element.image}" alt="Placeholder image">
				</figure>
			  </div>
			  <div class="card-content">
				<div class="content">
				  <h5>${element.category}</h5>
				  <h3>${element.title}</h3>
				  <p>price Rs.${element.price} |${element.rating.rate}</p>

				</div>
			  </div>
			</div>
		  </div>
			`;
		}
	});
};

  displayproduct();

let categoryFilter = () => {
	let checkInput = document.querySelectorAll("input[type='checkbox']");
	let checkdata = [];
	checkInput.forEach((e) => {
		if (e.checked) {
			checkdata.push(e.value);
		}
	});
	displayproduct(checkdata);
};
