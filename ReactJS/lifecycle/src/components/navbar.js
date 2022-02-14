import React from 'react';
import {HashRouter, NavLink, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Contact from './contact';

class Navbar extends React.Component{

    render(){
        return(

            <div>
                <HashRouter>
                <NavLink to="/login">Login</NavLink> &nbsp;&nbsp;&nbsp;
                <NavLink to='/register'>Register</NavLink>&nbsp;&nbsp;&nbsp;
                <NavLink to='/contact'>Contact</NavLink>&nbsp;&nbsp;&nbsp;
                <Route path='/login'component={Login}></Route>
                <Route path='/register'component={Register}></Route> 
                <Route path='/contact'component={Contact}></Route>  
                </HashRouter>
            </div>
        )
    }
}
export default Navbar;