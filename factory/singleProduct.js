const ApiServer = 'http://localhost:3000/api'

async function getOneTeddy (id) {
    try {
        const result = await fetch(`${ApiServer}/teddies/${id}`);
        const product = await result.json();
        return product
        /*Response {
            type: "cors",
            url: "http://localhost:3000/api/teddies/undefined",
            redirected: false,
            status: 500,
            ok: false,
            statusText: "Internal Server Error",
            headers: Headers,
            body: ReadableStream,
            bodyUsed: false
        }*/
    } catch {
        console.log(error);
    }
}