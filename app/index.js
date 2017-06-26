import './index.scss';

const store = [{
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
];

class Cart {
	constructor() {
		this.cart = [];
	}

	showItems = () => {
		console.log("My Cart", this.cart);
	};

	addItem = item => {
		this.cart.push({
			name: store[item].name,
			color: store[item].color,
			price: store[item].price
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
		for (let [key, val] of Object.entries(store)) {
			console.log(key, val);
			console.log(val.name);
			htmlTable +=
				`<tr>
  			<td>${val.name}</td>
  			<td>${val.color}</td>
  			<td>${val.price}</td>
  			<td><button>Add</button></td>
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