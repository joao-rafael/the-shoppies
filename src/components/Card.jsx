import React,  { useState, useContext } from 'react';
import NomineesContext from './../NomineesContext';

const Card = props => {
    const [nomineeList, setNominee] = useContext(NomineesContext);
    // eslint-disable-next-line 
    const [selected, setSelected] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    // {props.title} {props.year} {props.imgURL}

    const movie = {
        title: props.title,
        id: props.id,
        year: props.year
    }

    const check = () => {
        var found = false;
        for(var i = 0; i < nomineeList.length; i++) {
            if (nomineeList[i].id === movie.id) {
                found = true;
                break;
            }
        }
        setDisabled(found);
        return found;
    }

    const nomineeMovie = () => {
        if(check()) {
            console.log('movie already in list');
            return;
        }
        setSelected(!selected);
        //pushes to array
        setNominee(current => [...current, movie]);
    }

    return (
        <div className="card -movie">
            <img className='c-img' src={props.img} alt="Movie Poster"/>
            <div className="c-row">
                <h3 className='c-title'>{props.title}, {props.year}</h3>
            </div>
            <button className='c-button' onClick={nomineeMovie} disabled={selected}>
                Nominee this <br/>
                movie
            </button>
        </div>
    )
}

export default Card;