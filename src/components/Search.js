import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './Card';


const url = 'https://www.omdbapi.com/?apikey=2c21e7b7&s=';
const api = axios.create({
    baseURL: url,
    params: {
        _limit: 3,
    }
});

const Search = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [response, setResponse] = React.useState('');
    const [movies, setMovies] = React.useState('');
    const [message, setMessage] = React.useState('Search for a movie!');

    useEffect(() => {
        renderResponse(response);
    });

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    const handleError = e => {
        console.error(``)
    }

    const handleSearchTerm = searchTerm => {
        if (searchTerm === '' ) {
            return setMessage('Use the searchbox above to search for movies.');
        }
        else if ( searchTerm.length < 3) {
            return setMessage('Insert 3 or more characters.');
        }
    }

    const renderResponse = res => {
        handleSearchTerm(searchTerm);
        if (res === '' ) {
            return;
        } 
        else if (res.data.Response === "True") {
            setMovies(res.data.Search);
            setResponse('');
        } 
        else if(res.data.Response === "False"){
            return setMessage('Error...please make a valid search.')
        }
    }
 
    const search = async (e) => {
        e.preventDefault();
        api.get(`${searchTerm}`)
            .then(res => setResponse(res))
            .catch(err => handleError(err))
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

                <button type='submit' className='f-button'>
                    Search <span role='img' aria-label='magnifying glass'>🔎</span>
                </button>
            </form>

            <div className="s-results">
                {
                    movies === '' ?
                        <h2 className='title -advice'>
                            {message}
                        </h2> 
                    :
                        movies.slice(0, 3).map(movie => {
                            console.log(movie);
                            return <Card key={movie.imdbID} id={movie.imdbID} title={movie.Title} year={movie.Year} img={movie.Poster}></Card>
                        })
                }
            </div>
        </section>
    )
}

export default Search;