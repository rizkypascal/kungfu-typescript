import React, { FC, useContext } from "react";
import MovieContext from "./MovieContext";

export const MovieHeader: FC<{}> = () => {
    const {selectedMovie, setSelectedMovie} = useContext(MovieContext);
    return (
        <h1>{selectedMovie || "Movie Catalog"}</h1>
    );
};

export default MovieHeader;
