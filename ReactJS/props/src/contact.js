
function Contact(props){

    return(
        
        <div>
            <h1>U can contact me at {props.mobile}</h1> 
        </div>
    )
}
export default Contact;

// in function props 'this' keyword is not used, it is only being used in class component.
// nd in function component we have to pss parameter before passing props inside it.