function showProductNumber(productList) {
    const number = productList.length;
    const numberOfProductsTitle = document.querySelector('h2');
    numberOfProductsTitle.innerHTML = `<span>${number}<span> articles`;
}

function createSingleProduct (product) {
    const parentNode = document.querySelector(".products-center")
    const newArticle = document.createElement('article')
    newArticle.classList.add('product')


    newArticle.innerHTML = `
        <div class="img-container">
            <a href="./produit.html?productId=${product._id}">
                <img class="product-image" src=${product.imageUrl} alt="teddy_1" />
                <button class="bag-btn" data-id=${product._id}>
                    <i class="far fa-eye"></i>
                    voir produit
                </button>
            </a>
        </div>
        <h3 class="shop-item-title">${product.name}</h3>
        <h4 class="shop-item-price">${product.price} €</h4>
    `

    parentNode.appendChild(newArticle)
}

function displayProducts(products) {
    products.forEach(createSingleProduct);
}

function displaySingleProduct() {
    const productLink = document.querySelector('a[href^="./produit.html?productId"]');
    productLink.addEventListener('click', function(){
        const itemCategory = document.querySelector(".item-category")
    
        itemCategory.innerHTML = `
            <h2 class="section-header">Ours en peluche</h2>
            <div class="shop-item">
                <img class="shop-item-image" src="${product.imageUrl}" alt="teddy_1" />
                <div class="shop-item-details">
                    <h3 class="shop-item-title">${product.title}</h3>
                    <h4 class="shop-item-price">${product.price}</h4>
                    <p class="shop-item-id">Article id : ${product._id}</p>
                    <p class="shop-item-description">${product.description}</p>
                    <label for="customizeProduct"></label>
                    <select id="customizeProduct">
                        <option value="tan">brun clair</option>
                        <option value="chocolate">chocolat</option>
                        <option value="black">noir</option>
                        <option value="white">blanc</option>
                    </select>
                <button class="btn btn-primary shop-item-button" type="button">Ajouter au panier</button>
                <p><a href="index.html">Continuer mes achats</a></p>
                </div>
            </div>
        `
    })
};