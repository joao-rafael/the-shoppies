import React, { useState, useEffect } from 'react';
import Head from './components/Head';
import Header from './components/Header';
import Search from './components/Search';
import Modal from './components/Modal';
import Nominees from './components/Nominees';
import Footer from './components/Footer';
import NomineesContext from './NomineesContext';


function App() {
    
    const [ nomineeList, setNominee ] = useState([]);

    return (
        <div className="app">
            <Head/>
            <Header/>
            <main role='main' className='main'>
                <section className='wrapper'>
                    <NomineesContext.Provider value={[nomineeList, setNominee]}>
                        <Search/>
                        <Nominees/>
                        <Modal/>
                    </NomineesContext.Provider>
                </section>
            </main>
           <Footer/>
        </div>
    );
}

export default App;
