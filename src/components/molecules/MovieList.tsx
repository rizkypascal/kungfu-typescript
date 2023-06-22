import React, { FC, useContext, useState } from "react";
import MovieListItem, { MovieListItemProps } from "../atoms/MovieListItem";

import MovieContext from "../MovieContext";
import { setPageTitle } from "../../app/movieSlice";
import { useDispatch } from "react-redux";
import { IMovieAttributes } from "../organisms/MovieCatalogue";

type MovieListProps  = {
    movieListData: IMovieAttributes[];
    selectedItemId: string;
    onItemSelected: Function;
}

const MovieList: FC<MovieListProps> = ({movieListData, selectedItemId, onItemSelected}) => {

    //Context example
    // const { setSelectedMovie } = useContext(MovieContext);

    //to set both state and context
    // const onMovieSelected = (movieId: string, movieTitle: string) => {
    //     onItemSelected(movieId);
    //     setSelectedMovie(movieTitle);
    // }

    //Redux example: use dispatch to update the page title
    const dispatch = useDispatch();
    const onMovieSelected = (movieId: string, movieTitle: string) => {
        onItemSelected(movieId);
        dispatch(setPageTitle(movieTitle));
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