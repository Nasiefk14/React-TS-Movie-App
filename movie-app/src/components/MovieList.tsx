import { IMovie } from '../types'

export default function MovieList({title, poster_path} : IMovie){
  return (
    <>
    Movie List
              <h1>{title}</h1>
              <h3>{poster_path}</h3>
    </>
  )
}
