import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Searchform from "./components/form";
import WatchList from "./components/watchlist";
import FilteredAnimes from "./components/filterAnime";
import axios from "axios";

function App() {
  const [animesList, setAnimesList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime").then((res) => {
      setAnimesList(res.data.data);
    });
  }, []);

  const searchedAnimes = animesList?.filter((animes) => {
    if (searchItem === "") {
      return animes;
    } else if (animes.title.toLowerCase().includes(searchItem.toLowerCase())) {
      return animes;
    }
  });

  return (
    <>
      <div
        className="container"
        style={{ textAlign: "center", backgroundColor: "#414016" }}
      >
        <h1 className="text-primary">Animes List</h1>
        <div className="row">
          <div className="col col-2">
            <FilteredAnimes
              animesList={animesList}
              setAnimesList={setAnimesList}
            />
          </div>
          <div className="col col-10">
            <Searchform setSearchItem={setSearchItem} />
          </div>
        </div>
        <WatchList animesList={animesList} />
        <h1>Main List</h1>
        {searchedAnimes?.map((anime) => {
          return (
            <Home
              animesList={animesList}
              id={anime.mal_id}
              draggable="true"
              title={anime.title}
              img={anime.images.jpg.image_url}
              rating={anime.rating}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
