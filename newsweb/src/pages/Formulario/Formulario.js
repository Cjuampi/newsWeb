import React, { Component } from 'react';
import './Formulario.css'

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={
            news:{}
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.newsObj(this.state.news)
    }
    
    handleChange = (event)=>{
        this.setState({news: {...this.state.news,[event.target.name]: event.target.value}})
    }


    render(){
        return(
            <section className="sectionForm">
                <form onSubmit={this.handleSubmit}>
                    <label>Título:</label>
                    <input type="text" id="title" name="title" onChange={this.handleChange} />
                    <label>Imagen:</label>
                    <input type="text" id="urlToImage" name="urlToImage" onChange={this.handleChange}/>
                    <label>Descripción:</label>
                    <textarea id="description" name="description" rows="4" cols="30" onChange={this.handleChange}/>
                    <input type="submit" value="Add news" />
                </form>
            </section>
        );
    }
}

export default Formulario;