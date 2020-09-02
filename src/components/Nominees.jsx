import React,  {useContext } from 'react';
import NomineesContext from './../NomineesContext';

const Nominees = () => {

    const [nomineeList, setNominee] = useContext(NomineesContext);

    return(
        <section className='nominees'>
            <h3 className='title -nominees'>
                Nominees {}
            </h3>
            <p>nominated movies: {nomineeList.length}</p>
        </section>
    )
}

export default Nominees;