function invoiceKitchen(){
    const order = JSON.parse(localStorage.getItem("CartItems"));
    var body_message = order;
    var email = 'gabehagg@gmail.com';
    var subject = 'invoice';
    alert("hit");
    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

    window.location.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed){win.close()}
};


