import React, {Component} from 'react';
import axios from '../axios';
import config from '../config'
import Bar from '../components/Bar';

export default class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: ""
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        this.setState({link: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.link);
        event.preventDefault();
        axios
            .post(config.rootPath + this.state.link, {link: this.state.link})
            .then(data => {
                console.log("success");
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
                }}>Hay gui cho chung toi bai hat yeu thich cua ban</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-center">
                        <label>
                            Link:
                            <input type="text" name="name" onChange={this.handleChange}/>
                        </label>
                        <div>
                            <input type="submit" value="submit"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
