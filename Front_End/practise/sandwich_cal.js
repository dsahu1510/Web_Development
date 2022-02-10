
function sandwich_Calcultor(bread, cheese)
{
    if(bread/2 > cheese){
        return "the num of cheese used is " + cheese;
    }
    else{
        return "the num of bread used is " + bread/2;
    }
}
result = sandwich_Calcultor(15, 17);
console.log(result);


var a = 12;
(function() {
  console.log(a);
})();


var a = 5;
(function() {
  var a = 12;
  console.log(a);
})();


var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    console.log(a);
  });
})();
x();


var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    console.log(a);
  }
})();
x();


const food = ['apple', 'pizza', 'pear'];
console.log(food[1]);