import React from "react";

const Autocomplete = () => {
  return (
    <>
      <div clasName="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search your character o location"
          aria-label="Recipient's username"
          aria-describedby="button-addon"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon"
        >
          Search
        </button>
      </div>
    </>
  );
};
export default Autocomplete