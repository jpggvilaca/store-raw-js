import './index.scss';

// 1) create an array of objects (called items) with items in it, this is going to be your static data
// 2) create an empty array called ‘cart’ and build functions to Add , edit, or remove items from it
// 3) use console.log(var) to check values in your loops

const store = {
  items: [{
      name: 'Bike Helmet',
      color: 'Black',
      price: 25
    },
    {
      name: 'Pannier',
      color: 'Black',
      price: 50
    },
    {
      name: 'Odometer',
      color: 'Black',
      price: 20
    }
  ],
  createTable: function() {}
};

class CartController {
  constructor() {
    this.cart = [];
  }

  showItems = () => {
    console.log('My Cart', this.cart);
  }

  addItem = (position) => {
    this.cart.push({
      name: store.items[position].name,
      color: store.items[position].color,
      price: store.items[position].price
    });
    this.showItems();
  }

  editItem = (position, newValue) => {
    this.cart[position] = newValue;
    this.showItems();
  }
  deleteItem = (position) => {
    this.cart.splice(position, 1);
    this.showItems();
  }
}

const myCart = new CartController();