import "bootstrap/dist/css/bootstrap.min.css";
import "./filterAnime.css";
import GenresList from "./genresList";
const FilteredAnimes = ({ animesList, setAnimesList }) => {
  // Checked genres
  var checkedAnime = [];

  //Function to get checked genres
  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      checkedAnime.push(name);
    } else {
      checkedAnime.pop(name);
    }
  };

  //Funtion to filter data based on checked genres
  const showFilter = () => {
    let displayBlock = document.querySelector(".dropdown-content");

    if (displayBlock.style.display === "none") {
      displayBlock.style.display = "block";
    } else {
      displayBlock.style.display = "none";
    }
    setAnimesList(animesList);
  };

  const handleFilter = () => {
    console.log("data", checkedAnime, checkedAnime.length);
    document.querySelector(".dropdown-content").style.display = "none";
    const filteredData = animesList.filter((val) => {
      const matchedData = val.genres.map((genres) => {
        for (let i = 0; i < checkedAnime.length; i++) {
          if (checkedAnime[i] === genres.name) {
            return true;
          }
        }
      });
      if (checkedAnime.length === 0) {
        return val;
      } else if (matchedData.includes(true)) {
        return val;
      }
    });
    setAnimesList(filteredData);
  };

  return (
    <>
      <div className="dropdown" style={{ float: "right" }}>
        <button
          type="button"
          className="btn btn-primary dropdownbtn"
          onClick={showFilter}
        >
          Filter
        </button>
        <div id="showDropdown" className="dropdown-content">
          {GenresList.map((data) => {
            return (
              <div className="form-check mx-2 py-1" key={data.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={data.name}
                  //   checked={data?.isChecked || false}
                  onChange={handleChange}
                  id="checkbox"
                />
                <label className="form-check-label" htmlFor="checkbox">
                  {data.name}
                </label>
              </div>
            );
          })}
          <button
            type="button"
            className="btn btn-success m-4"
            onClick={handleFilter}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default FilteredAnimes;
