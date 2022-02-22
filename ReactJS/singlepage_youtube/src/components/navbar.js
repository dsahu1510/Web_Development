import React from 'react';
import {HashRouter, NavLink, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Contact from './contact';
import Dashboard from './dashboard';

class Navbar extends React.Component{

    render(){
        var isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        console.log(isUserLoggedIn);
        return(

            <div>
                <HashRouter>
                    {!isUserLoggedIn ? (
                        <div>
                            <NavLink to="/login">Login</NavLink> &nbsp;&nbsp;&nbsp;
                            <NavLink to='/register'>Register</NavLink>&nbsp;&nbsp;&nbsp;
                            <NavLink to='/contact'>Contact</NavLink>&nbsp;&nbsp;&nbsp;
                        </div>):
                        (<NavLink to="/logout"></NavLink>)
                    }

                <Route path='/login'component={Login}></Route>
                <Route path='/register'component={Register}></Route> 
                <Route path='/contact'component={Contact}></Route>  
                <Route path='/dashboard'component={Dashboard}></Route>
                </HashRouter>
            </div>
        )
    }
}
export default Navbar;