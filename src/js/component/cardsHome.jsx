import React  from "react";
import Autocomplete from "./autocomplete.jsx";
import CardCharacter from "./cardCharacter.jsx";
import CardLocations from "./cardLocations.jsx";
import Footer from "./footer.jsx";


const CardsHome = () => {

    return (
      <>
      <div className="home-container">
      <div className="d-flex justify-content-center ">
        <Autocomplete/>
      </div>
        <h2 className="row-title  mb-4 text-white">Characters</h2>
        <div className="row row-cols-1 row-cols-md-4 row-col-lg">
          <CardCharacter/>
        </div>
        <h2 className="row-title  mb-4 mt-4 text-white">Locations</h2>
        <div className="d-flex justify-content-start">
            <CardLocations/>
        </div >
        </div>
        <div className="mt-4">
          <Footer/>
        </div>

        </>
    );
};
export default CardsHome;