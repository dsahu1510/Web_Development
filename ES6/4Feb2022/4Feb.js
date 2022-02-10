
class product{
    sno;
    product_name;
    price;
}
var items = [];

var prod1 = new product();
prod1.sno="1";
prod1.product_name="books";
prod1.price="5000";
items.push(prod1);

var prod2 = new product();
prod2.sno='2';
prod2.product_name="clothes";
prod2.price="2000";
items.push(prod2);

var prod3 = new product();
prod3.sno="3";
prod3.product_name="groceries";
prod3.price="3000";
items.push(prod3);

console.log(items);