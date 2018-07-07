// Create a variable for the subtotal and make a calculation
var subtotal = (13 + 1) * 5; // Subtotal is 70

//sales tax percent (in decimal)
var salesTax = .05;

// Create a variable for the shipping and make a calculation
var shipping = 0.5 * (13 + 1); // Shipping is 7

// Create the total by combining the subtotal and shipping values
var total = subtotal + shipping; // Total is 77

//sales tax in dollar amount
var taxAmount = total * salesTax;

//subtotal plus shipping plus sales tax
var grandTotal = total + taxAmount;

// Write the results to the screen
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('tax');
elTotal.textContent = taxAmount;

var elTotal = document.getElementById('grandTotal');
elTotal.textContent = grandTotal;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 12, 15, and 18 but note the security issues on p228-231
elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;
*/