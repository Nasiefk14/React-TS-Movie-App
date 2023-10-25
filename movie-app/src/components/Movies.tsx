import { useEffect, useState } from 'react'
import axios from 'axios'
import { IMovie } from '../types'
import MovieList from './MovieList'
import './MovieList.css'

export default function Movies() {
  const { REACT_APP_TMDB_API_KEY } = process.env
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies()
    // eslint-disable-next-line
  }, [])

  const getAllMovies = async () => {
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=2`
      )
      if(response.data.results.length > 1){
        setMovies(response.data.results)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='movieContainer'>
      {
        movies.map((movie: IMovie) => {
          return <MovieList key={movie.id} title={movie.title} poster_path={movie.poster_path} adult={false} backdrop_path={''} genre_ids={[]} id={0} original_language={''} original_title={''} overview={''} popularity={0} release_date={movie.release_date} video={false} vote_average={movie.vote_average} vote_count={0}/>
        })
      }
    </div>
  )

}
