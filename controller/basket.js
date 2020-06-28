//controls if DOM content is loaded before acting upon the DOM
document.addEventListener("DOMContentLoaded", async () => {
    try {
        /*
        loops through localStorage basket to :
        get id to provide value to getOneTeddy,
        which in turn provides value for createBasketRow
        && get quantity to provide value to createBasketRow
        */
        for(let i = 0; i < basket.length; i++) {
            let id = basket[i].productId
            let quantity = basket[i].quantity
            const product = await getOneTeddy(id)
            createBasketRow(product, quantity)
        }

        //gets all remove buttons to enable removeBasketItem function through click eventListener
        let removeBasketItemButtons = document.getElementsByClassName('btn-danger');
        for (let i=0; i < removeBasketItemButtons.length; i++) {
            let button = removeBasketItemButtons[i];
            button.addEventListener('click', removeBasketItem);
        }

        //gets all quantity input boxes to enable quantityChanged function through change eventListener
        let quantityInputs = document.getElementsByClassName('basket-quantity-input');
        for (let i=0; i < quantityInputs.length; i++) {
            let input = quantityInputs[i];
            input.addEventListener('change', quantityChanged);
        }

        //gets form to enable createBasketOrder function throught submit eventListener
        const form = document.querySelector('form')
        form.addEventListener('submit', createBasketOrder);

    } catch (err) {
        console.log(err)
    }
})