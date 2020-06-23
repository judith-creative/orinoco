document.addEventListener("DOMContentLoaded", async () => {
    try {
        for(let i = 0; i < basket.length; i++) {
            let id = basket[i].productId
            let quantity = basket[i].quantity
            const product = await getOneTeddy(id)
            createBasketRow(product, quantity)
        }

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

        const form = document.querySelector('form')
        form.addEventListener('submit', createBasketOrder);

    } catch (err) {
        console.log(err)
    }
})