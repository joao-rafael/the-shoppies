import React from 'react';
import Head from './components/Head';
import Header from './components/Header';
import Search from './components/Search';
import Nominees from './components/Nominees';


function App() {
  return (
    <div className="app">
      <Head/>
      <Header/>
      <main role='main' className='main'>
        <section className='wrapper'>
          <Search/>
          <Nominees/>
        </section>
      </main>x
    </div>
  );
}

export default App;
