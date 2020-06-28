//controls if DOM content is loaded before acting upon the DOM
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const [ teddiesList, furnitureList, camerasList ] = await Promise.all([
            getAllTeddies(),
            getAllFurniture(),
            getAllCameras()
        ])

        //uses list results for each product to turn list arguments in functions below into a value
        const productList = [ ...teddiesList, ...furnitureList, ...camerasList ]

        displayProducts(teddiesList)
        displayProducts(furnitureList)
        displayProducts(camerasList)

        showProductNumber(productList)

        //gets the basket value in localStorage to turn basket argument in function below into a value
        basket = JSON.parse(localStorage.getItem('basket'))
        setBasketValues(basket)
    } catch (err) {
        console.log(err)
    }
})