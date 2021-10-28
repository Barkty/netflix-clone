import { useState, useEffect } from 'react'
import request from '../request'
import axios from '../axios';
import './Banner.css'

function Banner() {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(request.fetchNetflixOriginals);
            setMovies(requests.data.results[Math.floor(Math.random() * requests.data.results.length - 1)]);
        }
        fetchData()
    }, []);
 
function truncate(str, n) {
return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}
   return (
        <header className="banner"
        style={{ 
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition: "center center",
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button type="button" className="banner_button">Play</button>
                    <button type="button" className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
            </div>
<div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
