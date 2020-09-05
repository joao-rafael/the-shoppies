import React,  {useContext } from 'react';
import NomineesContext from '../NomineesContext';
import Nominee from './Nominee';

const Nominees = () => {
    const [nomineeList] = useContext(NomineesContext);
    
    return(
        <section className='nominees'>
            <h3 className='title -nominees'>
                Nominees {}
            </h3>
            <ul className="list">
                {nomineeList && nomineeList.length > 0 ?
                    nomineeList.map(movie => {
                        return  <Nominee  key={movie.id}  id={movie.id} title={movie.title} year={movie.year}></Nominee>
                    })
                : 
                    <h2 className='title -advice'>Nominee Movies by searching.</h2> }
                
            </ul>
            
        </section>
    )
}

export default Nominees;