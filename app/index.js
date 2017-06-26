import './index.scss';

const store = {
	items: [
		{
			name: "Bike Helmet",
			color: "Black",
			price: 25
		},
		{
			name: "Pannier",
			color: "Purple",
			price: 50
		},
		{
			name: "Odometer",
			color: "Black",
			price: 20
		}
	],
	
	createTable: function() {
		let htmlTable = '';
		htmlTable += 
		`<thead>
      <tr>
        <th>Name</th>
        <th>Color</th>
        <th>Price</th>
        <th>Cart</th>
      </tr>
    </thead>
		<tbody>`
		for (let item of this.items) {
		  htmlTable += 
		  `<tr>
  			<td>${item.name}</td>
  			<td>${item.color}</td>
  			<td>${item.price}</td>
  			<td>Add</td>
  		</tr>`
		}
		htmlTable +=
		`</tbody>`
		const storeTable = document.getElementById('store');
		storeTable.innerHTML = htmlTable;
	}
};

class CartController {
	constructor() {
		this.cart = [];
	}

	showItems = () => {
		console.log("My Cart", this.cart);
	};

	addItem = index => {
		this.cart.push({
			name: store.items[index].name,
			color: store.items[index].color,
			price: store.items[index].price
		});
		this.showItems();
	};

	editItem = (index, newValue) => {
		this.cart[index] = newValue;
		this.showItems();
	};

	deleteItem = index => {
		this.cart.splice(index, 1);
		this.showItems();
	};

	printCart = () => {
		let htmlTable = '';
		for (let item of this.cart) {
			htmlTable +=
			 `<tr>
  			<td>${item.name}</td>
  			<td>${item.color}</td>
  			<td>${item.price}</td>
  		</tr>`
		}
		const cartTable = document.getElementById('cart');
		cartTable.innerHTML = htmlTable;
	}
}

const myCart = new CartController();

class MegaController {
	constructor(store, cart) {
	}
}

const controllEverything = new MegaController(store, cart);


store.createTable();

myCart.addItem(1);

myCart.printCart();
