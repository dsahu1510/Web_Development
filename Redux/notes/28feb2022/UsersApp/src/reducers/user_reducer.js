export default function(state= [], action)
{
    console.log("I am in user_reducer");
    switch(action.type){
        case "GET_USERS" :  console.log(action.payload.data);
                    state = action.payload.data;
                    return state;
        default: return state;
    }

}