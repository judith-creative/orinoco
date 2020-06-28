const ApiServer = 'http://localhost:3000/api'

//executes promise to get just one Teddy based on its ID
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
        //posts form values and product ids to server
        const result = await fetch(`${ApiServer}/teddies/order`, {
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
        //stores server reply into localStorage
        await localStorage.setItem('order', order.orderId)

        //makes sure orderId is returned before opening confirm page
        const confirm = await localStorage.getItem('order')
        if(confirm) {
            location.href = "confirm.html"
        }
    } catch {
        console.log(error);
    }
}

//executes a number of actions detailed below upon click purchase button
function createBasketOrder(event) {
    event.preventDefault()
    //creates contact object expected by server
    let input = event.target
    let contact = {
        firstName: input.firstName.value,
        lastName: input.lastName.value,
        address: input.address.value,
        city: input.city.value,
        email: input.email.value
    }

    //creates product array expected by server
    let products = []
    let basket = JSON.parse(localStorage.getItem('basket'))
    basket.forEach(item => {
            products.push(item.productId)
    })

    //executes order post in the form of a promise
    postBasketOrder(contact, products)

    //removes every basket item
    const basketItems = document.getElementsByClassName('basket-items')[0]
    while(basketItems.hasChildNodes()) {
        basketItems.removeChild(basketItems.firstChild)
    }
    //calls updateBasketTotal to obtain zero
    updateBasketTotal()

    //removes localStorage to prevent from displaying this basket after purchase
    localStorage.removeItem('basket')
}