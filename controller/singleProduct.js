document.addEventListener("DOMContentLoaded", async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('productId');

        localStorage.setItem('itemActuel', id);
        const itemActuel = localStorage.getItem('itemActuel');

        getOneTeddy(itemActuel)

        displaySingleProduct();

        let addToBasketButton = document.getElementsByClassName('shop-item-button');
        for(let i = 0; i < addToBasketButton.length; i++) {
        let button = addToBasketButton[i]
        button.addEventListener('click', addToBasketClicked)
        }
    } catch (err) {
        console.log(err)
    }
})