import React, { useState } from 'react';

const Card = props => {
    // eslint-disable-next-line 
    const [selected, setSelected] = React.useState(false);
    // {props.title} {props.year} {props.imgURL}

    return (
        <div className="card -movie">
            <img className='c-img' src={props.img} alt="Movie Poster"/>
            <div className="c-row">
                <h3 className='c-title'>{props.title}, {props.year}</h3>
            </div>
            <button className='c-button' onClick={() => setSelected(true)}>
                Nominee this <br/>
                movie
            </button>
        </div>
    )
}

export default Card;