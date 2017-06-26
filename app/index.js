import './index.scss';

window.consoleMe = () => console.log('It\'s okay, Tania');

const store = [{
		id: 0,
		name: "Bike Helmet",
		color: "Black",
		price: 25
	},
	{
		id: 1,
		name: "Pannier",
		color: "Purple",
		price: 50
	},
	{
		id: 2,	
		name: "Odometer",
		color: "Black",
		price: 20
	}
];

class Cart {
	constructor() {
		this.cart = [];
	}

	addItem = item => {
		this.cart.push({
			name: store[item].name,
			color: store[item].color,
			price: store[item].price
		});
	};

	editItem = (item, newValue) => {
		this.cart[item] = newValue;
	};

	deleteItem = item => {
		this.cart.splice(item, 1);
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
			htmlTable +=
				`<tr>
  			<td>${val.name}</td>
  			<td>${val.color}</td>
  			<td>${val.price}</td>
  			<td><button onclick="ACCESS_ADDITEM_METHOD">Add</button></td>
  		</tr>`;
		}
		htmlTable +=
			`</tbody>`;
		const storeTable = document.getElementById('store');
		storeTable.innerHTML = htmlTable;
	}
}


const myCart = new Cart();

myCart.addItem(0);

myCart.printCart();
myCart.printStore(store);