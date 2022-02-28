import axios from 'axios';
export function getUsers(){

    console.log("get users called");
    //
    var promise=axios.get("https://jsonplaceholder.typicode.com/users");
    return {
        type: "GET_USERS",
        payload:promise
    }
}