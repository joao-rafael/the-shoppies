import React, { useContext, useState }  from 'react';
import NomineesContext from '../NomineesContext';
import Nominee from './Nominee';

const Modal = props => {
    const [visible, setVisible] = useState(false);
    const [nomineeList, setNominee] = useContext(NomineesContext);

    const close = () => {
        setNominee([]);
    }
    
    return(
        <>
            {
                nomineeList && nomineeList.length > 4 ? 
                <section className='modal'>
                    <div className="m-background">
                        <section className="m-content">
                            <h2 className='title -modal'>Nominated Movies:</h2>
                            <ul className='m-list'>
                            {
                                nomineeList.map(movie => {
                                    return  <li className='item' key={movie.id}>{movie.title}, {movie.year}</li>
                                })
                            }
                            </ul>
                            <button onClick={close} className='m-button'>
                                Reset list and close
                            </button>
                            
                        </section>
                    </div>
                </section> 
                : ''
            }
        </>
    );
}

export default Modal;