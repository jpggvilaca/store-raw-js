export default class DomController {
  printCart(cart) {
		let htmlTable = '';
		htmlTable +=
				`<thead>
	      <tr>
	        <th>Name</th>
	        <th>Color</th>
	        <th>Price</th>
	      </tr>
	    </thead>`;

		for (let item of cart) {
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

	printStore(store) {
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
	  			<td><button class="button">Add</button></td>
	  		</tr>`;
		}

		htmlTable += `</tbody>`;

		const storeTable = document.getElementById('store');
		storeTable.innerHTML = htmlTable;

    // Add an event listener to every button
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (e) => {
        this.handleClick(e, i)
      });
    }
  }
}
