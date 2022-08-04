import React  from "react";



// Importo componentes
import CardCharacter from "./cardCharacter.jsx";
import CardLocations from "./cardLocations.jsx";


const CardsHome = () => {

    return (
      <>
        <h2 className="row-title  mb-4 text-white">Characters</h2>
        <div className="d-flex justify-content-start ">
          <CardCharacter/>
        </div>
        <h2 className="row-title  mb-4 mt-4 text-white">Locations</h2>
        <div className="d-flex justify-content-start">
            <CardLocations/>
        </div>
        
      </>
    );
};
export default CardsHome;