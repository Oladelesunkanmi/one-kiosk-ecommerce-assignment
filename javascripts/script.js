const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

let productHTML = '';

products.forEach((product) => {
  productHTML += `
 
     <div class="product">
                <img src=${product.image}>
                <h3>${product.name}</h3>
                
                <div class="rating-section">
                    <h3 class="price">$${product.priceCents / 100}</h3>
                    <div>
                        <img class="rating"
                          src="images/ratings/rating-${product.rating.stars * 10}.png"
                            style="height: 20px; width: 70px;">

                        <h3>${product.rating.stars}</h3>
                    </div>

                </div>

                <h3 class="original-price">$20.99</h3>

                
                <div>
                    <select name="button-option" id="select-btn">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <div class="add-to-cart">
                        <button data-product-id="${product.id}" class="cart-btn js-add-to-cart">Add to Cart</button>
                    </div>
                </div>
          </div>

 
 `;

});

document.querySelector('.js-wrapper').innerHTML = productHTML;





let cartQuantity = document.querySelector('.js-cart-quantity');
cartQuantity.innerHTML = '0';
document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener('click', ()=>{
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId){
        matchingItem = item;
      }
    });

    if(matchingItem) {
      matchingItem.quantity+=1;
    }
    else{
  cart.push({
      productId: productId,
      quantity:1
    });
    }

    cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity
    });



    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

console.log(cart)
  
  });
});
