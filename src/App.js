import React from 'react';
import {BrowserRouter, Link ,Route,Switch } from 'react-router-dom';
import Home from "./Components/Home";
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './layout/Header';
import NotFount  from './Components/NotFount';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import ViewUser from './Components/Users/ViewUser';

// import navbar from './layout/navbar'

export default function App() {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        {/* <NotFount/> */}
        <Switch>
            <Route path="/" exact component={Home}/>
             < Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            
            <Route exact path="/Users/adduser" component={AddUser}/>
            <Route exact path="/Users/edituser/:id" component={EditUser}/>
            <Route exact path="/Users/viewuser/:id" component={ViewUser}/>

            <Route component={NotFount}/>
            </Switch>
            </BrowserRouter>
        </>
    )
}
