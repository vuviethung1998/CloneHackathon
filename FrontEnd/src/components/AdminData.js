import React, { Component } from 'react'
import {Table} from 'reactstrap'

export default class AdminData extends Component {
  render() {
    return (
      <div>
        <Table dark className="container">
        <thead>
          <tr>
            <th className="col-6">Name</th>
            <th >Singer</th>
            <th >Emotion</th>
            <th >Genres</th>
            <th >Link</th>
            <th >Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.sng.name}</td>
            <td>{this.props.sng.singer}</td>
            <td>{this.props.sng.emotion}</td>
            <td>{this.props.sng.genres}</td>
            <td>
              <a href={this.props.sng.link}>{this.props.sng.link}</a>
            </td>
            <td>
              <button className="text-primary">Edit</button>
              <button className="text-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
  }
}
