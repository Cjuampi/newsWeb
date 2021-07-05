import React from 'react'
import './Noticia.css'

const Noticia = (props) =>{
    return(
        <div className='contenedor'>
            <div className="newsBox">
                <div className="newsTitle">
                    <h3>{props.title}</h3>
                </div>
                <div className="newsImg">
                    <img src={props.img} alt={props.title}/>
                </div>
                <div className="newsDes">
                    <p>{props.des}</p>
                </div>
                <div className="newsBttn">
                    <button className="btn-remove" onClick={props.remove} >Borrar</button>  
                </div>
            </div>
        </div>
    );
}

export default Noticia;