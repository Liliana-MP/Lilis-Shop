
const url ="https://webacademy.se/fakestore/";
const objectArray = [];
let productArray = JSON.parse(localStorage.getItem("productArrayInLS"));
if (productArray == null) {
  productArray = [];
}


fetch(url).then(
  function(response){
    
    if (response.status !== 200){
      console.log("Something went wrong! Status code: " + response.status);
      return;
    }
    
    
    response.json().then(function(data) { 
      data.forEach(element => {
        
       document.getElementById("row").innerHTML += ` <div class="col-lg-4 col-md-6 col-sm-12">
       <div class="card border-primary mb-3" style="max-width: 20rem">
         <div class="card-header" >${element.category}</div>
         <div class="card-body">
           <h4 class="card-title">${element.title}</h4>
           <p class="card-text">${element.description}</p>
           <p class="price">${element.price} €</p>
           <img
             class="product-img"
             src=${element.image}
             alt="shoe"
           />

           <button type="button" class="btn btn-primary" onclick="buttonClick(${element.id})">Add to cart</button>
         </div>
       
     </div>`
     objectArray.push(element);
    
  });


})
totalQuantity();
}
).catch(error => {console.error(error)});


function buttonClick(id) {
  const foundObject = objectArray.find(element => element.id === id)
  addToCart(foundObject);
}
    
    
function addToCart(object){

  const product = productArray.find(element => element.id == object.id);

  if(product == undefined){
    const temp = {
      "id": object.id,
      "title": object.title,
      "price": object.price,
      "quantity": 1
    }
    productArray.push(temp);
  }
   else {
     product.quantity += 1;
   }
 
  localStorage.setItem("productArrayInLS" , JSON.stringify(productArray));
  

  
  let totalProducts = document.getElementById("total-products-number").innerHTML;
  totalProducts = parseInt(totalProducts) + 1;
  document.getElementById("total-products-number").innerHTML = totalProducts;

}


function totalQuantity(){
 
  let productsFromLs = JSON.parse(localStorage.getItem("productArrayInLS"));
  let sum = 0;

  if (productsFromLs == null) {
    productsFromLs = [];
  }

  productsFromLs.forEach(element => {
   
    sum += element.quantity;
  })
  

  document.getElementById("total-products-number").innerHTML += sum;
}



   