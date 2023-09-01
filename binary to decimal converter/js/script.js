document.querySelector(".convert").addEventListener("click", convert);

function convert() {
	const binary = document.querySelector(".binaryNo").value;
	if (binary === "") return alert("Please, Enter a Binary Number 101");
	binary.split("").map((char) => {
		if (char !== "0" && char !== "1")
			return alert("Please, Enter a Binary Number 101");
	});
	const decimal = parseInt(binary, 2);
	document.querySelector(".decimalNo").value = decimal;
	return true;
}
