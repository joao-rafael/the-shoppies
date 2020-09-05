import React,  {useContext} from 'react';
import NomineesContext from '../NomineesContext';

const Nominee = props => {
    const [nomineeList, setNominee] = useContext(NomineesContext);

    const movie = {
        title: props.title,
        id: props.id,
        year: props.year
    }

    const removeMovie  = () => {
        console.log('remove movie');
        setNominee(nomineeList.filter(item => item.id !== movie.id ));
    }

    return(
        <li className='l-item'>
            {movie.title}, {movie.year}
            <button className='l-remove' onClick={removeMovie}>X Remove This Movie</button>
        </li>
    )
}

export default Nominee;