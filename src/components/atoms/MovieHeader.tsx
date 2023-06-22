import React, { FC, useContext } from "react";
import MovieContext from "../MovieContext";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const MovieHeader: FC<{}> = () => {
    //Context Example
    // const {selectedMovie, setSelectedMovie} = useContext(MovieContext);

    //Redux Example
    const selectedTitle = useSelector((state: RootState) => state.movies.title)

    return (
        <h1>{selectedTitle}</h1>
    );
}

export default MovieHeader;
