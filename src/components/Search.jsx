import React from 'react';

const Search = () => {

    return(
        <section className='search'>
            <form action="" className='s-form'>
                <label htmlFor="searchBox" className='f-label'>
                    Search for a movie:
                </label>
                <input type="text"
                    className='f-searchbox'
                    name='searchBox' 
                    id='searchBox' 
                    placeholder='Search for movie'/>
            </form>
            <h6 className='title -searchresults'>
                results:
            </h6>
            [// add conditional rendering for reaults]
            <div className="s-results">
                <h2>
                    Nothing found :( 
                </h2>
            </div>
        </section>
    )
}

export default Search;