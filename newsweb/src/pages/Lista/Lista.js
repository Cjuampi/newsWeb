import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Noticia from '../../components/Noticia/Noticia'
import axios from 'axios';
import './Lista.css'

class Lista extends Component{
    constructor(props){
        super(props);
        this.state = {
            news:[this.props.objNews]
        }
    }

    componentDidMount(){
        this.getNews()
        
    }

    getNews = async()=>{
        console.log(this.state.news)
        let result = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=`)
        this.state.news[0].hasOwnProperty('title')?this.setState({news: this.state.news.concat(result.data.articles)}):this.setState({news: result.data.articles})
        console.log(this.state.news)
    }

    removeOneNews = (i) => {
        let filteredArray = this.state.news.filter((item, j) => i !== j);
        this.setState({ news: filteredArray });
      };


    renderNews = () =>{

        if(this.state.news.length !== 0 ){
        return this.state.news.map((element,index)=>{
            let keyValue = uuidv4();
            return(
                <Noticia 
                    key={keyValue}
                    title={element.title}
                    img={element.urlToImage}
                    des={element.description}
                    remove={()=>{this.removeOneNews(index)}}
                />
            );
        })
        }else{
            return null
        }
    }

    render(){
        return(
            <div className="contAllNews">
                <div>{this.renderNews()}</div>
            </div>
            
        );
    }
}

export default Lista;