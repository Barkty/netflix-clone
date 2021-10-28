import { useState, useEffect } from 'react'
import request from '../request'
import axios from '../axios';

function Banner() {
    const [movie, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(request.fetchNetflixOriginals);
            setMovies(requests.data.results[Math.floor(Math.random() * requests.data.results.lenght - 1)]);
        }
        fetchData()
    }, [])
    return (
        <header className="banner"
        style={{ 
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition: "center center",
            }}>
            <div className="banner_contents">
                <h1>{movie?.title || movie?.name || movie?.original_name || movie?.original_title}</h1>
                <div className="banner_buttons">
                    <button type="button" className="banner_button">Play</button>
                    <button type="button" className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc">{movie?.overview}</h1>
            </div>
        </header>
    )
}

export default Banner
