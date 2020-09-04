import React,  {useContext } from 'react';
import NomineesContext from './../NomineesContext';
import Nominee from './Nominee';

const Nominees = () => {

    const [nomineeList, setNominee] = useContext(NomineesContext);

    const removeElement = (nomineeList, elem) => {
        
    }
    
    return(
        <section className='nominees'>
            <h3 className='title -nominees'>
                Nominees {}
            </h3>
            <ul className="list">
                {nomineeList && nomineeList.length > 0 ?
                    nomineeList.map(movie => {
                        console.log(nomineeList);
                        console.log(`add ${movie.title} with id ${movie.id}`);
                        return  <Nominee  key={movie.id}  id={movie.id} title={movie.title} year={movie.year}></Nominee>
                    })
                : <h2>Nominee Movies</h2> }
                
            </ul>
            
        </section>
    )
}

export default Nominees;