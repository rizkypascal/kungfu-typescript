import React, { FC, useState } from "react";

type MoviePosterProps  = {
    poster?: string
}

const MoviePoster: FC<MoviePosterProps> = ({poster}) => {

    return (
        <img src={poster}></img>
    );
}

export default MoviePoster;