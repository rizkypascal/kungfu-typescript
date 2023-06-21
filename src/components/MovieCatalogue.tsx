import React, { FC, useState } from "react";
import MoviePreview from "./MoviePreview";
import MovieList from "./MovieList";

type MovieCatalogueProps  = {
    movieListData: {
        title: string,
        year: string, 
        id: string,
        poster: string,
        director: string,
        casts: string,
        genre: string,
    }[];
}

const MovieCatalogue: FC<MovieCatalogueProps> = ({movieListData}) => {

    const [selectedMovieId, setSelectedMovieId] = useState<string>(movieListData[0].id);
    const selectedMovie  = movieListData.find(movie => movie.id === selectedMovieId);

    if(selectedMovie)
    {
        return (
            <>
                <div style={{float: "left"}}><MoviePreview movieData={selectedMovie} /></div>
                <div style={{float: "right", backgroundColor: "lightgrey"}}><MovieList movieListData={movieListData} selectedItemId={selectedMovieId} onItemSelected={setSelectedMovieId} /></div>
            </>
        );
    } else {
        return (
            <>
                <div style={{float: "right"}}><MovieList movieListData={movieListData} selectedItemId={selectedMovieId} onItemSelected={setSelectedMovieId} /></div>
            </>
        );
    }
}

export default MovieCatalogue;