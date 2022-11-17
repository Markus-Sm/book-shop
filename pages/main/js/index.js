fetch('../../data/books.json') //path to the file with json data
    .then(response => {
    return response.json();
    })
    .then(data => {
        console.log(data);
    });

const body = document.querySelector('body');

const documentFragment = document.createDocumentFragment();
body.append(documentFragment);

const header = document.createElement('header');
body.append(header);

const nav_container = document.createElement('div');
nav_container.classList.add('nav', 'container');
header.append(nav_container);

const h1 = document.createElement('h1');
nav_container.append(h1);

const logo = document.createElement('a');
logo.classList.add('logo');
logo.setAttribute('href', '#');
logo.textContent= 'Book shop - Art of coding 💎';
h1.append(logo);

const my_bag = document.createElement('div');
my_bag.classList.add('my_bag');
nav_container.append(my_bag);

const my_bag_text = document.createElement('p');
my_bag_text.classList.add('my_bag-text');
my_bag_text.textContent = 'My Bag';
my_bag.append(my_bag_text);

const img__bag = document.createElement('img');
img__bag.setAttribute('src', '../../assets/icons/bag.png');
img__bag.setAttribute('id', 'cart-icon');
img__bag.setAttribute('alt', 'icon of bag');
my_bag.append(img__bag);


const cart_order = document.createElement('div');
cart_order.classList.add('cart');
header.append(cart_order);

const cart_title = document.createElement('h2');
cart_title.classList.add('cart-title');
cart_title.textContent = 'Order books 🛒';
cart_order.append(cart_title);

const cart_content = document.createElement('div');
cart_content.classList.add('cart-content');
cart_order.append(cart_content);

const total = document.createElement('div');
total.classList.add('total');
cart_order.append(total);

const total_title = document.createElement('div');
total_title.classList.add('total-title');
total_title.textContent = 'Total';
total.append(total_title);

const total_price = document.createElement('div');
total_price.classList.add('total-price');
total_price.textContent = '0$';
total.append(total_price);

const a = document.createElement('a');
a.setAttribute('href', '../../pages/form/index.html');
cart_order.append(a);

const button_confirm = document.createElement('button');
button_confirm.classList.add('btn-buy');
button_confirm.setAttribute('type', 'button');
button_confirm.textContent = 'Confirm order';
a.append(button_confirm);

const close_cart = document.createElement('img');
close_cart.setAttribute('src', '../../assets/icons/x.png');
close_cart.setAttribute('id', 'close-cart');
cart_order.append(close_cart);

const main = document.createElement('main');
body.append(main);

const section_shop = document.createElement('section');
section_shop.classList.add('shop', 'container');
main.append(section_shop);

const section_title = document.createElement('h2');
section_title.classList.add('section-title');
section_title.textContent = 'Book Catalog 📚';
section_shop.append(section_title);

const shop_content = document.createElement('div');
shop_content.classList.add('shop-content');
shop_content.setAttribute('id', 'catalog');
section_shop.append(shop_content);

const catalog = document.getElementById('catalog');

const markup = books.reduce((acc, value) => {
	return `
    <div class="product-box" id="product-box-id-${value.id}">
        <img src="${value.img}" alt="img of book" class="product-img">
        <h2 class="product-title">${value.title}</h2>
        <p class="product-author">${value.author}</p>
        <span class="price">${value.price}$</span>
        <img src="../../assets/icons/shopping-bag.png" class="product__img add-cart" alt="icon of bag">
        <button class="show-more">show more</button>
        <div class="description hide">
            <p class="info-show-more">${value.description}</p>
            <button class="btn-close-info"><img src="../../assets/icons/x.png"></button>
        </div>
    </div>
    `.concat(acc);
}, '');

catalog.innerHTML = markup;

const footer = document.createElement('footer');
body.append(footer);

const footer_div = document.createElement('div');
footer_div.classList.add('footer');
footer.append(footer_div);

const footer_text = document.createElement('p');
footer_text.classList.add('footer__text');
footer_text.textContent = 'Book shop - Art of coding 💎 © 2022';
footer_div.append(footer_text);



  


