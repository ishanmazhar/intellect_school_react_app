import axios from 'axios';

export const signup = user => {
    axios.post('http://localhost:3002/api/users', user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => console.log(response.data)); 
}

export const login = user => {
    axios.post('http://localhost:3002/api/auth', user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => console.log(response.data)); 
}