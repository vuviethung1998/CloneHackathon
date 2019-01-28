import React, { Component } from 'react'
import {Table} from 'reactstrap'
import axios from '../axios';

export default class AdminData extends Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick (id) {
    axios.delete(`localhost:5000/admin/${id}`)
      .then( res=>{
          console.log(res);
        }
      )
  }
  
  render() {
    return (
      <div className="container">
        <Table dark responsive>
          <thead>
            <tr>
              <th className="col-xs-4">Name</th>
              <th className="col-xs-1">Singer</th>
              <th className="col-xs-1">Emotion</th>
              <th className="col-xs-1">Genres</th>
              <th className="col-xs-4">Link</th>
              <th className="col-xs-2">Option</th>
            </tr>
          </thead>  
          <tbody>
              {
                this.props.sng.map(a=>{
                  return(
                      <tr>
                        <td className="col-xs-4">{a.name}</td>
                        <td className="col-xs-1">{a.singer}</td>
                        <td className="col-xs-1">{a.emotion}</td>
                        <td className="col-xs-1">{a.generes}</td>
                        <td className="col-xs-4">
                          <a href={a.link}>{a.link}</a>
                        </td>
                        <td className="col-xs-2">
                          <button className="text-danger" onClick={()=>this.handleClick(a._id)} >Delete</button>
                        </td>
                      </tr>
                  )})}
          </tbody>
        </Table>
      </div>
    )
  }
}
