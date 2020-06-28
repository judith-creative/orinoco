const ApiServer = 'http://localhost:3000/api'

async function getOneTeddy (id) {
    try {
        const result = await fetch(`${ApiServer}/teddies/${id}`);
        const product = await result.json();
        return product
    } catch {
        console.log(error);
    }
}

async function postBasketOrder(contact, products) {
    try {
        const result = await fetch('http://localhost:3000/api/teddies/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact: contact,
                products: products
            })
        })
        const order = await result.json();
        await localStorage.setItem('order', order.orderId)
        const confirm = await localStorage.getItem('order')
        
        if(confirm) {
            location.href = "validation.html"
        }
    } catch {
        console.log(error);
    }
}

function createBasketOrder(event) {
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
    basket.forEach(item => {
            products.push(item.productId)
    })

    postBasketOrder(contact, products)

    const basketItems = document.getElementsByClassName('basket-items')[0]
    while(basketItems.hasChildNodes()) {
        basketItems.removeChild(basketItems.firstChild)
    }
    updateBasketTotal()
    localStorage.removeItem('basket')
}