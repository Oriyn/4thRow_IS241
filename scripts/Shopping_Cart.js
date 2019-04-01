window.onload = function (){
   localStorage.setItem("NumOfItems", 0); 
};


function addToCart (itemNo){
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