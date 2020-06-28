//for MVP we now concentrate on one type of product : Teddies

//executes promise to get just one Teddy based on its ID
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

//collects all actions that need to be executed upon click addToBasketButton
function addToBasketClicked(event) {
    //gets id from url && prepares for storing in localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('productId');
    let productObject = {
        productId: id
    };

    //writes logic to add product in localStorage
    const basketLine = localStorage.getItem('basket');
    if (basketLine) { //checks if there are any products in basket
        basket = JSON.parse(basketLine);
        let found = false
        for(let i = 0; !found && i < basket.length; i++) { //loops through basket
            if(id === basket[i].productId) { //if same id is found
                found = true
                basket[i].quantity++ //adds one quantity
            }
        }
        
        if(!found) { //if product is not yet in basket adds product with fixed quantity of 1
                productObject.quantity = 1
                basket.push(productObject);
        }
        localStorage.setItem('basket', JSON.stringify(basket));
    } else { //if no products in basket, creates basket and adds product
        basket = [];
        productObject.quantity = 1
        basket.push(productObject);
        localStorage.setItem('basket', JSON.stringify(basket));
    }
    
    //opens basket page when product is added
    location.href = "panier.html"
};