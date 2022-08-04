import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 const Characters = () => {


  const [person, setPerson] = useState([])
  const {id} = useParams()
  
  useEffect(()=>{
    const getPerson = async () =>{
      try {
        await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data)=> setPerson(data))
        
      } catch (error) {
        console.log(error)
      }
    }
    getPerson()
  },[])
  // console.log(id)
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-4" key={person.id}>
        <div className="card" style={{ width: 30 + "rem" }}>
          <img src={person.image} className="card-img-top" alt="..." />
          <div className="card-body border text-center">
            <h5 className="card-title">{person.name}</h5>
             <p className="card-text m-1">
              {" "}
              <strong>Status:</strong> {person.status}{" "}
            </p>
            <p className="card-text m-1">
              {" "}
              <strong>Species:</strong> {person.species}
            </p>
            <p className="card-text ">
              {" "}
              <strong>Gender:</strong> {person.gender}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
 export default Characters