window.onload = function (){
    if(localStorage.getItem("NumOfItems") === null){
        document.getElementById("cartNum").innerHTML = "0";
        document.getElementById("DisplayCart").innerHTML = "You have no items in your cart!";
    }
    else{
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems");
    document.getElementById("DisplayCart").innerHTML = JSON.parse(localStorage.getItem("CartItems"));;
    }
};