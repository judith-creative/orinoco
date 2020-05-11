//'http://localhost:3000/api/furniture'
//'http://localhost:3000/api/cameras'
// getting the products
class Products {
    async getProducts(){
        try {
            let result = await fetch('http://localhost:3000/api/teddies');
            let data = await result.json();
            let products = data;
            return products
        } catch {
            console.log(error);
        }
    }
}

//local storage
class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
    //variables
    const cartBtn = document.querySelector(".basket-icon");
    const cartItems = document.querySelector(".number-of-basket-items");
    const productsDOM = document.querySelector(".products-center");

    //display products
    class UI {
        displayProducts(products) {
            let result = "";
            products.forEach(product => {
                const price = (product.price / 100).toFixed(2);
                result += `
                <article class="product">
                    <div class="img-container">
                        <img class="product-image" src=${product.imageUrl} alt="teddy_1" />
                        <button class="bag-btn" data-id=${product._id}>
                            <i class="far fa-eye"></i>
                            voir produit
                        </button>
                    </div>
                    <h3 class="shop-item-title">${product.name}</h3>
                    <h4 class="shop-item-price">${price} €</h4>
                </article>
                `;
            });
            productsDOM.innerHTML = result;
        }
    }

    const ui = new UI();
    const products = new Products();
    //get all products
    products.getProducts().then(products => ui.displayProducts(products));
})