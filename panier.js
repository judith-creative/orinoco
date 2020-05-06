if (document.readystate == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeBasketItemButtons = document.getElementsByClassName('btn-danger');
    console.log(removeBasketItemButtons);
    for (let i=0; i < removeBasketItemButtons.length; i++) {
        let button = removeBasketItemButtons[i];
        button.addEventListener('click', removeBasketItem);
    }

    let quantityInputs = document.getElementsByClassName('basket-quantity-input');
    for (let i=0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

function removeBasketItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
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
        let priceElement = basketRow.getElementsByClassName('basket-price')[0];
        let quantityElement = basketRow.getElementsByClassName('basket-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace(' €', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    //total = Math.round(total * 100) / 100;
    document.getElementsByClassName('basket-total-price')[0].innerText = `${total} €`;
}