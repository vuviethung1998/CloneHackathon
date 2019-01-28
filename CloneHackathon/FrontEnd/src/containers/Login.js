import React, {Component} from 'react';
import axios from '../axios';
import Bar from '../components/Bar';
import config from '../config'

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        alert('connecting username: ' + this.state.username);
        event.preventDefault();
        axios
            .post(config.rootPath + "/admin/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(data => {
                window.location.href = "/admin";
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <div>
                <Bar/>
                <h1
                    className="text-center"
                    style={{
                    margin: "50px"
                }}>Login page</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-center">
                        <div>
                            <label>Username:
                                <input type="text" name="username" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div>
                            <label>Password: 
                                <input type="password" name="password" onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="SUBMIT"/>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
