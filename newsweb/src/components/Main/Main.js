import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../../pages/Home/Home'
import Form from '../../pages/Formulario/Formulario'
import List from '../../pages/Lista/Lista'
import './Main.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            news:""
        }
    }

    handleChangeStateNews = (obj)=>{
        this.setState({news: obj})
    } 

    render(){
        return(
            <main className="Main">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/form" component={()=> <Form newsObj={this.handleChangeStateNews}/>} />
                    <Route path="/list" component={()=> <List objNews={this.state.news}/>} />
                </Switch>

            </main>
        );
    }
}

export default Main;