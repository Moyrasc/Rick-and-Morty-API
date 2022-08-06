import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Autocomplete = () => {

    const {store, actions} = useContext(Context)
  return (
    <>
      <div className="input-group mb-3 " style={{width: 350 + "px"}}>
        <input
          type="text"
          className="form-control "
          placeholder="Search your character o location"
          aria-label="Recipient's username"
          aria-describedby="button-addon"
          onChange={()=>{actions.searchCharacter()}}
        
        />
        <Link to={`/characters/${store.characters.id}`}>
        <button
          className="btn btn-outline-secondary btn-input text-dark"
          type="button"
          id="button-addon"
        >
          Search
        </button>
        </Link>
      </div>
    </>
  );
};
export default Autocomplete