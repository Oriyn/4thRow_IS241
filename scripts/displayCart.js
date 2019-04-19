window.onload = function (){
    if(localStorage.getItem("NumOfItems") === null){
        document.getElementById("cartNum").innerHTML = "0";
        document.getElementById("DisplayCart").innerHTML = "You have no items in your cart!";
    }
    else{
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems");
    var items = JSON.parse(localStorage.getItem("CartItems"));
    console.log(items);
    const displayCartItems = items.reduce((acc,value, index) => acc += (index + 1) + ". " + value + "<br>", "")
    document.getElementById("DisplayCart").innerHTML = displayCartItems
    }
};