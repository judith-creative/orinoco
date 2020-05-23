document.addEventListener("DOMContentLoaded", async () => {
    try {
        const Teddy = getOneTeddy('5beaacd41c9d440000a57d97')
        // id is not defined
        displaySingleProduct(Teddy)
    } catch (err) {
        console.log(err)
    }
})