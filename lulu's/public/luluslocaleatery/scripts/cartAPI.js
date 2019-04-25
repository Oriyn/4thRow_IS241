function cartAPI(itemNo){
    var extrasNo = "extras"+ itemNo;
    var ifChecked = document.getElementsByName(extrasNo);
    var order = "";
    var qtybox = document.getElementsByName("quantity");
    var price;
    var total = parseFloat(localStorage.getItem("totalPrice"));
    switch(itemNo){
        case 1:
        var qty = qtybox[0].value;
        price = 5.95 * qty;
        order = "Buffalo cauliflower bites, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No ranch";
        }
        if(ifChecked[1].checked != true){
          order += ", No buffalo sauce";
        }
        if(ifChecked[2].checked != true){
          order += ", No extra buffalo sauce on the side";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
        
        case 2:
        var qty = qtybox[1].value;
        price = 6.95 * qty;
        order = "Kale Salad, Quantity: " + qty;
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
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 3:
        var qty = qtybox[2].value;
        price = 3.95 * qty;
        order = "Tater Tots, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No chipotle dipping sauce";
        }
        if(ifChecked[1].checked != true){
          order += ", No cajun seasoning";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
        
        case 4:
        var qty = qtybox[3].value;
        price = 6.49 * qty;
        order = "Mac N' Cheese, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No walnut parmesean";
        }
        if(ifChecked[1].checked != true){
          order += ", No chili buffalo flavor";
        }
        if(ifChecked[2].checked != true){
            order += ", No peso flavor";
        }
        if(ifChecked[3].checked != true){
            order += ", No nacho mac flavor";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 5:
        var qty = qtybox[4].value;
        price = 5.95 * qty;
        order = "Lulu's Chili, Quantity: "+ qty;
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
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 6:
        var qty = qtybox[5].value;
        price = 5.95 * qty;
        order = "Volcano Tots, Quantity: "+ qty;
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
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 7:
        var qty = qtybox[6].value;
        price = 8.95 * qty;
        order = "Loaded Nachos, Quantity: "+ qty;
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
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 8:
        var qty = qtybox[7].value;
        price = 6.95 * qty;
        order = "Loaded Nacho Tots, Quantity: "+ qty;
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
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

		case 25:
        var qty = qtybox[8].value;
        price = 6.95 * qty;
        order = "Smoked White Bean Hummus, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No cucumber ";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 26:
        var qty = qtybox[9].value;
        price = 9.95 * qty;
        order = "Poké Lettuce Wraps, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No sushi";
        }
        if(ifChecked[1].checked != true){
          order += ", No rice";
        }
        if(ifChecked[2].checked != true){
            order += ", No watermelon poké";
        }
        if(ifChecked[3].checked != true){
            order += ", No cucumber";
        }
        if(ifChecked[4].checked != true){
          order += ", No radish";
        }
        if(ifChecked[5].checked != true){
            order += ", No avocado";
        }
        if(ifChecked[6].checked != true){
            order += ", No scallions";
        }
		if(ifChecked[7].checked != true){
            order += ", No spicy mayo";
        }
		if(ifChecked[8].checked != true){
            order += ", No black sesame seeds";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 9:
        var qty = qtybox[10].value;
        price = 8.95 * qty;
        order = "Kale & Brussells Sprouts Caesar Salad, Quantity: "+ qty;
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
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 30:
        var qty = qtybox[11].value;
        price = 8.95 * qty;
        order = "Thai Crunch Salad, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No shredded carrots";
        }
        if(ifChecked[1].checked != true){
          order += ", No red cabbage";
        }
        if(ifChecked[2].checked != true){
            order += ", No green onion";
        }
        if(ifChecked[3].checked != true){
            order += ", No cucumber";
        }
		if(ifChecked[4].checked != true){
            order += ", No red pepper";
        }if(ifChecked[5].checked != true){
            order += ", No radish";
        }
		if(ifChecked[6].checked != true){
            order += ", No crushed peanuts";
        }
		if(ifChecked[7].checked != true){
            order += ", No lime";
        }
		if(ifChecked[8].checked != true){
            order += ", No mint";
        }
		if(ifChecked[9].checked != true){
            order += ", No basil";
        }
		if(ifChecked[10].checked == true){
            order += ", side item: Avocado";
            price += 1.00;
        }
        if(ifChecked[11].checked == true){
              order += ", side item: Organic Marinated Tofu";
              price += 1.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 10:
        var qty = qtybox[12].value;
        price = 6.95 * qty;
        order = "Sweet potato falafel, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No cucumbers";
        }
        if(ifChecked[1].checked != true){
          order += ", No red onion";
        }
        if(ifChecked[2].checked != true){
            order += ", No fresh greens";
        }
        if(ifChecked[3].checked != true){
            order += ", No tzaziki sauce";
        }
        if(ifChecked[4].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[5].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[6].checked == true){
              order += ", side item: kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 11:
        var qty = qtybox[13].value;
        price = 8.95 * qty;
        order = "Buffalo Caesar Wrap, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No House-made caesar dressing ";
        }
        if(ifChecked[1].checked != true){
          order += ", No shredded kale";
        }
        if(ifChecked[2].checked != true){
            order += ", No brussels sprouts";
        }
        if(ifChecked[3].checked != true){
            order += ", No chickpea croutons";
        }
		if(ifChecked[4].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[5].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[6].checked == true){
              order += ", side item: kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;

        case 12:
        var qty = qtybox[14].value;
        price = 7.95 * qty;
        order = "Buffalo cauliflower wrap, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No cucumbers";
        }
        if(ifChecked[1].checked != true){
          order += ", No red onion";
        }
        if(ifChecked[2].checked != true){
            order += ", No fresh greens";
        }
        if(ifChecked[3].checked != true){
            order += ", No spicy buffalo sauce";
        }
        if(ifChecked[4].checked != true){
            order += ", No creamy ranch";
        }
		if(ifChecked[5].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[6].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[7].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
  
		case 13:
        var qty = qtybox[15].value;
        price = 6.95 * qty;
        order = "Sweet Potato Black Bean Burger, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No fresh greens";
        }
        if(ifChecked[1].checked != true){
          order += ", No red onion";
        }
        if(ifChecked[2].checked != true){
            order += ", No chipotle sauce";
        }
		if(ifChecked[3].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[4].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[5].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 14:
        var qty = qtybox[16].value;
        price = 6.95 * qty;
        order = "Buffalo Blue Burger , Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No fresh greens";
        }
        if(ifChecked[1].checked != true){
          order += ", No red onion";
        }
        if(ifChecked[2].checked != true){
            order += ", No chipotle sauce";
        }
        if(ifChecked[3].checked != true){
            order += ", No creamy ranch";
        }
		if(ifChecked[4].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[5].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[6].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
  
		case 15:
        var qty = qtybox[17].value;
        price = 7.95 * qty;
        order = "The BBQ Jack, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No Pappy's Original BBQ Sauce";
        }
        if(ifChecked[1].checked != true){
          order += ", No House-made Slaw";
        }
		if(ifChecked[2].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[3].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[4].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
  
		case 16:
        var qty = qtybox[18].value;
        price = 7.95 * qty;
        order = "Portobello Gyro, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No fresh avocado";
        }
        if(ifChecked[1].checked != true){
          order += ", No greens";
        }
        if(ifChecked[2].checked != true){
            order += ", No cucumber slices";
        }
        if(ifChecked[3].checked != true){
            order += ", No red onion";
        }
        if(ifChecked[4].checked != true){
            order += ", No tzaziki sauce";
        }
		if(ifChecked[5].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[6].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[7].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
  
		case 17:
        var qty = qtybox[19].value;
        price = 9.95 * qty;
        order = "Kimichi Crunch Wrap, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No white rice";
        }
        if(ifChecked[1].checked != true){
          order += ", No marinated jackfruit";
        }
        if(ifChecked[2].checked != true){
            order += ", No kimichi spicy mayo";
        }
        if(ifChecked[3].checked != true){
            order += ", No cilantro";
        }
        if(ifChecked[4].checked != true){
            order += ", No scallions";
        }
		if(ifChecked[5].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[6].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[7].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
  
		case 18:
        var qty = qtybox[20].value;
        price = 7.95 * qty;
        order = "Lulu's Tacos, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No smoky sweet potato";
        }
        if(ifChecked[1].checked != true){
          order += ", No mushroom";
        }
        if(ifChecked[2].checked != true){
            order += ", No onions";
        }
        if(ifChecked[3].checked != true){
            order += ", No black beans";
        }
        if(ifChecked[4].checked != true){
            order += ", No cilantro";
        }
		if(ifChecked[5].checked != true){
            order += ", No fresh avocado";
        }
		if(ifChecked[6].checked != true){
            order += ", No spicy chipotle sauce";
        }
		if(ifChecked[7].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[8].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[9].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 19:
        var qty = qtybox[21].value;
        price = 7.95 * qty;
        order = "Banh Mi Tacos, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No jackfruit";
        }
        if(ifChecked[1].checked != true){
          order += ", No shredded carrots";
        }
        if(ifChecked[2].checked != true){
            order += ", No cucumber";
        }
        if(ifChecked[3].checked != true){
            order += ", No onion";
        }
        if(ifChecked[4].checked != true){
            order += ", No cilantro";
        }
		if(ifChecked[5].checked != true){
            order += ", No lime radish";
        }
		if(ifChecked[6].checked != true){
            order += ", No mayo";
        }
		if(ifChecked[7].checked != true){
            order += ", No house-made Vietnameese Banh Mi Sauce";
        }
		if(ifChecked[8].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[9].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[10].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
 
		case 20:
        var qty = qtybox[22].value;
        price = 8.95 * qty;
        order = "Banh Mi Burrito, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No jackfruit";
        }
        if(ifChecked[1].checked != true){
          order += ", No shredded carrots";
        }
        if(ifChecked[2].checked != true){
            order += ", No cucumber";
        }
        if(ifChecked[3].checked != true){
            order += ", No onion";
        }
        if(ifChecked[4].checked != true){
            order += ", No cilantro";
        }
		if(ifChecked[5].checked != true){
            order += ", No lime radish";
        }
		if(ifChecked[6].checked != true){
            order += ", No mayo";
        }
		if(ifChecked[7].checked != true){
            order += ", No house-made Vietnameese Banh Mi Sauce";
        }
		if(ifChecked[8].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[9].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[10].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 21:
        var qty = qtybox[23].value;
        price = 8.95 * qty;
        order = "Chipotle Black Bean Burrito, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No sweet potato";
        }
        if(ifChecked[1].checked != true){
          order += ", No mushroom";
        }
        if(ifChecked[2].checked != true){
            order += ", No onion";
        }
        if(ifChecked[3].checked != true){
            order += ", No white bean hummus";
        }
        if(ifChecked[4].checked != true){
            order += ", No brown rice";
        }
		if(ifChecked[5].checked != true){
            order += ", No shredded kale";
        }
		if(ifChecked[6].checked != true){
            order += ", No fresh avocado";
        }
		if(ifChecked[7].checked != true){
            order += ", No house-made chipotle sauce";
		}
		if(ifChecked[8].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[9].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[10].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 22:
        var qty = qtybox[24].value;
        price = 7.95 * qty;
        order = "BBQ Jack Tacos, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No jackfruit";
        }
        if(ifChecked[1].checked != true){
          order += ", No Pappy's Original BBQ Sauce";
        }
        if(ifChecked[2].checked != true){
            order += ", No house-made slaw";
        }
		if(ifChecked[3].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[4].checked == true){
              order += ", No side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[5].checked == true){
              order += ", No side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
 
		case 23:
        var qty = qtybox[25].value;
        price = 8.95 * qty;
        order = "Spring Roll Burrito, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No cauliflower bites";
        }
        if(ifChecked[1].checked != true){
          order += ", No fresh greens";
        }
        if(ifChecked[2].checked != true){
            order += ", No cucumber";
        }
        if(ifChecked[3].checked != true){
            order += ", No shredded carrots";
        }
        if(ifChecked[4].checked != true){
            order += ", No green onion";
        }
		if(ifChecked[5].checked != true){
            order += ", No cilantro";
        }
		if(ifChecked[6].checked != true){
            order += ", No crushed peanuts";
        }
		if(ifChecked[7].checked != true){
            order += ", No fresh avocado";
		}
		if(ifChecked[8].checked != true){
            order += ", No basil";
		}
		if(ifChecked[9].checked != true){
            order += ", No mint";
		}
		if(ifChecked[10].checked != true){
            order += ", No house-made peanut sauce";
		}
		if(ifChecked[11].checked == true){
            order += ", side item: Billy goat chips";
            price += 1.00;
        }
        if(ifChecked[12].checked == true){
              order += ", side item: Tater tots";
              price += 2.00;
        }
        if(ifChecked[13].checked == true){
              order += ", side item: Kale salad";
              price += 3.00;
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
 
		case 24:
        var qty = qtybox[26].value;
        price = 9.95 * qty;
        order = "Buddah Bowl, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No organic marinated tofu";
        }
        if(ifChecked[1].checked != true){
          order += ", No fried vegetables";
        }
        if(ifChecked[2].checked != true){
            order += ", No crushed peanuts";
        }
		if(ifChecked[3].checked != true){
            order += ", No green onion";
        }
		if(ifChecked[4].checked != true){
            order += ", No cilantro";
        }
		if(ifChecked[5].checked != true){
            order += ", No lime";
        }
		if(ifChecked[6].checked != true){
            order += ", No sesame seeds";
        }
		if(ifChecked[7].checked != true){
            order += ", No basil";
        }
		if(ifChecked[8].checked != true){
            order += ", No mint";
        }
		if(ifChecked[9].checked != true){
            order += ", No house-made peanut sauce";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
 
		case 27:
        var qty = qtybox[27].value;
        price = 9.95 * qty;
        order = "Spring Roll Bowl, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No house-made cauliflower bites";
        }
        if(ifChecked[1].checked != true){
          order += ", No fresh greens";
        }
        if(ifChecked[2].checked != true){
            order += ", No brown rice";
        }
		if(ifChecked[3].checked != true){
            order += ", No cucumber";
        }
		if(ifChecked[4].checked != true){
            order += ", No green onion";
        }
		if(ifChecked[5].checked != true){
            order += ", No cilantro";
        }
		if(ifChecked[6].checked != true){
            order += ", No crushed peanuts";
        }
		if(ifChecked[7].checked != true){
            order += ", No fresh avocado";
        }
		if(ifChecked[8].checked != true){
            order += ", No lime";
        }
		if(ifChecked[9].checked != true){
            order += ", No basil";
        }
		if(ifChecked[10].checked != true){
            order += ", No mint";
        }
		if(ifChecked[11].checked != true){
            order += ", No house-made peanut sauce";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
 
		case 28:
        var qty = qtybox[28].value;
        price = 9.95 * qty;
        order = "Chipotle Black Bean Bowl, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No roasted sweet potato";
        }
        if(ifChecked[1].checked != true){
          order += ", No mushroom";
        }
        if(ifChecked[2].checked != true){
            order += ", No onion";
        }
		if(ifChecked[3].checked != true){
            order += ", No shredded kale";
        }
		if(ifChecked[4].checked != true){
            order += ", No brown rice";
        }
		if(ifChecked[5].checked != true){
            order += ", No smoked jackfruit";
        }
		if(ifChecked[6].checked != true){
            order += ", No bbq sauce";
        }
		if(ifChecked[7].checked != true){
            order += ", No spicy chipotle sauce";
        }
		if(ifChecked[8].checked != true){
            order += ", No fresh avocado";
        }
		if(ifChecked[9].checked != true){
            order += ", No cilantro";
        }
		if(ifChecked[10].checked != true){
            order += ", No green onion";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 29:
        var qty = qtybox[29].value;
        price = 9.95 * qty;
        order = "Sushi Bowl, Quantity: "+ qty;
        if(ifChecked[0].checked != true){
            order += ", No watermelon";
        }
        if(ifChecked[1].checked != true){
          order += ", No sashimi";
        }
        if(ifChecked[2].checked != true){
            order += ", No fresh avocado";
        }
		if(ifChecked[3].checked != true){
            order += ", No cucumber";
        }
		if(ifChecked[4].checked != true){
            order += ", No radish";
        }
		if(ifChecked[5].checked != true){
            order += ", No scallions";
        }
		if(ifChecked[6].checked != true){
            order += ", No pickled ginger";
        }
		if(ifChecked[7].checked != true){
            order += ", No spicy mayo";
        }
		if(ifChecked[8].checked != true){
            order += ", No wasabi";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 32:
        var qty = qtybox[30].value;
        price = 2.95 * qty;
        order = "Cauliflower Nuggets, Quantity: "+ qty;
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 33:
        var qty = qtybox[31].value;
        price = 2.95 * qty;
        order = "Kids Taco (1), Quantity: "+ qty;
		if(ifChecked[0].checked != true){
            order += ", No Lulu's Taco";
        }
		if(ifChecked[1].checked != true){
            order += ", No Banh Mi Taco";
        }
		if(ifChecked[2].checked != true){
            order += ", No BBQ Jack Taco";
        }
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 34:
        var qty = qtybox[32].value;
        price = 3.95 * qty;
        order = "Mini Burger (1), Quantity: "+ qty;
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
		
		case 35:
        var qty = qtybox[33].value;
        price = 3.95 * qty;
        order = "BBQ Slider (1), Quantity: "+ qty;
        total += price;
        order += ", Price: $"+ price.toFixed(2);
        localStorage.setItem("totalPrice", total);
        return order;
        break;
 
        default: return -1;
}
};