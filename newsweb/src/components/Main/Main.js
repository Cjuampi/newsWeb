import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../../pages/Home/Home'
import Form from '../../pages/Formulario/Formulario'
import List from '../../pages/Lista/Lista'
import './Main.css';

class Main extends Component {
    render(){
        return(
            <main className="Main">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/form" component={Form} />
                    <Route path="/list" component={List} />
                </Switch>
            </main>
        );
    }
}

export default Main;