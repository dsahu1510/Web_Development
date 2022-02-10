
function f(){
    var array= [[5,6],[7,8,9],[12345]];

    for( var i=0; i<array.length; i++);{
         console.log(array[i]);

        for( j=0; j<array.length; j++);{
             console.log(array[j]);

        }
    }
}
f();    

// function printArray(arr) {
//     for (var i=0;i<arr.length;i++){
//       for(var j=0;j<arr[0].length;j++){
//         console.log(arr[i][j]);
//       }   
//     }
//   }
//   var arr = [[1, 2],
//              [3, 4],
//              [5, 6]];
  
//   printArray(arr) //1 2 3 4 5 6



let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
//console.log(years.0)   // a syntax error
console.log(years[0])  // works properly

console.log(years[2] == years[02])

