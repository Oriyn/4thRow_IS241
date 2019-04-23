function deleteItem(itemNo){
    alert("clicked item number " + itemNo );
    var storedItems = JSON.parse(localStorage.getItem("CartItems"));
    storedItems.splice(itemNo, 1);
    console.log(storedItems);
    localStorage.setItem("CartItems", JSON.stringify(storedItems));
    displayItems();
    var numOfItems = localStorage.getItem("NumOfItems");  
    numOfItems --;
    localStorage.setItem("NumOfItems", numOfItems);
    document.getElementById("cartNum").innerHTML = localStorage.getItem("NumOfItems");
}