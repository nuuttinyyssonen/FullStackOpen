import React from "react";
import { useEffect } from "react";
import PhonebookService from "./PhonebookService";

function AddPerson({persons, setPersons, newName, setNewName, newNumber, setNewNumber, filterPersonInput}) {

    let newObj = {
        name: "",
        number: ""
    }
    
    let personId = 0

    useEffect(() => {
        PhonebookService.getAll().then(persons => {
            setPersons(persons)
        })
    }, [])


    const addPerson = (event) => {
        event.preventDefault()
        const nameExists = persons.some(person => person.name == newName)
        const phoneExists = persons.some(person => person.number == newNumber)

        if (nameExists || phoneExists) {
          if(confirm(newName + " is already added to phonebook, replace the old number with a new one?")) {

            PhonebookService.getId(newName).then(id => {
            
                newObj = {
                    name: newName,
                    number: newNumber
                }
    
                PhonebookService.update(id, newObj).then(reponse => {
                    PhonebookService.getAll().then(persons => {
                        setPersons(persons)
                    })
                })
            })

          } else {
            alert(newName + " or " + newNumber + " is already added to phonebook")
          }

        } else {

            newObj = {
            name: newName,
            number: newNumber
            }

            PhonebookService.create(newObj).then(person => {
                PhonebookService.getAll().then(persons => {
                    console.log(persons)
                    setPersons(persons)
                })
            })

        }
    }

    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }
    
    const handleChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }
    
    
    return(
        <div>
            <form>
                <div>
                    name: <input onChange={handleChangeName}  value={newName}/>
                </div>
                <div>
                    phone: <input onChange={handleChangeNumber} value={newNumber}/>
                </div>
            <div>
                <button onClick={addPerson} type="submit">add</button>
            </div>
            </form>
        </div>
    )

}

export default AddPerson