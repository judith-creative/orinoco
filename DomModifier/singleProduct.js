function displaySingleProduct(product) {    
    const itemCategory = document.querySelector(".item-category");
    
    itemCategory.innerHTML = `
        <h2 class="section-header">Ours en peluche</h2>
        <div class="shop-item">
            <img class="shop-item-image" src="${product.imageUrl}" alt="teddy_1" />
            <div class="shop-item-details">
                <h3 class="shop-item-title">${product.name}</h3>
                <h4 class="shop-item-price">${(product.price / 100).toFixed(2)} €</h4>
                <p class="shop-item-id">Article id : ${product._id}</p>
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

function addToBasketClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

    localStorage.setItem("name", title)
    localStorage.setItem("price", price)
    localStorage.setItem("image", imageSrc)
    console.log(title, price, imageSrc)

    openBasketPage()
};

function openBasketPage() {
    let basketPage = window.open("panier.html");
}