import "bootstrap/dist/css/bootstrap.min.css";

const Searchform = ({ setSearchItem }) => {
  //   const [searchItem, setSearchItem] = useState("");

  //   const filteredAnimes = animesList.data?.filter((animes) => {
  //     if (searchItem === "") {
  //       return animes;
  //     } else if (animes.title.toLowerCase().includes(searchItem.toLowerCase())) {
  //       return animes;
  //     }
  //   });

  return (
    <>
      <form>
        <div className="input-group">
          <input
            type="text"
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
            className="form-control"
            placeholder="Search anime...."
          />
        </div>
      </form>
    </>
  );
};

export default Searchform;
