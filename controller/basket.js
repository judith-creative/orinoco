document.addEventListener("DOMContentLoaded", async () => {
    try {
        const itemActuel = localStorage.getItem('itemActuel');
        const product = await getOneTeddy(itemActuel)
        //const getProduct = JSON.parse(localStorage.getItem('basket'));

        createBasketRow(product)
        addItemToBasket()

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