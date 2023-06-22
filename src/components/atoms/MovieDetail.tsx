import React, { FC, useState } from "react";
import { MoviePreviewProps } from "../molecules/MoviePreview";

const MovieDetail: FC<MoviePreviewProps> = ({movieData}) => {

    return (
        <>
        <h3>{movieData?.title} ({movieData?.year})</h3>
        <p>Director: {movieData?.director}</p>
        <p>Casts: {movieData?.casts}</p>
        <p>Genre: {movieData?.genre}</p>
        </>
    );
}

export default MovieDetail;