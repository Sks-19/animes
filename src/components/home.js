import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    localStorage.setItem("cardId", target.id);
    console.log(target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        id={props.id}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        className="cardBox"
      >
        <div
          className="card m-4 myCard"
          style={{ width: "17rem", margin: "auto" }}
        >
          <img
            className="card-img-top"
            src={props.img}
            alt="animes.jpg"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.rating}</p>
          </div>
          <NavLink
            to={{
              pathname: "/detail",
            }}
            state={{ id: props.id, list: props.animesList }}
          >
            <button type="button" className="btn btn-info m-2">
              More Details
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
