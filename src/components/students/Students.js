import { useState } from 'react';
import './form.css'
import { newStudent } from '../../api/apiStudent';

const Students = () => {
    const [values, setValues] = useState({
        name: '',
        age: '',
        hobbies: [],
    });

    const { name, age, hobbies } = values;

    let hobby;

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleHobbiesChange = (e) => {
        hobby = e.target.value;
    }

    const addHobbies = () => {
        hobbies.push(hobby);
        setValues({
            ...values,
            hobbies: hobbies
        })
        document.getElementById('hobbies').value = '';
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(values));
        newStudent(values);
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
    }

    return (<
        div className="form-body" >
        <
        div className="container" >
            <
        form id="form"
                className="form"
                onSubmit={handleSubmit} >
                <
        h2 > Student Registration Form < /h2>  <
        div className="form-control" >
                        <
        label htmlFor="name" > Name < /label> <
                                input type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Enter Student's Name"
                                onChange={handleChange}
                                required />
                            <
        small > Error message < /small> < /
        div > <
        div className="form-control" >
                                    <
        label htmlFor="age" > Age < /label> <
                                            input type="text"
                                            id="age"
                                            name="age"
                                            value={age}
                                            placeholder="Enter Student's Age"
                                            onChange={handleChange}
                                            required />
                                        <
        small > Error message < /small> < /
        div > <
        div className="form-control form-control-hobbies" >
                                                <
        label htmlFor="hobbies" > Hobbies < /label>  <
                                                        input type="text"
                                                        id="hobbies"
                                                        name="hobbies"
                                                        placeholder="Enter Hobbies"
                                                        onChange={handleHobbiesChange}
                                                    />   <
        button className="btn-hobbies"
                                                        type="button"
                                                        onClick={addHobbies} > Add < /button> <
        small > Error message < /small> < /
        div > <
        button > Submit < /button> < /
        form > <
        /div> < /
        div >
                                                                );
}

                                                                export default Students;