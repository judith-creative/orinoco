document.addEventListener("DOMContentLoaded", async () => {
    try {
        let itemName = localStorage.getItem("name");
        let itemPrice = localStorage.getItem("price");
        let itemImage = localStorage.getItem("image");
        addItemToBasket(itemName, itemPrice, itemImage)

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