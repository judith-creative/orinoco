//controls if DOM content is loaded before acting upon the DOM
document.addEventListener("DOMContentLoaded", async () => {
    try {
        //gets orderId to provide value to createConfirmMessage function
        const orderId = localStorage.getItem('order')
        createConfirmMessage(orderId)
    } catch (err) {
        console.log(err)
    }
})