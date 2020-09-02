import React, { useState, useEffect } from 'react';
import Head from './components/Head';
import Header from './components/Header';
import Search from './components/Search';
import Nominees from './components/Nominees';
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
                    </NomineesContext.Provider>
                </section>
            </main>
        </div>
    );
}

export default App;
