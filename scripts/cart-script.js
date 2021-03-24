render();
calculateTotalPrice();

function render(){
   
    let myArrayFromLS = JSON.parse(localStorage.getItem("productArrayInLS"));
    if (myArrayFromLS == null) {
        myArrayFromLS = [];
      }

    console.log(myArrayFromLS);
    
    myArrayFromLS.forEach(element => {

        
    document.getElementById("table-body").innerHTML += `<tr class="table-active">
    <th scope="row">${element.title}</th>
    <td>${element.price} €</td>
    <td><button type="button" id="change-quantity-btn" class="btn btn-primary" onclick="increaseQuantity(${element.id})">+</button>
    ${element.quantity}
    <button type="button" id="change-quantity-btn" class="btn btn-primary" onclick="decreaseQuantity(${element.id})">-</button></td>
    <td><button type="button" class="btn btn-danger" onclick="removeFromLS(${element.id})">Remove</button></td>
  </tr>`;
    });
  
  }

  function increaseQuantity(id){
    window.location.reload();
  
    const lsArray = JSON.parse(localStorage.getItem("productArrayInLS"));
    const product = lsArray.find(element => element.id == id);
    product.quantity += 1;

  localStorage.setItem("productArrayInLS" , JSON.stringify(lsArray));
  }


  function decreaseQuantity(id){
    window.location.reload();
    console.log(id);
    const lsArray = JSON.parse(localStorage.getItem("productArrayInLS"));
    const product = lsArray.find(element => element.id == id);
    if(product.quantity !== 0){
      product.quantity += -1;
    } 

  localStorage.setItem("productArrayInLS" , JSON.stringify(lsArray));
  }


  function removeFromLS(id){
    window.location.reload();
    let productsFromLs = JSON.parse(localStorage.getItem("productArrayInLS"));
  
    productsFromLs = productsFromLs.filter(item => item.id !== id);
    
    localStorage.setItem("productArrayInLS" , JSON.stringify(productsFromLs));
  }


  function calculateTotalPrice(){
    
   
    let productsFromLs = JSON.parse(localStorage.getItem("productArrayInLS"));
    let sum = 0;

    productsFromLs.forEach(element => {
      sum += element.price;
    })
    console.log(sum);

    document.getElementById("total-price").innerHTML += sum + " €";

  }


  function emptyCart(){
    const emptyArray = [];
    localStorage.setItem("productArrayInLS" , JSON.stringify(emptyArray));

  }





