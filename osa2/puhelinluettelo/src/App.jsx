import { useState } from 'react'
import AddPerson from './AddPerson'
import Persons from './Persons'
import Filter from './Filter'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterPerson, setFilterPerson] = useState(false)
  const [filterPersonInput, setFilterPersonInput] = useState("")

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      filterPersonInput={filterPersonInput}
      setFilterPersonInput={setFilterPersonInput}
      setFilterPerson={setFilterPerson}
      />
      <AddPerson 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filterPersonInput={filterPersonInput}
      />
      <br/>
    </div>
  )
}

export default App
