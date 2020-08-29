import React from 'react';
import axios from 'axios';

const url = 'http://www.omdbapi.com/?apikey=2c21e7b7&s=';
const api = axios.create({
    baseURL: url,
    params: {
        _limit: 3,
    }
});

const Search = () => {
    // react.useState returns [searchTerm, setSearchTerm]
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        api.get(`${searchTerm}`)
            .then(res => console.log(res.data));
    }

    return(
        <section className='search'>
            <form action="" className='s-form' onSubmit={search}>
                <label htmlFor="searchBox" className='f-label'>
                    Search for a movie:
                </label>
                <input type="text"
                    className='f-searchbox'
                    name='searchBox' 
                    id='searchBox' 
                    onChange={handleChange}
                    placeholder='Search for movie'/>
                <button type='submit'>
                    Search
                </button>
            </form>
            <h6 className='title -searchresults'>
                results:
            </h6>

            <div className="s-results">
                <h2>
                    Nothing found :( 
                </h2>
            </div>
        </section>
    )
}

export default Search;