import React from "react";

function AddPerson({persons, setPersons, newName, setNewName, newPhone, setNewPhone}) {

    const addPerson = (event) => {
        event.preventDefault()
        const nameExists = persons.some(person => person.name == newName)
        const phoneExists = persons.some(person => person.phone == newPhone)
        if (nameExists || phoneExists) {
          alert(newName + " or " + newPhone + " is already added to phonebook")
        } else {
          const newObj = {
            name: newName,
            phone: newPhone
          }
          setPersons(persons.concat(newObj))
          setNewName("")
          setNewPhone("")
        }
    }

    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }
    
      const handleChangeNumber = (event) => {
        setNewPhone(event.target.value)
    }


    return(
        <div>
            <form>
                <div>
                    name: <input onChange={handleChangeName}  value={newName}/>
                </div>
                <div>
                    phone: <input onChange={handleChangeNumber} value={newPhone}/>
                </div>
            <div>
                <button onClick={addPerson} type="submit">add</button>
            </div>
            </form>
        </div>
    )

}

export default AddPerson