render();
calculateTotalPrice();

function render(){
   
    let myArrayFromLS = JSON.parse(localStorage.getItem("productArrayInLS"));
    if (myArrayFromLS == null) {
        myArrayFromLS = [];
      }
    
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
  

    document.getElementById("total-price").innerHTML += sum + " €";

  }


  function checkOutCart(){
    
    if (validateNameBox() && validateNumberBox() && validateEmailBox() && validateAddressBox() && validateZipCodeBox() && validateCityBox()){
    const emptyArray = [];
    localStorage.setItem("productArrayInLS" , JSON.stringify(emptyArray));
    return true;
    }
    return false;

  }


  function validateNameBox(){
    let inputName = document.getElementById("nameTextBox").value;
    const regExp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    
    if(inputName.length < 2 || !isNaN(inputName)){
      alert("Please provide your name!");
      return false;
    } else if (/\d/.test(inputName) || regExp.test(inputName)){ 
      alert("Name cannot contain numbers or special characters!");
      return false;
    } 
  
    return true;
  }

  function validateNumberBox(){
    let inputNumber = document.getElementById("numberTextBox").value;
    const regExp = /[a-zA-Z `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
    if(inputNumber.length < 10  ){
      alert("Must be 10 numbers!");
      return false;
    } else if(regExp.test(inputNumber)){
      alert("Number cannot contain letters or special characters!");
      return false;
    }

    return true;
  }

  
  function validateEmailBox(){
    let inputEmail = document.getElementById("emailBox").value;

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if(inputEmail.match(pattern)){
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return (false);
    }

   
  
  }

  function validateAddressBox(){

    let inputNumber = document.getElementById("addressBox").value;
    const regExp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
    if(inputNumber.length < 2  ){
      alert("Please provide address");
      return false;
    } else if(regExp.test(inputNumber)){
      alert("Cannot contain special characters!");
      return false;
    }

    return true;

  }

  function validateZipCodeBox(){

    let inputNumber = document.getElementById("zipcodeBox").value;
    const regExp = /[a-zA-Z `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
    if(inputNumber.length < 5 ){
      alert("Please provide your zip code");
      return false;
    } else if(regExp.test(inputNumber)){
      alert("Cannot contain letters or special characters!");
      return false;
    }

    return true;

  }

  function validateCityBox(){

    let inputName = document.getElementById("cityBox").value;
    const regExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    
    if(inputName.length < 2 || !isNaN(inputName)){
      alert("Please provide your city!");
      return false;
    } else if (/\d/.test(inputName) || regExp.test(inputName)){ 
      alert("City cannot contain numbers or special characters!");
      return false;
    } 
  
    return true;
  
  }


  
 




  
