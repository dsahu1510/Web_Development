function f(){

    var count = 0;
    var array= ["sai","kiran","rajesh","anil","venkat","sai","rajesh"];
    for(i=0; i<array.length; i++){

        if(array[i] == 'anil'){
            count++;
    }
    }
    if(count>1){

        console.log("duplicates available");
    }
    else{

        console.log("no duplicates")
    }
}
f();
