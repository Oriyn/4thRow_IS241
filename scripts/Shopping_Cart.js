window.onload = function (){
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems") ;
};


function addToCart (itemNo){   
 if (document.getElementById("cartNum").innerHTML === "0"){
    var itemsInCart = [];
    localStorage.setItem("NumOfItems", 0);
    alert("hit");
 }
 else{
     var itemsInCart = JSON.parse(localStorage.getItem("CartItems"));
 }
var numOfItems = localStorage.getItem("NumOfItems");
alert(numOfItems);   
var APIcall = cartAPI(itemNo);
itemsInCart[numOfItems] = APIcall;
localStorage.setItem("CartItems", JSON.stringify(itemsInCart));
numOfItems ++;
localStorage.setItem("NumOfItems", numOfItems);
alert(APIcall);  
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
};