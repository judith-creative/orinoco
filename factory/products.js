const ApiServer = 'http://localhost:3000/api'

async function getAllTeddies () {
    try {
        const result = await fetch(`${ApiServer}/teddies`);
        const products = await result.json();
        return products.map((product) => {
            return {
                ...product,
                price: (product.price / 100).toFixed(2)
            }
        })
    } catch {
        console.log(error);
    }
}

async function getAllCameras () {
    try {
        const result = await fetch(`${ApiServer}/cameras`);
        const products = await result.json();
        return products.map((product) => {
            return {
                ...product,
                price: (product.price / 100).toFixed(2)
            }
        })
    } catch {
        console.log(error);
    }
}

async function getAllFurniture () {
    try {
        const result = await fetch(`${ApiServer}/furniture`);
        const products = await result.json();
        return products.map((product) => {
            return {
                ...product,
                price: (product.price / 100).toFixed(2)
            }
        })
    } catch {
        console.log(error);
    }
}

async function getTeddyById (id) {
    try {
        const result = await fetch(`${ApiServer}/teddies/${id}`);
        const product = await result.json();
        localStorage.setItem("product", JSON.stringify(product))
        console.log(localStorage.getItem("product"))
        return product
    } catch {
        console.log(error);
    }
}

async function getCameraById (id) {
    try {
        const result = await fetch(`${ApiServer}/cameras/${id}`);
        const product = await result.json();
        return product
    } catch {
        console.log(error);
    }
}

async function getFurnitureById (id) {
    try {
        const result = await fetch(`${ApiServer}/furniture/${id}`);
        const product = await result.json();
        return product
    } catch {
        console.log(error);
    }
}