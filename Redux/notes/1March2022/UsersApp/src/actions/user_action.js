import axios from 'axios';
export function getUsers(){

    console.log("get users called");
    //
    var promise=axios.get("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5914a0d8e747a2fa170005ba8eb04136");
    console.log("promise", promise);
    return {
        type: "GET_USERS",
        payload:promise
    }
}
// api.openweathermap.org/data/2.5/weather?q=delhi&appid=5914a0d8e747a2fa170005ba8eb04136

// https://jsonplaceholder.typicode.com/users