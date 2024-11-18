let dt = document.querySelector("#start");


const product = document.querySelector("#product");

const productDiv = document.querySelector("#product_div");

product.addEventListener("mouseover", function(){

productDiv.style.display = "block";

});

productDiv.addEventListener("mouseout", function(){

    productDiv.style.display = "none";
    
    });
    
productDiv.addEventListener("mouseover", function(){

    productDiv.style.display = "block";
    
    });


    const image1 = document.querySelector("#image1");
    const image2 = document.querySelector("#image2");
    const hoverText1 = document.querySelector("#hoverText1");
    const hoverText2 = document.querySelector("#hoverText2");

    hoverText1.addEventListener("mousemove", () => {
        image1.getAttribute('.product_image_div');
    });
    

   