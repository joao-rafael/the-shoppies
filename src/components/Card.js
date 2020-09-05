import React,  { useContext } from 'react';
import NomineesContext from '../NomineesContext';

const Card = props => {
    const [nomineeList, setNominee] = useContext(NomineesContext);

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
        return found;
    }

    const nomineeMovie = () => {
        if(check()) {
            return;
        }
        setNominee(current => [...current, movie]);
    }

    return (
        <div className="card -movie">
            <img className='c-img' src={props.img} alt="Movie Poster"/>
            <div className="c-row">
                <h3 className='c-title'>{props.title}, {props.year}</h3>
            </div>
            <button className='c-button' onClick={nomineeMovie} disabled={check()}>
                Nominee this <br/>
                movie
            </button>
        </div>
    )
}

export default Card;