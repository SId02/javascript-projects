const btns = document.querySelectorAll('.filter-btn');
const storeProducts = document.querySelectorAll('.store-product');
const search = document.querySelector("#search");
const productName = document.querySelectorAll(".product-details h3");
const darkModeToggle = document.getElementById("darkModeToggle");

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        storeProducts.forEach((product) => {
            if (filter === 'all') {
                product.style.display = 'block';
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            }
        });
    });
};

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function (product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block";
        } else {
            product.parentElement.parentElement.style.display = "none";
        }
    })
}
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});