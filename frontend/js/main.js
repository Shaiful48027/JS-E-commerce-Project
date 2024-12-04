// // images slider start
// const images = ['../images/blog (1).jpeg', '../images/blog (2).jpeg', '../images/blog (3).jpeg'];
// let index = 0;
// // let time = 3000;
// function changImage(){
//     const slideImage = document.getElementById('slider-container');
//     const htmlCode = `<img src='${images[index]}'/>`;
//     slideImage.innerHTML = htmlCode;

//     if(index < images.length -1){
//         index ++;
//     }
//     else{
//         index = 0;
//     }
// }
// setInterval(changImage, 3000);
// changImage();

// // images slider end


function sliderImage(){
    const url =  'http://localhost:5000/slider';

    fetch(url)
    .then(res => res.json())
    .then(sliders =>{

        let index = 0;

        function changeImage(){
            const container = document.getElementById('slider-container');
            const htmlCode = `<img src='${sliders[index].img}'/>`;
            container.innerHTML = htmlCode;
        
            if(index < sliders.length -1 ){
                index ++;
            }
            else{
                index = 0;
            }
        }
        setInterval(changeImage, 3000);
    })
}
sliderImage();





