document.addEventListener("DOMContentLoaded", async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('productId');

        localStorage.setItem('itemActuel', id);
        const itemActuel = localStorage.getItem('itemActuel');

        const product = await getOneTeddy(itemActuel)
            
        displaySingleProduct(product);

        let addToBasketButton = document.querySelector('.shop-item-button');
        addToBasketButton.addEventListener('click', addToBasketClicked)
    } catch (err) {
        console.log(err)
    }
})