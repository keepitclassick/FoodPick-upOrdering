const cartStorageKey = 'CART';
function readCart() {
  return JSON.parse(window.localStorage.getItem(cartStorageKey) || '{}');
}

function saveCart(cart) {
  window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

// find the total of all items in cart
function updateTotal() {
  let total = 0
  for (let item of Object.keys(window.localStorage)) {
    if (JSON.parse(window.localStorage.getItem(item)).price) {
      total += JSON.parse(window.localStorage.getItem(item)).price * JSON.parse(window.localStorage.getItem(item)).quantity
    }
  }
  $('#total').text(total);
}

function showCart() {
  const cart = readCart();
  const cartItems = Object.values(cart).map(function (item) {
    return $(`
      <tr>
      <td data-th="Product">
        <div class="row">
          <div class="col-sm-10">
            <h4 class="product-name">${item.name}</h4>
            <p class="product-description">${item.name}</p>
          </div>
        </div>
      </td>
      <td class="product-price" data-th="Price">$${item.price}</td>
      <td data-th="Quantity">${item.quantity}</td>
      <td data-th="Subtotal">${item.price * item.quantity}</td>
      <td class="actions" data-th="">
        <button class="remove-item btn btn-danger btn-sm" data-item=${item.id}><i class="fa fa-trash-o"></i></button>
      </td>
    </tr>`);
  });
  return $("#shopping_cart").append(cartItems);
}
