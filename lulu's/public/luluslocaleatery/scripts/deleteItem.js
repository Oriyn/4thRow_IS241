function deleteItem(itemNo){
    reduceTotal(itemNo);
    var storedItems = JSON.parse(localStorage.getItem("CartItems"));
    storedItems.splice(itemNo, 1);
    console.log(storedItems);
    localStorage.setItem("CartItems", JSON.stringify(storedItems));
    displayItems();
    var numOfItems = localStorage.getItem("NumOfItems");  
    numOfItems --;
    localStorage.setItem("NumOfItems", numOfItems);
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems");
};

function reduceTotal(itemNo){
    const storedItems = JSON.parse(localStorage.getItem("CartItems"));   
    var item = storedItems[itemNo];
    const splitItem = item.split("$");
    const parsedItem = parseFloat(splitItem[1]);
    var newtotal = parseFloat(localStorage.getItem("totalPrice") - parsedItem);
    localStorage.setItem("totalPrice", newtotal.toFixed(2)); 
    if(newtotal == 0){
        clearCart();
    }
    console.log(newtotal);
}