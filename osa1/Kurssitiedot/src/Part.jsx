import React from "react";

const Part = (props) => {

    return(
        <div>
            <h2>{props.part[0].name}</h2>
            <h2>{props.part[1].name}</h2>
            <h2>{props.part[2].name}</h2>
        </div>
    )
}

export default Part