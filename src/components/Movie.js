import React from "react";
import { Link } from "react-router-dom"
import "./Movie.css";

function Movie({poster, title, summary, year, id}) {
	return (
		<div className="movie">
			<Link to={{
				pathname: `movie/${id}`,
				state: {
					poster, title, summary, year
				}
			}}>
					<img className="movie__poster" src={poster} alt={title}></img>
					<div className="movie__info">
						<h1 className="movie__title">{title}, <span className="movie__year">{year}</span></h1>
						<p className="movie__summary">{summary.slice(0, 300)}...</p>
					</div>
			</Link>
		</div>
	)
}

export default Movie;