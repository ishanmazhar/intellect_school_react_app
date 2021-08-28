import axios from 'axios';

export const newStudent = student => {
    axios.post('http://localhost:3002/api/students', student, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => console.log(response.data)); 
}