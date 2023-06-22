import React, { FC, useState } from "react";

type MoviePosterProps  = {
    poster: string
}

const MoviePoster: FC<MoviePosterProps> = ({poster}) => {

    return (
        <img src={poster} alt="Poster Placeholder"></img>
    );
}

export default MoviePoster;