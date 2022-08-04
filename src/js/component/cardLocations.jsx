import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardLocations = () => {
  // creo variables de estado
  const [location, setLocation] = useState([]);

  // petición de datos a la API
  useEffect(() => {
    const getLocation = async () => {
      try {
        await fetch("https://rickandmortyapi.com/api/location")
          .then((res) => res.json())
          .then((data) => setLocation(data.results));
      } catch {
        (err) => console.error(err);
      }
    };
    getLocation();
  }, []);

  return location.map((locations) => {
    return (
      <div className="container-fluid d-flex " key={locations.id}>
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            src="https://play-lh.googleusercontent.com/fVRg0B1Pgo0l93mSrqSnqZSNNcaqEyMGc-Y2qWqhwOE-IhYe1ogAnnFuieK9iZ8VVg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body border">
            <h5 className="card-title">{locations.name}</h5>
            {/* <p className="card-text m-1">
              {" "}
              <strong>Type: </strong>
              {locations.type}{" "}
            </p>
            <p className="card-text m-1">
              {" "}
              <strong>Dimension: </strong> {locations.dimension}
            </p> */}

            <div className=" d-flex justify-content-between">
              <Link to={`/locations/${locations.id}`}>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm border-0 p-0 m-0 rounded-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-info-circle "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </button>
              </Link>
              <button className="btn btn-outline-warning btn-sm border-0 p-0 m-0 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>save</title>
                  <path
                    d="M18.957 11.217c-1.003 1.352-2.221 2.754-3.604 4.136-5.156 5.157-10.584 8.03-12.66 5.954-1.236-1.237-.772-3.468.845-6.237A9 9 0 0 1 15.071 3.538c2.768-1.617 5-2.081 6.236-.845 1.198 1.199.747 3.514-.84 6.25a9.003 9.003 0 0 1-7.32 11.985 1 1 0 0 1-.252-1.985 7.003 7.003 0 0 0 6.062-7.726zM18.21 8.77a7 7 0 1 0-9.443 9.443c1.648-1.073 3.447-2.549 5.171-4.273 1.724-1.724 3.2-3.522 4.272-5.17zM6.786 19.338a9.011 9.011 0 0 1-2.123-2.124c-.675 1.423-.823 2.411-.556 2.679.254.253 1.234.13 2.679-.555zM17.214 4.663a9.051 9.051 0 0 1 2.123 2.124c.685-1.445.809-2.426.556-2.68-.268-.267-1.256-.12-2.68.556z"
                    fill="#000"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
export default CardLocations;
