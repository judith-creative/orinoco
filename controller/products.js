document.addEventListener("DOMContentLoaded", async () => {
    try {
        const [ teddiesList, furnitureList, camerasList ] = await Promise.all([
            getAllTeddies(),
            getAllFurniture(),
            getAllCameras()
        ])

        const productList = [ ...teddiesList, ...furnitureList, ...camerasList ]

        displayProducts(teddiesList)
        displayProducts(furnitureList)
        displayProducts(camerasList)

        showProductNumber(productList)

        displaySingleProduct();
    } catch (err) {
        console.log(err)
    }
})