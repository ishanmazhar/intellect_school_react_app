import { useState } from 'react';
import './form.css'
import { login } from '../../api/apiAuth';

const Login = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '', 
    });

    const { name, email, password } = values;

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value, 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(values)); 
        login(JSON.stringify(values));
    }
    return (
        <div className="form-body">
            <div className="container">
                <form id="form" className="form" onSubmit={handleSubmit}> 
                    <h2>Login</h2>
                    <div className="form-control">
                        <label htmlFor="name">Username</label>
                        <input type="text" id="name" name="name" value={name}
                            placeholder="Enter username" onChange={handleChange} />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" value={email}
                            placeholder="Enter email" onChange={handleChange} />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password}
                            placeholder="Enter password" onChange={handleChange} />
                        <small>Error message</small>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login; 