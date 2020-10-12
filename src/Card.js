import React from 'react'

export default function Card(props) {
    

    return (
        <div className='card'>
            <div className='card-title'>
                {props.name}
            </div>
            <div className='card-image'>
                <img src={props.image}></img>
            </div>
            <div className='card-info'>
                <p>{props.info}</p>
                <a href={props.code}>View Source Code</a>
            </div>
        </div>
    )
}
