import './index.scss';
import { store } from './store';
import DomController from './DomController';

class Cart extends DomController {
	constructor() {
		super();

		this.cart = [];
	}

	addItem = item => {
		if (!item) { return; }

		this.cart.push(item);
		console.log(this.cart);
	};

	editItem = (item, newValue) => {
		if (!item || !newValue) { return; }

		const index = this.cart.indexOf(item);

		this.cart.splice(index, 1);
		this.cart[index] = newValue;
	};

	deleteItem = item => {
		this.cart.splice(item, 1);
	};

	handleClick(elem, index) {
    this.addItem(store[index]);
  }
}

// Initialize cart instance
const myCart = new Cart();

// Array with dummy items
const testItems = [{
		id: 0,
		name: "Mike",
		color: "Black",
		price: 25
	},
	{
		id: 1,
		name: "Tania",
		color: "Purple",
		price: 50
	},
	{
		id: 2,
		name: "Timm",
		color: "Black",
		price: 20
	}
];

// TESTING CLASS METHODS
myCart.addItem(testItems[0]);
// myCart.editItem(testItems[0], testItems[2]);
// myCart.deleteItem(testItems[0]);

// DOM PROCESSING
myCart.printCart(myCart.cart);
myCart.printStore(store);
