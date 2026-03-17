import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MoviesContext = createContext();
const apiURL = "http://localhost:3000";

function MoviesProvider({ children }) {
  //* useState Constant
  const [moviesList, setMoviesList] = useState([]);
  const [movieSelected, setMovieSelected] = useState();
  const [isMovieDetail, setIsMovieDetail] = useState([]);

  //* API Index Call
  function fetchMoviesList() {
    axios.get(apiURL + "/movies").then((res) => {
      setMoviesList(res.data.result);
    });
  }

  //* API Show Call
  function fetchMovieDetail() {
    if (movieSelected) {
      axios.get(apiURL + `/movies/${movieSelected}`).then((res) => {
        setIsMovieDetail(res.data.result);
      });
    }
  }

  //* useEffect State
  useEffect(fetchMoviesList, []);
  useEffect(fetchMovieDetail, [movieSelected]);

  //* Context Value
  const contextValue = {
    moviesList,
    setMovieSelected,
    isMovieDetail,
  };
  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
}

function useMoviesFunction() {
  return useContext(MoviesContext);
}

export { MoviesProvider, useMoviesFunction };
