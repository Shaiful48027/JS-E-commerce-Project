import {sliceTitle} from './cfunction.js';

function productCards(product){
const {img, title, price} = product;
    
    const htmlCode = `
    <div class="productCard">
            <img src="${img}" alt="">
            <div class="productInfo">
                <h2>$${price}</h2>
                <p>${sliceTitle(title)}</p>
                <a href="#"><button>Full Details</button></a>
            </div>
        </div>
    `;
    return htmlCode;
}

export default productCards;