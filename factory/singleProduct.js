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

function addToBasketClicked(event) {    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('productId');
    let productObject = {
        productId: id
    };

    const basketLine = localStorage.getItem('basket');
    if (basketLine) {
        basket = JSON.parse(basketLine);
        let found = false
        for(let i = 0; !found && i < basket.length; i++) {
            if(id === basket[i].productId) {
                found = true
                basket[i].quantity++
            }
        }
        
        if(!found) {
                productObject.quantity = 1
                basket.push(productObject);
        }
        console.log(basket)
        localStorage.setItem('basket', JSON.stringify(basket));
    } else {
        basket = [];
        productObject.quantity = 1
        basket.push(productObject);
        localStorage.setItem('basket', JSON.stringify(basket));
    }
    
    openBasketPage()
};

function openBasketPage() {
    let basketPage = location.href = "panier.html";
}