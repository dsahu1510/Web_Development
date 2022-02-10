
// var i=1;

// while(i<=10){

//     console.log(i);
//     i++;
// }

// var user=['devyani','neeta','vaibhav']

// var i=0;

// while(i < user.length){

//     console.log(user[i]);
//     i++;

// }

var users = [{
    name: "Sai", 
    address: "Madhapur", 
    mobileNumber: "9010101010"
},
{
    name: "Rajesh", 
    address: "Manikonda", 
    mobileNumber: "9877876568"
},
{
    name: "Devyani", 
    address: "Hyderabad", 
    mobileNumber: "0401221232"
},
{
    name: "Jaishri", 
    address: "US", 
    mobileNumber: "+9697R467811"
}];

console.log(users)

i=0;

while(i < users.length){
    console.log(users[i].name)
    console.log(users[i].address)
    console.log(users[i].mobileNumber)
    console.log("--------------------")
    i++;
}

