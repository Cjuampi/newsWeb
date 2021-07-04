import React, { Component } from 'react';
import { userContext } from '../../components/application/provider'
class Home extends Component {
    constructor (props) {
        super(props);
        this.state={
            name:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
    }
    handleChange = event =>{
        this.setState({name:event.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Usuario:</label>
                    <input type="text" name="user" onChange={this.handleChange}/>
                    <userContext.Consumer>
                        {({loginUser}) => <button type='submit' onClick={()=>loginUser(this.state.name)}>Aceptar</button>}
                    </userContext.Consumer>
                </form>
            </div>
        );
    }
}

export default Home;