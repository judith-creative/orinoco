document.addEventListener("DOMContentLoaded", async () => {
    try {
        const orderId = localStorage.getItem('order')
        createConfirmMessage(orderId)
    } catch (err) {
        console.log(err)
    }
})