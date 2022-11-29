
let myBag = document.querySelector('.my_bag');
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// open Cart
myBag.onclick = () => {
    cart.classList.add('active');
}
// Close Cart
closeCart.onclick = () => {
    cart.classList.remove('active');
}

// Cart Working 3s 
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready()
}

function ready(){
    /* Remove Items From Cart */ 
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons);

    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    // quantity Changes
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for(let i = 0; i< quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // add to cart
    let addCart = document.getElementsByClassName('add-cart')
    for(let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener('click', addCartClicked)
    }
}

// Remove Items from Cart
function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove()
    updatetotal();
}

// Quantity Changes 
function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

//Add to cart
function addCartClicked(event){
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    let author = shopProducts.getElementsByClassName('product-author')[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, author, price, productImg);
    updatetotal();
}
// add product to cart
function addProductToCart(title, author, price, productImg){
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    let cartItems = document.getElementsByClassName('cart-content')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for(let i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert('You have already add this item to cart')
            return;
        }        
    }
    let cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <p class="cart-product-author">${author}</p>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
                    
    <img src="../../assets/icons/trash.png" alt="icon of trash" class="cart-remove">
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}



// Update Total
function updatetotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0]
    let cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
    for(var i = 0; i< cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cart-price')[0];
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerHTML = '$' + total;
    
}

/* Show info  */

const btnShow = document.querySelectorAll('.show-more');
const btn_close = document.querySelectorAll('.btn-close-info');
const description = document.querySelectorAll('.description');
const hide = document.querySelector('.hide');

const showInfo = function(e){
    e.target.nextElementSibling.classList.remove('hide');
}

const closeInfo = function(){
    for(let i = 0; i<description.length; i++)
    description[i].classList.add('hide');
}

for(let i = 0; i < btnShow.length; i++){
    btn_close[i].addEventListener('click', closeInfo)
}

btnShow.forEach(btn => {
    btn.addEventListener('click', showInfo)
});


/* DRAG AND DROP */



const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', () => {
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})
