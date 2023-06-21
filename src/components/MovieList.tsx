import React, { FC, useContext, useState } from "react";
import MovieListItem, { MovieListItemProps } from "./MovieListItem";
import MovieContext from "./MovieContext";

type MovieListProps  = {
    movieListData: MovieListItemProps[];
    selectedItemId: string;
    onItemSelected: Function;
}

const MovieList: FC<MovieListProps> = ({movieListData, selectedItemId, onItemSelected}) => {

    const { setSelectedMovie } = useContext(MovieContext);

    //to set both state and context
    const onMovieSelected = (movieId: string, movieTitle: string) => {
        onItemSelected(movieId);
        setSelectedMovie(movieTitle);
    }

    return (
        <>
            {movieListData.map(({id, title}) => {
                return (
                    <MovieListItem 
                        key={id} 
                        id={id} 
                        title={title}
                        onItemSelected={onMovieSelected}
                        selected={id === selectedItemId}
                    />
                )
            })}
        </>
    );
}

export default MovieList;