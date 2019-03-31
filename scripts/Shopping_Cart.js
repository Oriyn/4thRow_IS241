
function addToCart (itemNo){
localStorage.setItem("NumOfItems", 0);    
addItem();
var APIcall = cartAPI(itemNo);
var itemsInCart = [];
itemsInCart[localStorage.getItem("NumOfItems")] = APIcall;
localStorage.setItem("CartItems", JSON.stringify(itemsInCart));
var storedNames = JSON.parse(localStorage.getItem("CartItems"));
var cartCount = storedNames.length;

alert(cartCount);

alert(APIcall);  
};

function addItem(){
    var itemCount = parseInt(document.getElementById("cartNum").innerHTML);
    itemCount += 1;
    document.getElementById("cartNum").innerHTML = itemCount;
    alert(itemCount);
};




function listCookies(wholeOrder) {
    document.cookie = 'Shopping cart = ' + wholeOrder;
    var theCookies = document.cookie.split(';');
    alert(theCookies);
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    alert("hit listcookies");
    alert(wholeOrder)
    alert(aString);
};