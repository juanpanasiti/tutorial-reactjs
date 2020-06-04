import React from 'react';
import {instrumentos} from '../assets/json/instrumentos.json'

const Home = () => {
    return (
        <div>
            <h1>Instrumentos</h1>
            <ul>
                {instrumentos.map(product => {
                    return(
                    <li>{product.instrumento} - {product.marca} - {product.modelo}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Home;