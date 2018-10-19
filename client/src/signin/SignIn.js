import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Signin extends Component {
    state = {
        username: '', 
        password: '',
    };

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        e.preventDefault()

        axios
            .post('http://localhost:3300/api/login', this.state)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('jwt', res.data.token)
            })
            .catch(err => console.error ('SIGNIN AXIOS ERROR', err));
        };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                    />
                </div>
                <div>
                    <button type="submit"><Link to="/jokes">Sign In</Link></button>
                </div>
            </form>
        )
    }
}

export default Signin;