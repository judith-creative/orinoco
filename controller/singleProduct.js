//controls if DOM content is loaded before acting upon the DOM
document.addEventListener("DOMContentLoaded", async () => {
    try {
        //gets id in url to turn argument for getOneTeddy into a value      
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('productId');

        //gets details for one teddy and provides value for displaySingleProduct function
        const product = await getOneTeddy(id)
        
        displaySingleProduct(product);

        //finds button && adds eventListener to perform number of actions upon click
        let addToBasketButton = document.querySelector('.shop-item-button');
        addToBasketButton.addEventListener('click', addToBasketClicked)
        
        //gets the basket value in localStorage to turn basket argument in function below into a value
        basket = JSON.parse(localStorage.getItem('basket'))
        setBasketValues(basket)
    } catch (err) {
        console.log(err)
    }
})