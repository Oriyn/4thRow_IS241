window.onload = function (){
   displayItems();
};

function displayItems(){
    if(localStorage.getItem("NumOfItems") === null){
        document.getElementById("cartNum").innerHTML = "0";
        document.getElementById("DisplayCart").innerHTML = "You have no items in your cart!";
        localStorage.setItem("totalPrice",  0.00);
        document.getElementById("totalPrice").innerHTML = "Total: $" + 0.00;
    }
    else{
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems");
    var total = localStorage.getItem("totalPrice");
    var items = JSON.parse(localStorage.getItem("CartItems"));
    console.log(items);
    const displayCartItems = items.reduce((acc,value, index) => acc += (index + 1) + ". " + value + ' <button onclick="deleteItem('+ index +')">Remove item</button><br><br>', "")
    document.getElementById("DisplayCart").innerHTML = displayCartItems;
    document.getElementById("totalPrice").innerHTML = "Total: $" + total;
    }
};