import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const WatchList = (props) => {
  let cardId = localStorage.getItem("cardId");

  const drop = (e) => {
    e.preventDefault();
    const id = localStorage.getItem("cardId");

    cardId = id;
    window.location = window.location;
  };

  console.log("cardId-outer", cardId);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnd = (e) => {
    console.log("DragENd");
  };

  const watchListData = props.animesList.filter(
    (val) => val.mal_id === Number(cardId)
  );

  return (
    <>
      <h1 className="text-white py-2">WatchList</h1>
      <div
        onDrop={drop}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        className="container my-4 watchDiv"
        style={{ width: "20rem", height: "30rem", border: "1px solid gray" }}
      >
        {cardId > 0 ? (
          <div className="card my-2" style={{ backgroundColor: "#6e7a31" }}>
            <img
              className="card-img-top"
              src={watchListData[0]?.images.jpg.image_url}
              alt="animes.jpg"
              height="290rem"
            />
            <div className="card-body">
              <h5 className="card-title text-white">
                {watchListData[0]?.title}
              </h5>
              <p className="card-text text-white">{watchListData[0]?.rating}</p>
            </div>
            <NavLink
              to={{
                pathname: "/detail",
              }}
              state={{ id: Number(cardId), list: props.animesList }}
            >
              <button type="button" className="btn btn-info m-2">
                More Details
              </button>
            </NavLink>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default WatchList;
