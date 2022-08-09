import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm  navbar-expand opacity-75 ">
      <div className="container-fluid">
        <div className="container ">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="logo-rick-morty"
              width="90"
              height="90"
              className="rounded-circle"
            />
          </Link>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-sm btn-dark dropdown-toggle me-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favourites
          </button>
          <ul className="dropdown-menu">
            {store.favorites.length > 0 ? (
              store.favorites.map((fav, index) => (
                <li key={index} className="dropdown-item">
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/characters/${fav.id}`}
                  >
                    {fav.name}
                  </Link>
                  <button
                    className="border rounded-circle ms-2"
                    onClick={() => {
                      actions.deleteFavorites(fav.name);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item text-center">(empty)</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
