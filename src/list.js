import React from "react";

function List(props) {
    return (
        <ul className="qa-container">
            <li
            className="qa-question"
            onClick={()=>props.handleChange(props.index)}>{props.q}</li>
            {props.currentIndex === props.index &&
            <li className="qa-answer">{props.a}</li>}
        </ul>
    );
}

export default List;
