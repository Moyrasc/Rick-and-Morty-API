import React from "react";


import "../../styles/demo.css";

export const Locations = () => {
	
	return (
		<>
		<div className="mainContainer mt-5">
        <div className="card mb-3 border-none">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://picsum.photos/800/500?random" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 card-body">
              <div className="card-body">
                <h1 className="card-title text-dark text-center">
                  location.name
                </h1>
                <p className="card-text text-dark text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
	)
};
