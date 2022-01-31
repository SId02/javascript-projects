           
            document.querySelector(".add").addEventListener("click", getAdd);
			document.querySelector(".remove").addEventListener("click", getRemove);
			let count = 0;

			function getAdd(event) {
				event.preventDefault();
				if (count <= 10) {
					document.querySelector(".addinputs").innerHTML += `
                   <div class="addField">
                     <h2> Form ${count}</h2>
                     <input class="name ${count}"  type="text" placeholder="Name ${count}">
                     <input class="email ${count}"  type="email" placeholder="Email ${count}">
                      <input class="phone ${count}"  type="text" placeholder="Phone ${count}">
                   </div>`;
					count++;
				}
			}

			function getRemove(event) {
				event.preventDefault();
				if (count > 0) {
					let added = document.getElementsByClassName("addField");
					let lastadded = added[added.length - 1];
					lastadded.parentNode.removeChild(lastadded);
					count--;
				}
			}