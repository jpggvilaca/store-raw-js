import './index.scss';

const store = {
	items: [{
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
	]
};

class Cart {
	constructor() {
		this.cart = [];
	}

	showItems = () => {
		console.log("My Cart", this.cart);
	};

	addItem = item => {
		this.cart.push({
			name: store.items[item].name,
			color: store.items[item].color,
			price: store.items[item].price
		});
		this.showItems();
	};

	editItem = (item, newValue) => {
		this.cart[item] = newValue;
		this.showItems();
	};

	deleteItem = item => {
		this.cart.splice(item, 1);
		this.showItems();
	};

	printCart = () => {
		let htmlTable = '';
		htmlTable +=
		`<thead>
      <tr>
        <th>Name</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>`;
		for (let item of this.cart) {
			htmlTable +=
			`<tr>
  			<td>${item.name}</td>
  			<td>${item.color}</td>
  			<td>${item.price}</td>
  		</tr>`;
		}
		const cartTable = document.getElementById('cart');
		cartTable.innerHTML = htmlTable;
	}

	printStore = store => {
		console.log(store);
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
		<tbody>`;
		for (let item of store) {
			htmlTable +=
				`<tr>
  			<td>${item.name}</td>
  			<td>${item.color}</td>
  			<td>${item.price}</td>
  			<td><button onclick="${addToCart()}>Add</button></td>
  		</tr>`;
		}
		htmlTable +=
			`</tbody>`;
		const storeTable = document.getElementById('store');
		storeTable.innerHTML = htmlTable;
	}
}

const myCart = new Cart();

myCart.addItem(1);

myCart.printCart();
myCart.printStore(store);
