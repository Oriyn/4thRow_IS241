var $ = function(obj){ return document.getElementById(obj);};



function addToCart (itemNo){
  var extrasNo = "extras"+ itemNo
  var ifChecked = document.getElementsByName(extrasNo);
  var order = "";
  var qtybox = document.getElementsByName("quantity");
  switch(itemNo){
      case 1:
      var qty = qtybox[0].value;
      order = "Buffalo colliflower bites, Price $5.95, Quantity: "+ qty;
      if(ifChecked[0].checked != true){
          order += ", No ranch";
      }
      if(ifChecked[1].checked != true){
        order += ", No buffalo sauce";
      }
      if(ifChecked[2].checked != true){
        order += ", Extra buffalo sauce on the side";
      }
      alert(order);
      document.cookie = order;
      break;
      
      case 2:
      var qty = qtybox[1].value;
      order = "Kale Salad, Price $6.95, Quantity: "+ qty;
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
      alert(order);
      document.cookie = order;
      break;

      default: alert("fuck you");
  }
};