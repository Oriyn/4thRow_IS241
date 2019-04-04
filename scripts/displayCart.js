window.onload = function (){
    if(localStorage.getItem("NumOfItems") === null){
        document.getElementById("cartNum").innerHTML = "0";
        document.getElementById("DisplayCart").innerHTML = "You have no items in your cart!";
    }
    else{
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems");
    var items = JSON.parse(localStorage.getItem("CartItems"));
    console.log(items);
    var displayCartItems = "";
    for(i=0; i < localStorage.getItem("NumOfItems"); i++){
      displayCartItems += (i+1) + ". " + items[i] + "<br>";
    }
    console.log(displayCartItems);
    document.getElementById("DisplayCart").innerHTML = displayCartItems ;

    }
};