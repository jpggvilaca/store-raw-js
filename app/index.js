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
			color: "Black",
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
		for (let item of this.items) {
		  htmlTable += 
		  `<tr>
  			<td>${item.name}</td>
  			<td>${item.color}</td>
  			<td>${item.price}</td>
  		</tr>`
		}
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

	addItem = position => {
		this.cart.push({
			name: store.items[position].name,
			color: store.items[position].color,
			price: store.items[position].price
		});
		this.showItems();
	};

	editItem = (position, newValue) => {
		this.cart[position] = newValue;
		this.showItems();
	};

	deleteItem = position => {
		this.cart.splice(position, 1);
		this.showItems();
	};
}

const myCart = new CartController();

store.createTable();
