
//step5
//localstorage and website same lekha dekhanor jjonno
const displayLocalStorageCart =()=>{
    const cart = getCart()
    //cart er bitor jjoto property ase shob object gula ak sathe nibo
    for(const product in cart){
        displayProductName(product)
    }
}
//step1
const productName = () =>{
    
    const nameField = document.getElementById('product-name');
    const name =nameField.value;
    console.log(name)

    if(!name){
        return;
    }
   //console.log(name)

     nameField.value='';
     productPrice(name);
 }

const productPrice =text=>{
    

    const productPricing= document.getElementById('product-price');
    const inputPrice = productPricing.value;
    const inputPriceNumber  = parseInt(inputPrice);
    const PriceText= text +' '+inputPriceNumber+'TK';
    console.log(PriceText);
    //display in the ui
    displayProductName(PriceText);
    // //add to local storage
    addProductToCart(PriceText);
    productPricing.value = '';
   
}
//step 2
const displayProductName = name=>{
    const ul = document.getElementById('items');
    const li = document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}
//step 3
//check korbo cart ase  kina
const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart);
    }
    else{
        cartObj={};
    }
    //puro object take pathay dibo
    return cartObj;
}
//step4
//localstorage set
const addProductToCart = name =>{
    const cart =getCart();
    //quantiti cart er modde jodi thake
    if(cart[name]){
    cart[name]= cart[name]+1
    }
    else{//na thakle
        cart[name]=1;
    }
    console.log(cart)
    const cartStringify =JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}
//dom clean,storage clean
const placeOrder = () =>{
    document.getElementById('items').textContent = '';
    localStorage.removeItem('cart');
}
 displayLocalStorageCart();