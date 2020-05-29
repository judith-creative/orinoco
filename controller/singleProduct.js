document.addEventListener("DOMContentLoaded", async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('productId');

        localStorage.setItem('itemActuel', id);
        const itemActuel = localStorage.getItem('itemActuel');

        getOneTeddy(itemActuel)

        displaySingleProduct()
    } catch (err) {
        console.log(err)
    }
})