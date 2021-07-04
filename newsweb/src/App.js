import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

import {userContext} from './components/application/provider'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name:""
      }
    };
  }

  login = (name) => this.setState({user:{name}});
  
  render(){
    const datos = {
      user:this.state.user,
      loginUser: this.login
    }
    
    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={datos}>
            <Header/>
            <Main/>
          </userContext.Provider>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
