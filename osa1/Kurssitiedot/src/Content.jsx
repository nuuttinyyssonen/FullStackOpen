import React from "react";
import Part from "./Part";
import { useEffect } from "react";

const Content = (props) => {
    let items = props.parts
    let total = items[0].exercises + items[1].exercises + items[2].exercises
    return(
        <div>
            <Part part={props.parts}/>
            <p>{props.parts[0].exercises}</p>
            <Part part={props.parts}/>
            <p>{props.parts[1].exercises}</p>
            <Part part={props.parts}/>
            <p>{props.parts[2].exercises}</p>
            <h2>Total</h2>
            <p>{total}</p>
        </div>
    )
}

export default Content