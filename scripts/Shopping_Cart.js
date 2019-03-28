function addToCart (itemNo){
var wholeOrder = "";
var APIcall = cartAPI(itemNo);
alert(APIcall);  
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