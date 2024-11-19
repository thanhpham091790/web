import { menuArray } from "./data.js";
let cartArray = [];
let customerName;

document.addEventListener("click", function(e){
    // Click on Add item button
    if(e.target.dataset.addItem){
        addItemHandler(e.target.dataset.addItem);
    }

    // Click on Remove 
    if(e.target.dataset.removeItem){
        removeItemHandler(e.target.dataset.removeItem);
    }

    // Click on Complete order button
    if(e.target.id === "complete-order-btn"){
        completeOrderHandle();
    }

    // Click on overlay area
    if(e.target.id === "modal"){
        closeModalHandle();
    }

    // Click on Toggle button
    if(e.target.id === "toggle-theme"){
        toggleThemeHandler();
    }
});

document.querySelector("#checkout").addEventListener("submit", function(e){
    submitOrderHandler(e);
});

function toggleThemeHandler(){
    if(localStorage.getItem("theme") === "theme-dark"){
        setTheme("theme-light");
    }else{
        setTheme("theme-dark");
    }
}

function submitOrderHandler(e){
    e.preventDefault();
    const checkoutForm = document.querySelector("#checkout");
    const formData = new FormData(checkoutForm);
    customerName = formData.get("name");
    closeModalHandle();
    cartArray = [];
    render();
}

function closeModalHandle(){
    document.querySelector("#modal").style.display = "none";
}

function completeOrderHandle(){
    document.querySelector("#modal").style.display = "block";
}

function removeItemHandler(itemId){
    cartArray = cartArray.filter((item)=>{
        return Number(item.id) !== Number(itemId);
    });
    render();
}


function addItemHandler(itemId){
    const cartObj  = {...menuArray.filter((menuItem)=>{
        return Number(menuItem.id) === Number(itemId);
    })[0], qty:1};

    if(!cartArray.length){
        cartArray.push(cartObj);
    }else{
        const idArray = cartArray.map((cartItem)=>{
            return cartItem.id;
        });

        if(!idArray.includes(Number(itemId))){
            cartArray.push(cartObj);
        }else{
            cartArray.forEach((cartItem)=>{
                if(Number(cartItem.id) === Number(itemId)){
                    cartItem.qty += 1;
                }
            });
        }
    }
    customerName = '';
    render();
}

function getMessageHtml(customerName){
    const message = customerName ? `
            <div class="notification">Thanks, ${customerName}! Your order is on its way.</div>
        ` : "";
    return message;
}


function getCartHtml(cartArray){
    if(cartArray.length){

        const totalPrice = cartArray.reduce((total, currentItem)=>{
            return total + currentItem.price * currentItem.qty;
        },0);

        return `
            <h2 class="cart-title">Your order</h2>
            <ul class="cart-items">` 
        + 

        cartArray.map((item)=>{
            return `
                <li>
                    <span class="item-name">${item.qty} x ${item.name}</span>
                    <span class="item-remove" data-remove-item=${item.id}>remove</span>
                    <span class="item-price">$${item.price * item.qty}</span>
                </li>`;
        }).join("")

        +   `
            </ul>
            <div class="cart-total">
                <div class="total-price-text">Total price:</div>
                <div class="total-price">$${totalPrice}</div>
            </div>
            <button class="complete-order-btn" id="complete-order-btn" type="button">Complete order</button>`;
    }else{
        return ``;
    }
}


function getMenuHtml(menuArray){
    return menuArray.map((item)=>{
        return `
        <div class="item" id="${item.id}">
            <div class="image">
                <img src="${item.image}" alt="Pizza">
            </div>
            <div class="info">
                <div class="name">${item.name}</div>
                <div class="ingredients">${item.ingredients}</div>
                <div class="price">$${item.price}</div>
            </div>
            <button type="button" class="add-item" data-add-item="${item.id}">+</button>
        </div>`;
    }).join("");
}

function render(){
    document.querySelector("#menu").innerHTML = getMenuHtml(menuArray);
    document.querySelector("#cart").innerHTML = getCartHtml(cartArray);
    document.querySelector("#message").innerHTML = getMessageHtml(customerName);
}

function setTheme(themeName){
    localStorage.setItem("theme", themeName);
    document.documentElement.classList.remove(...document.documentElement.classList);
    document.documentElement.classList.add(themeName);
}

(function(){
    if(localStorage.getItem("theme") === "theme-dark"){
       setTheme("theme-dark");
    }else{
        setTheme("theme-light");
    }

    render();
})();