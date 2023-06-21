import React, { FC, useState } from "react";
import MoviePoster from "./MoviePoster";
import MovieDetail from "./MovieDetail";

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