document.addEventListener("DOMContentLoaded", async () => {
    try {
        const itemActuel = localStorage.getItem('itemActuel');
        const product = await getOneTeddy(itemActuel)
        const test = JSON.parse(localStorage.getItem('basket'));
        const color = test.color;

        createBasketRow(product, color)
        
        addItemToBasket('5beaaa8f1c9d440000a57d95', 1)

        let removeBasketItemButtons = document.getElementsByClassName('btn-danger');
        for (let i=0; i < removeBasketItemButtons.length; i++) {
            let button = removeBasketItemButtons[i];
            button.addEventListener('click', removeBasketItem);
        }

        let quantityInputs = document.getElementsByClassName('basket-quantity-input');
        for (let i=0; i < quantityInputs.length; i++) {
            let input = quantityInputs[i];
            input.addEventListener('change', quantityChanged);
        }

        document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    } catch (err) {
        console.log(err)
    }
})