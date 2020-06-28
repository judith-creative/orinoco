/*
In this file :
write promise for each type of product to get the list from server
&& for each type of product convert price to obtain floating point
*/

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