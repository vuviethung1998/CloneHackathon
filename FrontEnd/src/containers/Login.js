import React, { Component } from 'react';
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    alert('connecting username: ' + this.state.username);
    event.preventDefault();
    axios
      .post( config.rootPath +"/admin/login" ,{
        username : this.state.username,
        password : this.state.password
      })
      .then(data => {
        window.location.href="/admin";
      })
      .catch((err) => {
        console.error(err);
    });
  }

  render() {
    return (
      <div>
        <Bar/>
        
        <form onSubmit = {this.handleSubmit}>
          <label>
            <input type="text" name="username" onChange={this.handleChange}/>
            <input type="password" name="password" onChange={this.handleChange}/>
          </label>
          <div>
              <input type="submit" value="submit"/>
          </div>
          
        </form>
      </div>
    )
  }
}
