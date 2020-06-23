let basket = []
basket = JSON.parse(localStorage.getItem('basket'))

function createBasketRow(product, quantity) {
    const basketRow = document.createElement('div');
    basketRow.classList.add('basket-row')
    let basketItems = document.getElementsByClassName('basket-items')[0];
        
    let basketRowContents = `
        <div class="basket-item basket-column">
            <img class="basket-item-image image-container" src="${product.imageUrl}" alt="teddy_1">
        </div>
        <div class="basket-column">
            <h3 class="shop-item-title">${product.name}</h3>
            <h4 class="shop-item-price">${(product.price / 100).toFixed(2)} €</h4>
            <p class="shop-item-id">${product._id}</p>
            <button class="btn-danger" type="button">supprimer</button>
        </div>
        <div class="basket-quantity">
            <input class="basket-quantity-input" type="number" value="${quantity}">
        </div>
    `
    basketRow.innerHTML = basketRowContents
    basketItems.append(basketRow);
    updateBasketTotal()
    localStorage.removeItem('itemActuel')
}

function removeBasketItem(event) {
    let buttonClicked = event.target;
    let id = buttonClicked.previousElementSibling.innerText;
    buttonClicked.parentElement.parentElement.remove();
    let itemToRemove = { productId: id }
    basketArrayItemRemove(itemToRemove)
    updateBasketTotal();
}

function basketArrayItemRemove(itemToRemove) {
    basket = JSON.parse(localStorage.getItem('basket'))
    let basketFilter = basket.filter(item => item.productId !== itemToRemove.productId)
    if(basketFilter.length !== 0) {
        localStorage.setItem('basket', JSON.stringify(basketFilter))        
    } else {
        localStorage.clear()
    }
}

function quantityChanged(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    let id = input.parentElement.previousElementSibling.children[2].innerText
    updateQuantityLocalStorageBasket(id)
    updateBasketTotal();
}

function updateQuantityLocalStorageBasket(id) {
    let input = event.target
    let found = false
    for(let i = 0; !found && i < basket.length; i++) {
        if(id === basket[i].productId){
            found = true
            basket[i].quantity = parseInt(input.value) //la méthode pour la transformation en type number n'est peut-être pas nécessaire car sera stringifié par la suite
        }
    }
    localStorage.setItem('basket', JSON.stringify(basket));
}

function updateBasketTotal() {
    let basketItemContainer = document.getElementsByClassName('basket-items')[0];
    let basketRows = basketItemContainer.getElementsByClassName('basket-row');
    let total = 0
    for (let i=0; i < basketRows.length; i++) {
        let basketRow = basketRows[i];
        let priceElement = basketRow.getElementsByClassName('shop-item-price')[0];
        let quantityElement = basketRow.getElementsByClassName('basket-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace(' €', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    //total = Math.round(total * 100) / 100;
    document.getElementsByClassName('basket-total-price')[0].innerText = `${total} €`;
}
/* WAIT TO CLEAN UP CODE IN CONTROLLER
function purchaseClicked() {
    //const purchasePage = location.href = "validation.html";
    const basketItems = document.getElementsByClassName('basket-items')[0]
    while(basketItems.hasChildNodes()) {
        basketItems.removeChild(basketItems.firstChild)
    }
    updateBasketTotal()
    localStorage.clear()
}
*/