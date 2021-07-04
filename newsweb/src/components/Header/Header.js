import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { userContext } from '../application/provider';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header className="Header">
                <userContext.Consumer>
                {({user}) =>
                    <h1>Cabecera {user.name}</h1> 
                }
                </userContext.Consumer>
                <Nav/>
            </header>
        );
    }
}

export default Header;