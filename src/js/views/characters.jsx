import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

 const Characters = () => {

  const {store,actions} = useContext(Context)
  
  const {id} = useParams()
  
  useEffect(()=>{
 actions.getPerson(id)
  },[])
 
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-4" key={store.person.id}>
        <div className="card" style={{ width: 30 + "rem" }}>
          <img src={store.person.image} className="card-img-top" alt="..." />
          <div className="card-body border text-center">
            <h5 className="card-title">{store.person.name}</h5>
             <p className="card-text m-1">
              
              <strong>Status:</strong> {store.person.status}
            </p>
            <p className="card-text m-1">
              
              <strong>Species:</strong> {store.person.species}
            </p>
            <p className="card-text ">
              {" "}
              <strong>Gender:</strong> {store.person.gender}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
 export default Characters