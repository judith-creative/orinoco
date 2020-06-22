function showProductNumber(productList) {
    const number = productList.length;
    const numberOfProductsTitle = document.querySelector('h2');
    numberOfProductsTitle.innerHTML = `<span>${number}<span> articles`;
}

function setBasketValues(basket){
    const numberOfBasketItems = document.createElement('div')
    numberOfBasketItems.classList.add('number-of-basket-items')
    const basketIcon = document.getElementsByClassName('basket-icon')[0]
    let itemsTotal = 0;
    basket.map(item => {
        itemsTotal += item.quantity;
    })
    numberOfBasketItems.innerText = itemsTotal
    basketIcon.append(numberOfBasketItems)
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