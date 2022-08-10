import React  from "react";
import Autocomplete from "./autocomplete.jsx";
import CardCharacter from "./cardCharacter.jsx";
import CardLocations from "./cardLocations.jsx";
import Pagination from "./pagination.jsx";


const CardsHome = () => {

    return (
      <>
      <div className="home-container">
      <div className="d-flex justify-content-center">
        <Autocomplete/>
      </div>
        <h2 className="row-title  mb-4 text-white fs-1 text">Characters</h2>
        <div className="row row-cols-2 row-cols-md-4 row-col-lg">
          <CardCharacter/>
          <Pagination/>
        </div>
        <h2 className="row-title  mb-4 mt-4 text-white fs-1 text">Locations</h2>
        <div className="row row-cols-2 row-cols-md-4 row-col-lg ">
            <CardLocations/>
            <Pagination/>
        </div >
        </div>

        </>
    );
};
export default CardsHome;