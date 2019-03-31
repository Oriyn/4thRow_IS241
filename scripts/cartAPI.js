function cartAPI(itemNo){
    var extrasNo = "extras"+ itemNo
    var ifChecked = document.getElementsByName(extrasNo);
    var order = "";
    var qtybox = document.getElementsByName("quantity");
    var price;
    switch(itemNo){
        case 1:
        var qty = qtybox[0].value;
        price = 5.95 * qty;
        order = "Buffalo colliflower bites, Price: $"+ price.toFixed(2) +", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No ranch";
        }
        if(ifChecked[1].checked != true){
          order += ", No buffalo sauce";
        }
        if(ifChecked[2].checked != true){
          order += ", No extra buffalo sauce on the side";
        }
        order +=";";
        return order;
        break;
        
        case 2:
        var qty = qtybox[1].value;
        price = 6.95 * qty;
        order = "Kale Salad, Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No cranberries";
        }
        if(ifChecked[1].checked != true){
          order += ", No shredded carrots";
        }
        if(ifChecked[2].checked != true){
          order += ", No sunflower seeds";
        }
        if(ifChecked[3].checked != true){
          order += ", No maple mustard dressing";
        }
        order +=";";
        return order;
        break;

        case 3:
        var qty = qtybox[2].value;
        price = 3.95 * qty;
        order = "Tater Tots, Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No chipotle dipping sauce";
        }
        if(ifChecked[1].checked != true){
          order += ", No cajun seasoning";
        }
        order +=";";
        return order;
        break;
        
        case 4:
        var qty = qtybox[3].value;
        price = 6.49 * qty;
        order = "Mac N' Cheese, Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No walnut parmesean";
        }
        if(ifChecked[1].checked != true){
          order += ", No chili buffalo";
        }
        if(ifChecked[2].checked != true){
            order += ", No peso";
        }
        if(ifChecked[3].checked != true){
            order += ", No nacho mac";
        }
        order +=";";
        return order;
        break;

        case 5:
        var qty = qtybox[4].value;
        price = 5.95 * qty;
        order = "Lulu's Chili, Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No Butternut squash cheese";
        }
        if(ifChecked[1].checked != true){
          order += ", No sour cream";
        }
        if(ifChecked[2].checked != true){
            order += ", No green onion";
        }
        if(ifChecked[3].checked != true){
            order += ", No cilantro";
        }
        order +=";";
        return order;
        break;

        case 6:
        var qty = qtybox[5].value;
        price = 5.95 * qty;
        order = "Volcano Tots, Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No Butternut squash cheese";
        }
        if(ifChecked[1].checked != true){
          order += ", No sour cream";
        }
        if(ifChecked[2].checked != true){
            order += ", No green onion";
        }
        if(ifChecked[3].checked != true){
            order += ", No cilantro";
        }
        order +=";";
        return order;
        break;

        case 7:
        var qty = qtybox[6].value;
        price = 8.95 * qty;
        order = "Loaded Nachos, Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No Butternut squash cheese";
        }
        if(ifChecked[1].checked != true){
          order += ", No Jackfruit carnitas";
        }
        if(ifChecked[2].checked != true){
            order += ", No salsa";
        }
        if(ifChecked[3].checked != true){
            order += ", No sour cream";
        }
        if(ifChecked[4].checked != true){
          order += ", No green onion";
        }
        if(ifChecked[5].checked != true){
            order += ", No pickled jalapeno";
        }
        if(ifChecked[6].checked != true){
            order += ", No cilantro";
        }
        order +=";";
        return order;
        break;

        case 8:
        var qty = qtybox[7].value;
        price = 6.95 * qty;
        order = "Loaded Nacho Tots, Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No Butternut squash cheese";
        }
        if(ifChecked[1].checked != true){
          order += ", No Jackfruit carnitas";
        }
        if(ifChecked[2].checked != true){
            order += ", No salsa";
        }
        if(ifChecked[3].checked != true){
            order += ", No sour cream";
        }
        if(ifChecked[4].checked != true){
          order += ", No green onion";
        }
        if(ifChecked[5].checked != true){
            order += ", No pickled jalapeno";
        }
        if(ifChecked[6].checked != true){
            order += ", No cilantro";
        }
        order +=";";
        return order;
        break;

        case 9:
        var qty = qtybox[8].value;
        price = 6.95 * qty;
        order = "Kale & Brussells Sprouts Caesar Salad , Price: $"+ price.toFixed(2) + ", Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No chickpea crutons";
        }
        if(ifChecked[1].checked != true){
          order += ", No capers";
        }
        if(ifChecked[2].checked != true){
            order += ", No lemon";
        }
        if(ifChecked[3].checked != true){
            order += ", No walnut parmesan";
        }
        order +=";";
        return order;
        break;
  
        default: alert("fuck you");
}
};