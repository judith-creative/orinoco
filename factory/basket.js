/*
let addToBasketButton = document.getElementsByClassName('shop-item-button');
        for(let i = 0; i < addToBasketButton.length; i++) {
        let button = addToBasketButton[i]
        button.addEventListener('click', addToBasketClicked)
        }
*/
function getBasket() {
  return window.localStorage.getItem('basket')
}

async function addItemToBasket(productId, quantity) {
  const basket = getBasket()

  const hasSameId = (product) => product._id === productId
  const productIndex = basket.findIndex(hasSameId)

  if (!productIndex) {
    const updatedBasket = [ ...basket, { 
      productId,
      quantity
     } ]
    return window.localStorage.setItem('basket', updatedBasket)
  } else {
    const updatedBasket = [ ...basket ]
    updatedBasket[productIndex].quantity = updatedBasket[productIndex].quantity + 1
    return window.localStorage.setItem('basket', updatedBasket)
  }
}

[
  {
    productId: '4zedqidoq542332ZDSdsfe',
    quantity: 1
  }, {
    productId: '6edsqqidoq542332ZDSdsfe',
    quantity: 3
  },
]