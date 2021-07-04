import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component{
    render(){
        return(
            <nav className="Nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/form">Crear noticias</Link></li>
                    <li><Link to="/list">Noticias</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;