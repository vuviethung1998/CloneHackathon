import React, { Component } from 'react'
import Bar from '../components/Bar';

export default class About extends Component {
  render() {
    return (
      <div>
        <Bar/>
        <h1  className="text-center">Hello everyone</h1>
        <h2  className="text-center">Day la team GGWP</h2>
        <h2  className="text-center">Team chung toi gom 3 nguoi:</h2>
        <h3  className="text-center">Vu Viet Hung</h3>
        <h3  className="text-center">Nguyen Thanh Nam</h3>
        <h3  className="text-center">Dinh</h3>
        <br />  
      </div>
    )
  }
}
