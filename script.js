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

// -------------------- Adding a Product -------------------- //
// need log error when entering incomplete values ​​or duplicate ID.

addProduct = (name, category, price, stock) => {
	// auto assign id
	let newID = inventory.reduce((acc, value) => {
		return (acc = value.productId + 1);
	}, 0);

	if (
		name === undefined ||
		category === undefined ||
		price === undefined ||
		stock === undefined
	) {
		console.log("Please fill in completely.");
	} else {
		inventory.push({
			productId: newID,
			productName: name,
			category: category,
			price: price,
			stock: stock,
		});
	}
};

// -------------------- Finding a Product -------------------- //
// need log error when the product doesn't exist in the inventory.

// -------------------- Updating Stock -------------------- //
// need log error when error handling with validation such as 'enter the wrong product_id' or 'update stock < 0

// -------------------- Deleting Product -------------------- //
// need confirm message when successful deleted
