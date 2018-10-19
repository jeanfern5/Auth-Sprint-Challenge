import React, {Component} from 'react';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: [],
    };

    componentDidMount() {
        const token = localStorage.getItem('jwt');

        const options = {
            headers: {
                Authorization: token,
            }
        };

        axios  
            .get('http://localhost:3300/api/jokes', options)
            .then(res => {
                console.log(res.data);
                this.setState({jokes: res.data})
            })
            .catch(err => console.error('JOKES AXIOS ERROR', err));
    }

    render() {
        return (
            <div>
                <h2>Jokes List</h2>
                <ul>
                    {this.state.jokes.map(joke => (
                        <li key={joke.id}>
                            <p>Type: {joke.type} </p>
                            <p>Setup: {joke.setup} </p>
                            <p>Punchline: {joke.punchline} </p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
};

export default Jokes;