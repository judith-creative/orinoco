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

function getBasket() {
  if(basket!=null) {
    window.localStorage.getItem('basket')
	} else {
	    window.localStorage.setItem('basket')
	  }
}

async function addItemToBasket(productId, quantity) {
  const basket = getBasket()

  const hasSameId = (product) => product._id === productId
  const productIndex = basket.findIndex(hasSameId(product))

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