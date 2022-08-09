import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Autocomplete = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="input-group mb-3 " style={{ width: 350 + "px" }}>
        <input
          type="text"
          className="form-control "
          placeholder="Search your character"
          aria-label="Recipient's username"
          aria-describedby="button-addon"
          onChange={(e) => {
            actions.handleFilter(e.target.value);
          }}
          value={store.filterItem.name}
        />
        <div className="searchIcon">
          {store.filterItem.length === 0 ? (
            <SearchIcon />
          ) : (
            <ClearIcon className="btn-clear" onClick={actions.clearInput} />
          )}
        </div>

        {store.filterItem.length != 0 && (
          <div className="filter">
            {store.filterItem.map((person, i) => {
              return (
                <p key={i} className="text-white p-filter">
                  <Link to={`/characters/${person.id}`}>{person.name}</Link>
                </p>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Autocomplete;
