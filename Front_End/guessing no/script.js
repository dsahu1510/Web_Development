let correctNum = getRandomNumber();
console.log(correctNum);

function play_game(){
    var number = document.getElementsByClassName("input").value;
    console.log(number);
    displayLogic(number);

}

function displayLogic(number){
    if (number > correctNum){
        console.log("too high");
    }
    else if(number < correctNum){
        console.log("too low");
    }
    else{
        console.log("is correct");
    }
}

function getRandomNumber(){
    var randomNumber = Math.random();
    var wholeNum = Math.floor( randomNumber * 100);
    return wholeNum;
}

function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog = "<div class = 'alert warning' role= 'warning'/>";
            break;
        case "won":
            dialog = "<div class = 'alert warning' role= 'success'/>"
            break;
    }
    dialog +=text;
    dialog += "</div>" 
    return dialog;
}