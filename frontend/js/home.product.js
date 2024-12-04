
import productCards from "../js/productCard.js" 

function loadProduct(){
    const url = 'http://localhost:5000/products';

    fetch(url)
    .then(res => res.json())
    .then(res => printData(res))
}
loadProduct();


function printData(products){

    const productDesign = document.getElementById('productSection');

    let htmlCode = ``;

    products.forEach(product =>{
        htmlCode += productCards(product);
    });

    productDesign.innerHTML = htmlCode;
}
