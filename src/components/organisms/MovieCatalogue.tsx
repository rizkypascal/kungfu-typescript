import React, { FC, useState } from "react";
import MoviePreview from "../molecules/MoviePreview";
import MovieList from "../molecules/MovieList";

//temporarily export the interface of movie attributes object here
export interface IMovieAttributes {
    title: string;
    year: string;
    id: string;
    poster: string;
    director: string;
    casts: string;
    genre: string;
}

export type MovieCatalogueProps  = {
    movieListData: IMovieAttributes[];
}

const MovieCatalogue: FC<MovieCatalogueProps> = ({movieListData}) => {

    const [selectedMovieId, setSelectedMovieId] = useState<string>(movieListData[0].id);
    const selectedMovie  = movieListData.find(movie => movie.id === selectedMovieId);

    //handle undefined case
    if(selectedMovie === undefined) {
        throw new TypeError('selected movie is expected to be present');
    }

    return (
        <>
            <div style={{float: "left"}}><MoviePreview movieData={selectedMovie} /></div>
            <div style={{float: "right", backgroundColor: "lightgrey"}}><MovieList movieListData={movieListData} selectedItemId={selectedMovieId} onItemSelected={setSelectedMovieId} /></div>
        </>
    );
}

export default MovieCatalogue;