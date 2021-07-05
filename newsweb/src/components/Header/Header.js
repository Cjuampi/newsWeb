import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { userContext } from '../application/provider';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header className="Header">
                <div className="titleH1">
                    <h1>Noticias</h1> 
                    <userContext.Consumer>
                    {({user}) =>
                        <h3>{user.name}</h3> 
                    }
                    </userContext.Consumer>
                </div>
                <div className="navClassHeader">
                    <Nav/>
                </div>
            </header>
        );
    }
}

export default Header;