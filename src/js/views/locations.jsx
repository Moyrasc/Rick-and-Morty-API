import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import "../../styles/demo.css";

 const planet = () => {
  
  const [planet, setPlanet] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const getPlanet = async () =>{
      try {
        await fetch(`https://rickandmortyapi.com/api/location/${id}`)
        .then((res) => res.json())
        .then((data)=> setPlanet(data))
        
      } catch (error) {
        console.log(error)
      }
    }
    getPlanet()
  },[])
	
	return (
	
      <div className="container-fluid d-flex justify-content-center mt-4" key={planet.id}>
        <div className="card" style={{ width: 30 + "rem" }}>
          <img
            src="https://play-lh.googleusercontent.com/fVRg0B1Pgo0l93mSrqSnqZSNNcaqEyMGc-Y2qWqhwOE-IhYe1ogAnnFuieK9iZ8VVg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body border">
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text m-1">
              {" "}
              <strong>Type: </strong>
              {planet.type}{" "}
            </p>
            <p className="card-text m-1">
              {" "}
              <strong>Dimension: </strong> {planet.dimension}
            </p>
         </div> 
      </div>
		</div>
	)
};
export default planet