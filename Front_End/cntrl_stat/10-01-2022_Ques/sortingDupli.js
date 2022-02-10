

var array= ["sai","kiran","rajesh","anil","venkat","sai","rajesh",'kiran'];

var emptyArray = [];

for(i=0; i<array.length; i++){
    console.log(array[i]);

    if(emptyArray.includes(array[i])){
        continue;
    }
    else{
        emptyArray.push(array[i]);
    }
}
array = emptyArray;
console.log(emptyArray)
console.log(array)