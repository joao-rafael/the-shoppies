import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Nominees from './components/Nominees';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main role='main' className='main'>
        <section className='wrapper'>
          <Search>
          </Search>
          <Nominees>
          </Nominees>
        </section>
      </main>
    </div>
  );
}

export default App;
