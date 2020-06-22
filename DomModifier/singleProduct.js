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

function displaySingleProduct(product) {    
    const itemCategory = document.querySelector(".item-category");
    
    itemCategory.innerHTML = `
        <h2 class="section-header">Ours en peluche</h2>
        <div class="shop-item">
            <img class="shop-item-image" src="${product.imageUrl}" alt="teddy_1" />
            <div class="shop-item-details">
                <h3 class="shop-item-title">${product.name}</h3>
                <h4 class="shop-item-price">${(product.price / 100).toFixed(2)} €</h4>
                <p class="shop-item-id">Article id : <span id="productId">${product._id}<span></p>
                <p class="shop-item-description">${product.description}</p>
                <label for="customizeProduct"></label>
                <select id="customizeProduct">
                    <!--Insert colors-->
                </select>
                <button class="btn btn-primary shop-item-button" type="button">Ajouter au panier</button>
                <p><a href="index.html">Continuer mes achats</a></p>
            </div>
        </div>
    `

    let colors = product.colors;
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const select = document.getElementById('customizeProduct');
        const option = document.createElement('option');
        option.setAttribute('value', color);
        option.innerText = color;
        select.appendChild(option);
    }
}