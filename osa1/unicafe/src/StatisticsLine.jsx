import React from "react";

function StatisticLine(props){

    

    return(
        <table>
            <tr>
                <td>{props.text}: {props.value}</td>
            </tr>
        </table>
    )
}

export default StatisticLine