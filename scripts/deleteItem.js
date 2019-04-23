function deleteItem(itemNo){
    alert("clicked item number " + itemNo );
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
    if (localStorage.getItem("NumOfItems") === 0){
        clearCart();
    }
};

function reduceTotal(itemNo){
    const storedItems = JSON.parse(localStorage.getItem("CartItems"));   
    var item = storedItems[itemNo];
    const splitItem = item.split("$");
    const parsedItem = parseFloat(splitItem[1]);
    var newtotal = parseFloat(localStorage.getItem("totalPrice") - parsedItem);
    localStorage.setItem("totalPrice", newtotal.toFixed(2)); 
    console.log(newtotal);
}