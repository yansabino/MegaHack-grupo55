import React from 'react';
import { CardContent } from './styled'

function Card(props){
    return(
        <CardContent>
            <div>{props.picture}</div>
            <h3>{props.description}</h3>
        </CardContent>
    )
}

export default Card;