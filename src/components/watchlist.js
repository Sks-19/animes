import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="card my-2">
          <img
            className="card-img-top"
            src={watchListData[0]?.images.jpg.image_url}
            alt="animes.jpg"
            height="350rem"
          />
          <div className="card-body">
            <h5 className="card-title text-white">{watchListData[0]?.title}</h5>
            <p className="card-text text-white">{watchListData[0]?.rating}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchList;
