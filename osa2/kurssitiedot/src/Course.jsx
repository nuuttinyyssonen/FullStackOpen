import React from "react";

function Course({course}) {

    const map = course.map((courseItem) => {
        const courseExercises = courseItem.parts.reduce((courseTotal, part) => {
            return courseTotal + part.exercises;
        }, 0)
        
        const parts = courseItem.parts.map(item => {
            return(
                <div>
                    <h3>{item.name} {item.exercises}</h3>
                </div>
            )
        })

        return (
            <div>
                <h1>{courseItem.name}</h1>
                {parts}
                <h3>Total exercises {courseExercises}</h3>
            </div>
        )
    })
    
    return(
        <div>
            {map}
        </div>
    )
}

export default Course