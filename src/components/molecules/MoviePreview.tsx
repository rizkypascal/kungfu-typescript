import React, { FC } from "react";
import MoviePoster from "../atoms/MoviePoster";
import MovieDetail from "../atoms/MovieDetail";

export type MoviePreviewProps  = {
    movieData: {
        title: string,
        year: string, 
        id: string,
        poster: string,
        director: string,
        casts: string,
        genre: string,
    };
}

const MoviePreview: FC<MoviePreviewProps> = ({movieData}) => {

    return (
        <div>
            <MoviePoster poster={movieData.poster} />
            <MovieDetail movieData={movieData} />
        </div>
    );
}

export default MoviePreview;