import "bootstrap/dist/css/bootstrap.min.css";

const Searchform = ({ setSearchItem }) => {
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
