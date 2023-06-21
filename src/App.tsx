import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import movie from './data/movie.json'
import MovieCatalogue from './components/MovieCatalogue';
import MovieHeader from './components/MovieHeader';
import MovieContext from './components/MovieContext';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <
//     </div>
//   );
// }

const App: FC<{}> = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>("");

  return (
    <div style={{position: "absolute", minHeight: 300, minWidth: 300, top: "5%", left: "20%", right: "20%", border: "1px solid black"}}>
      <MovieContext.Provider value={{selectedMovie, setSelectedMovie}}>
        <div style={{textAlign: "center", backgroundColor: "black", color: "white"}}><MovieHeader /></div>
        <div><MovieCatalogue movieListData={movie}/></div>
        {/* <MovieCatalogue /> */}
      </MovieContext.Provider>
    </div>
    // <>
    //   <div style={{alignItems: "center"}}><Header /></div>
    //   <MovieCatalogue movieListData={movie}/>
    // </>
  );
};

export default App;
