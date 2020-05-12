const ApiServer = 'http://localhost:3000/api'

function getAllTeddies () {
    try {
        const result = await fetch(`${ApiServer}/teddies`);
        const products = await result.json();
        return products
    } catch {
        console.log(error);
    }
}

function getAllCameras () {
    try {
        const result = await fetch(`${ApiServer}/cameras`);
        const products = await result.json();
        return products
    } catch {
        console.log(error);
    }
}

function getAllFurniture () {
    try {
        const result = await fetch(`${ApiServer}/furniture`);
        const products = await result.json();
        return products
    } catch {
        console.log(error);
    }
}

// git commit -m "Add getAllTeddies and getAllCameras function"