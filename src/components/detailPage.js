import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { state } = location;

  const details = state.list.filter((val) => val.mal_id === state.id);

  return (
    <>
      <div className="container">
        <h1 className="my-4" style={{ textAlign: "center" }}>
          {details[0].title}
        </h1>
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            style={{ textAlign: "center" }}
          >
            <img
              src={details[0].images.jpg.image_url}
              alt="anime.png"
              width="300rem"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="my-4" style={{ textAlign: "center" }}>
              <h3 className="text-danger">Rank : {details[0].rank}</h3>
              <h5 className="text-primary">
                Score : {details[0].score}
                <span> by {details[0].scored_by} peoples</span>
              </h5>
              <p className="text-success">
                Total Episodes : {details[0].episodes}
              </p>
              <p>
                Aired Date :{" "}
                <b>
                  {details[0].aired.prop.from.day}-
                  {details[0].aired.prop.from.month}-
                  {details[0].aired.prop.from.year} to{" "}
                  {details[0].aired.prop.to.day}-
                  {details[0].aired.prop.to.month}-
                  {details[0].aired.prop.to.year}
                </b>
              </p>
              <p className="text-warning">
                Popularity : {details[0].popularity}
              </p>
              <p className="text-info">Release Year : {details[0].year}</p>
            </div>
          </div>
        </div>
        <div className="mx-4 px-4 my-2" style={{ textAlign: "center" }}>
          <p>{details[0].synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
