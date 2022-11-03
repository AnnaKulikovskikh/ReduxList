export function addService(person) {
    return {
        type: 'ADD_SERVICE',
        data: person
    }
}

export function delService(id) {
    return {
        type: 'DEL_SERVICE',
        data: id
    }
}