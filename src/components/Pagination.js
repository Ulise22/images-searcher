import React from "react";
import './Pagination.css'

const Pagination = props => {
    return(
        <div>
            <button onClick={props.previousPage} type="button" >Previous &larr;</button>
            <button onClick={props.nextPage} type="button" >Next &rarr;</button>
        </div>
    )
}

export default Pagination;