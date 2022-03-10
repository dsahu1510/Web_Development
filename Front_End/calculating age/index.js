

function ageInDays(){
    var yourBirthYear = prompt("What Year Were U born???");
    var ageIs = ((2022 - yourBirthYear) * 365);
    console.log(ageIs);

    document.getElementById("your result").innerHTML ="Your age in days is: " + ageIs + " days";
}   


function refreshInput(){
    alert("enter new year");
    var input = prompt("enter year");
    
    var updatedAgeIs = ((2022 - input) * 365);
    console.log(updatedAgeIs);

    document.getElementById("your result").innerHTML ="Your age in days is: " + updatedAgeIs + " days";
}