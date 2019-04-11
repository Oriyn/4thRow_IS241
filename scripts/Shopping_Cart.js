window.onload = function (){
    if(localStorage.getItem("NumOfItems") === null){
        document.getElementById("cartNum").innerHTML = "0";
    }
    else{
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems");
    }
};


function addToCart (itemNo){   
 if (document.getElementById("cartNum").innerHTML === "0"){
    var itemsInCart = [];
    localStorage.setItem("NumOfItems", 0);
 }
 else{
     var itemsInCart = JSON.parse(localStorage.getItem("CartItems"));
 }
var numOfItems = localStorage.getItem("NumOfItems");  
var APIcall = cartAPI(itemNo);
itemsInCart[numOfItems] = APIcall;
localStorage.setItem("CartItems", JSON.stringify(itemsInCart));
numOfItems ++;
localStorage.setItem("NumOfItems", numOfItems);
addItem();
var storedNames = JSON.parse(localStorage.getItem("CartItems"));
console.log(storedNames);
};

function addItem(){
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems") ;
};

function clearCart(){
  localStorage.clear();
  document.getElementById("cartNum").innerHTML = "0";
  alert("cart cleared");
  window.location.reload();
};