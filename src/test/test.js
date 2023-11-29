import { useEffect, useState } from "react";
import "../stylesheets/index.css";

function Test() {
  const [movieList, setMovieList] = useState([]);
  const [state, setState] = useState([]);

  const fetchTrending = async () => {
    const data = await fetch(`
https://api.themoviedb.org/3/trending/all/day?api_key=ccf711f2e7a3eadbcc4f8d010b633d4e`);
    const dataJ = await data.json();
    setState(dataJ.results);
    setMovieList(dataJ.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  // const filteredList = state.filter((movie) => {
  //   return movie.release_date && movie.release_date.includes(formattedDate);
  // });

  // setMovieList(filteredList);

  return (
    <div>
      {movieList.map((data, index) => {
        <p>{data.title}</p>;
      })}
    </div>
  );
}

export default Test;
