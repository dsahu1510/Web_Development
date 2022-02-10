 function f(){

    var array= ["sai","kiran","rajesh","anil","venkat"];
    for(i=0; i< array.length; i++ ){
        if(array[i] == 'sai'){
            console.log("available")
            break;
        }
        else{
            console.log("not available")
        }
    }

}
f();