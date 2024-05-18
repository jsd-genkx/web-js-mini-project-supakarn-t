let categories = [
	{ categoryId: 1, categoryName: "Fruits" },
	{ categoryId: 2, categoryName: "Beverages" },
];

let inventory = [
	{ productId: 1, productName: "Apple", category: 1, price: 0.99, stock: 150 },
	{
		productId: 2,
		productName: "Orange Juice",
		category: 2,
		price: 3.49,
		stock: 40,
	},
];

// ---------------------------------------- Adding a Product ---------------------------------------- //
// log error when entering incomplete values ​​or duplicate ID.
const addProduct = (productName, category, price, stock) => {
	// auto assign id
	let newProductId = inventory.reduce((update_value, each_value) => {
		return (update_value = each_value.productId + 1);
	}, 0);

	if (!productName || !category || !price || !stock) {
		return console.log("Please fill in completely, not 0, and empty.");
	}
	inventory.push({
		productId: newProductId,
		productName,
		category,
		price,
		stock,
	});
	console.log(`The ${productName} has already been added to the inventory.`);
};
// addProduct("banana", 1, 0.99, 50);

// ---------------------------------------- Finding a Product ---------------------------------------- //
// log error when the product doesn't exist in the inventory.
const findProduct = (productIdOrName) => {
	const product = inventory.find((item) =>
		typeof productIdOrName === "number"
			? item.productId === productIdOrName
			: item.productName.toLowerCase() === productIdOrName.toLowerCase()
	);
	if (!product) {
		typeof productIdOrName === "number"
			? console.log(
					`The product ID ${productIdOrName} doesn't exist in the inventory.`
			  )
			: console.log(
					`The product name ${productIdOrName} doesn't exist in the inventory.`
			  );
	}
	if (product) {
		return product;
	}
};
const showFindProduct = (productIdOrName) => {
	const product = findProduct(productIdOrName);
	if (product) {
		console.log(findProduct(productIdOrName));
	}
};
// showFindProduct(2);
// showFindProduct(3);
// showFindProduct("orange juice");
// showFindProduct("orange");

// ---------------------------------------- Updating Stock ---------------------------------------- //
// log error when error handling with validation such as 'enter the wrong product_id' or 'update stock < 0
const updateStock = (productId, stock) => {
	if (stock < 0) {
		return console.log("Error! product stock can't be negative.");
	}
	const product = findProduct(productId);
	if (product) {
		const oldStock = product.stock;
		product.stock = stock;
		console.log(
			`The product ID ${productId} (${product.productName}) stock has already been updated from ${oldStock} to ${stock}.`
		);
	}
};
// updateStock(2, 20);
// updateStock(2, +20);
// updateStock(3, -20);

// ---------------------------------------- Deleting Product ---------------------------------------- //
// need confirm message when successful deleted
const deleteProduct = (productID) => {
	if (typeof productID !== "number") {
		return console.log("The product ID is invalid.");
	}

	const product = findProduct(productID);
	if (product) {
		inventory.splice(productID - 1, 1);
		console.log(`The product ID ${productID} was deleted.`);
	}
};
// deleteProduct(1);
// deleteProduct(3);
// console.log(inventory);
