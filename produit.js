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
    //window.open("panier.html");
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title, price, imageSrc)
};