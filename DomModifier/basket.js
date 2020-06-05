
function addItemToBasket(title, price, image) {
    let basketRow = document.createElement('div');
    basketRow.classList.add('basket-row')
    let basketItems = document.getElementsByClassName('basket-items')[0];
    console.log(basketItems)
    let basketItemNames = basketItems.getElementsByClassName('basket-item-title')
    for (let i = 0; i < basketItemNames.length; i++) {
        if(basketItemNames[i].innerText == title) {
            alert('this item is already added to the basket')
            return
        }
    }
    let basketRowContents = `
        <div class="basket-item basket-column">
            <img class="basket-item-image image-container" src="${image}" alt="teddy_1">
        </div>
        <div class="basket-column">
            <h3 class="shop-item-title">${title}</h3>
            <h4 class="shop-item-price">${price}</h4>
            <button class="btn-danger" type="button">supprimer</button>
        </div>
        <div class="basket-quantity">
            <input class="basket-quantity-input" type="number" value="1">
        </div>
    `
    basketRow.innerHTML = basketRowContents
    basketItems.append(basketRow);
}

function removeBasketItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateBasketTotal();
}

function quantityChanged(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateBasketTotal();
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

function purchaseClicked() {
    const purchasePage = window.open("validation.html");
    const basketItems = document.getElementsByClassName('basket-items')[0]
    while(basketItems.hasChildNodes()) {
        basketItems.removeChild(basketItems.firstChild)
    }
    updateBasketTotal()
}