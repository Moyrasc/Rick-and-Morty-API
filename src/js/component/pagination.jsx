import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Pagination = () =>{
    const {store, actions} = useContext(Context)
return (
    <nav>
        <ul className="pagination">
            <li className="page-item">
                <button className={`btn btn-dark shadow-sm ${!store.info_page ? "invisible" : ""}`}onClick={() => actions.getPersons(store.info_page)}>Previous</button>
            </li>
            <li className="page-item">
                <button className={`btn btn-dark shadow-sm ${!store.info_page ? "invisible" : ""}`}onClick={() => actions.getPersons(store.info_page)}>Next</button>
            </li>
        </ul>
    </nav>
)
}
export default Pagination
