const ApiServer = 'http://localhost:3000/api'

async function getOneTeddy (id) {
    try {
        const result = await fetch(`${ApiServer}/teddies/${id}`);
        const product = await result.json();
        return product
    } catch {
        console.log(error);
    }
}