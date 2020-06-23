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

        //FIND OUT HOW TO CLEAN UP CODE BELOW
        const form = document.querySelector('form')
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            let input = event.target
            let contact = {
                firstName: input.firstName.value,
                lastName: input.lastName.value,
                address: input.address.value,
                city: input.city.value,
                email: input.email.value
            }

            let products = []
            let basket = JSON.parse(localStorage.getItem('basket'))
            function productId() {
                basket.forEach(item => {
                    products.push(item.productId)
                })
            }
            productId()

            postBasketOrder(contact, products)

            const basketItems = document.getElementsByClassName('basket-items')[0]
            while(basketItems.hasChildNodes()) {
                basketItems.removeChild(basketItems.firstChild)
            }
            updateBasketTotal()
            localStorage.clear()
        });

    } catch (err) {
        console.log(err)
    }
})