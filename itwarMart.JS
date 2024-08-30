let cartItems;
onLoad();

function onLoad() {
  let cartItemStr = localStorage.getItem('cartItems');
  cartItems = cartItemStr ? JSON.parse(cartItemStr) : [];
  displayItemOnHomePage();
  displaycartIcon();
}

function addToCart(itemId) {
  cartItems.push(itemId);
  localStorage.setItem('cartItems' , JSON.stringify(cartItems));
}

function displaycartIcon() {
  let cartItemCountElement = document.querySelector('.cart-item-count');
  if(cartItems.length > 0 )
    {
      cartItemCountElement.style.visibility = 'visible';
      cartItemCountElement.innerText = cartItems.length;
    } else {
      cartItemCountElement.style.visibility = 'hidden';
    }

}

function displayItemOnHomePage() {
  let itemnsContainerElemnt = document.querySelector('.items-container');
if (!itemnsContainerElemnt) {
  return;
}
  let innerHTML = '';
items.forEach(item => {
  innerHTML += `
  <div class="item-container">
  <img class="image-name" src="${item.image}" alt="">
  <div class="rating">
    ${item.rating.stars} ⭐ ${item.rating.counts}
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
    <span class="current-price">RS: ${item.current_price}</span>
    <span class="orignal-price">RS: ${item.original_price}</span>
    <span class="discount-price">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bucket" onclick="addToCart(${item.id})">Add to Bucket</button>
  </div>`;
})

itemnsContainerElemnt.innerHTML = innerHTML;
}
