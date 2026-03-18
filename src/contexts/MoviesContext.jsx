import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MoviesContext = createContext();
const apiURL = "http://localhost:3000";

function MoviesProvider({ children }) {
  //* useState Constant
  const [moviesList, setMoviesList] = useState([]);
  const [movieSelected, setMovieSelected] = useState();
  const [isMovieDetail, setIsMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //* API Index Call
  function fetchMoviesList() {
    setIsLoading(true);
    axios.get(apiURL + "/movies").then((res) => {
      setMoviesList(res.data.result);
      setIsLoading(false);
    });
  }

  //* API Show Call
  function fetchMovieDetail() {
    if (movieSelected) {
      setIsLoading(true);
      axios.get(apiURL + `/movies/${movieSelected}`).then((res) => {
        setIsMovieDetail(res.data.result);
        setIsLoading(false);
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
    isLoading,
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
