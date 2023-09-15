import React from "react";

function Button(props) {

    return(
        <div>
            <button onClick={props.HandleClickGood}>{props.goodBtn}</button>
            <button onClick={props.HandleClickNeutral}>{props.neutralBtn}</button>
            <button onClick={props.HandleClickBad}>{props.badBtn}</button>
        </div>
    )
}

export default Button