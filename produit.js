if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let addToBasketButton = document.getElementsByClassName('shop-item-button');
    for(let i = 0; i < addToBasketButton.length; i++) {
        let button = addToBasketButton[i]
        button.addEventListener('click', addToBasketClicked)
    }
}

function addToBasketClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title, price, imageSrc)
    
    /*function storeData() {
        sessionStorage.clear();
        sessionStorage.setItem('key_1', 'object_1');
        window.location.href = 'panier.html';
    }
    if(sessionStorage[key_1]) {
        function addItemToBasket(title, price, imageSrc) {
            let basketRow = document.createElement('div')
            let basketItems = document.getElementsByClassName('basket-items')[0]
            let basketRowContent = `
                <div class="basket-item basket-column">
                    <img class="basket-item-image image-container" src="${imageSrc}" alt="teddy_2">
                </div>
                <div class="basket-column">
                    <h3 class="shop-item-title">${title}</h3>
                    <h4 class="shop-item-price">${price}</h4>
                    <button class="btn-danger" type="button">supprimer</button>
                </div>
                <div class="basket-quantity">
                    <input class="basket-quantity-input" type="number" value="1"> 
                </div>`
            basketRow.innerHTML = basketRowContent
            basketItems.append(basketRow)
        }
        let object_1 = document.createElement('div');
        object_1.classname = 'object';
        object_1.id = sessionStorage.getItem('key_1');
        document.getElementById('preview').apendChild(object_1);
    }*/
};