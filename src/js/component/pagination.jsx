import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Pagination = () =>{
    const {store, actions} = useContext(Context)
return (
    <nav>
        <ul className="pagination">
            <li className="page-item">
                <button className="page-link" onClick={()=>actions.handlePrevious(store.info_page)}>Previous</button>
            </li>
            <li className="page-item">
                <button className="page-link" onClick={()=> actions.handleNext(store.info_page)}>Next</button>
            </li>
        </ul>
    </nav>
)
}
export default Pagination