import axios from "axios"
const url = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (obj) => {
    const request = axios.post(url, obj)
    return request.then(response => response.data)
}

const deleteRecord = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`)
    return request.then(response => response.data)
} 

const update = (id, obj) => {
    const request = axios.put(`http://localhost:3001/persons/${id}`, obj)
    return request.then(response => response.data)
}

const getId = (name) => {
    const request = axios.get(url)
    return request.then(response => {
        let persons = response.data
        for(let i = 0; i < persons.length; i++) {
            if(persons[i].name == name) {
                return persons[i].id
            }
        }
    })
}

export default {
    getAll: getAll,
    create: create,
    deleteRecord: deleteRecord,
    update: update,
    getId: getId
}