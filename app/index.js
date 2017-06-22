import './index.scss';

// 1) create an array of objects (called items) with items in it, this is going to be your static data
// 2) create an empty array called ‘cart’ and build functions to Add , edit, or remove items from it
// 3) use console.log(var) to check values in your loops

const items = [{
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
];


const controlCart = {
  cart: [],
  showItems: function () {
    console.log('My Cart', this.cart);
  },
  addItem: function (position) {
    this.cart.push({
      name: items[position].name,
      color: items[position].color,
      price: items[position].price
    });
    this.showItems();
  },
  editItem: function (position, newValue) {
    this.cart[position] = newValue;
    this.showItems();
  },
  removeItem: function (position) {
    this.cart.splice(position, 1);
    this.showItems();
  }
} 