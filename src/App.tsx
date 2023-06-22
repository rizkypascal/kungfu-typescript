import React, { FC, useState } from 'react';
import './App.css';
import movie from './data/movie.json'
import MovieCatalogue from './components/organisms/MovieCatalogue';
import MovieHeader from './components/atoms/MovieHeader';
import MovieContext from './components/MovieContext';
import { Provider } from 'react-redux';
import store from './app/store';

const App: FC<{}> = () => {
  // state is used for Context
  // const [selectedMovie, setSelectedMovie] = useState<string>("");

  return (
    <div style={{position: "absolute", minHeight: 300, minWidth: 300, top: "5%", left: "20%", right: "20%", border: "1px solid black"}}>
      {/* The commented one is using Context method, currently using Redux */}
      {/* <MovieContext.Provider value={{selectedMovie, setSelectedMovie}}> */}
      <Provider store={store}>
        <div style={{textAlign: "center", backgroundColor: "black", color: "white"}}><MovieHeader /></div>
        <div><MovieCatalogue movieListData={movie}/></div>
      </Provider>
      {/* </MovieContext.Provider> */}
    </div>
  );
};

export default App;