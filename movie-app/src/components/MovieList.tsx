import { IMovie } from "../types";
import "./MovieList.css";

export default function MovieList({ title, poster_path, vote_average, release_date }: IMovie) {
  return (
    <div className="movieItem">
      <img
        className="posterImage"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="Poster Image"
      />
    </div>
  );
}