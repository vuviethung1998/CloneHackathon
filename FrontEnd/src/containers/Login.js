import React, {Component} from 'react';
import axios from '../axios';
import Bar from '../components/Bar';
import config from '../config'
import Admin from './Admin'
export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            showComponent: false
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
        event.preventDefault();
        axios
            .post(config.rootPath + "/admin/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(data => {
                console.log("Hello");
            })
            .catch((err) => {
                console.error(err);
            });
        document.getElementById('first').style.display='none';
        this.setState({showComponent: true});
    }

    render() {
        return (
            <div>
                <Bar/>
                <div id="first">
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

                {this.state.showComponent
                    ? <Admin/>
                    : null}
            </div>
        )
    }
}
