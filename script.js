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

const addProduct = (productName, category, price, stock) => {
	// auto assign id
	let newProductId = inventory.reduce((update_value, each_value) => {
		return (update_value = each_value.productId + 1);
	}, 0);

	if (!productName || !category || !price || !stock) {
		console.log("Please fill in completely, not 0, and empty.");
	} else {
		inventory.push({
			productId: newProductId,
			productName,
			category,
			price,
			stock,
		});
		console.log(`${productName} is already added to the inventory`);
	}
};

// ---------------------------------------- Finding a Product ---------------------------------------- //

const findProduct = (productName) => {
	const product = inventory.find(
		(item) => item.productName.toLowerCase() == productName.toLowerCase()
	);
	if (!product) {
		console.log(`${productName} doesn't exist in the inventory.`);
	} else {
		console.log(product);
	}
};

// ---------------------------------------- Updating Stock ---------------------------------------- //
// need log error when error handling with validation such as 'enter the wrong product_id' or 'update stock < 0

// ---------------------------------------- Deleting Product ---------------------------------------- //
// need confirm message when successful deleted
