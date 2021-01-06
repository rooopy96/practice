import React from "react";
import "./Movie.css";

function Movie({poster, title, summary, year}) {
	return (
		<div className="movie">
			<img className="movie__poster" src={poster} alt={title}></img>
			<div className="movie__info">
				<h1 className="movie__title">{title}, <span className="movie__year">{year}</span></h1>
				<p className="movie__summary">{summary.slice(0, 300)}...</p>
			</div>
		</div>
	)
}

export default Movie;