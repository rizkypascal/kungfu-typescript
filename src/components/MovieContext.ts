import React, { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

interface IMovieContextType {
    selectedMovie: string;
    setSelectedMovie: Dispatch<SetStateAction<string>>
}

const initialContext = {
  selectedMovie: "",
  setSelectedMovie: () => {}
}

const MovieContext = createContext<IMovieContextType>(initialContext);

export default MovieContext;
