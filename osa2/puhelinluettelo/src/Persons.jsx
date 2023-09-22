import React from "react";


function Persons({persons, filterPersonInput}) {

    const personsMapFiltered = persons.map((person, key) => {
        let testPerson = person.name.toLowerCase()
        if (testPerson.startsWith(filterPersonInput)) {
          return(
            <div key={key}>
              <h3>{person.name} {person.phone}</h3>
            </div>
          )
        }
    })

    
    const personsMap = persons.map((person, key) => {
        return(
          <div key={key}>
            <h3>{person.name} {person.phone}</h3>
          </div>
        )
    })

    return(
        <div>
            {personsMapFiltered ? personsMapFiltered : personsMap}
        </div>
    )
}

export default Persons;