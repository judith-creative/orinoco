function displaySingleProduct() {    
    const itemCategory = document.querySelector(".item-category")

    itemCategory.innerHTML = `
        <h2 class="section-header">Ours en peluche</h2>
        <div class="shop-item">
            <img class="shop-item-image" src="./JWDP5/images/teddy_1.jpg" alt="teddy_1" />
            <div class="shop-item-details">
                <h3 class="shop-item-title">Arnold</h3>
                <h4 class="shop-item-price">33.00</h4>
                <p class="shop-item-id">Article id : id</p>
                <p class="shop-item-description">beschrijving</p>
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