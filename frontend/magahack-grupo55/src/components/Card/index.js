import React from 'react';
import { CardContent } from './styled'


function Card(props){
    return(
        <CardContent>
            <img src={props.picture} alt="oi" width="150"/>
            <h3>{props.description}</h3>
        </CardContent>
    )
}

export default Card;