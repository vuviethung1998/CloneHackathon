import React, { Component } from 'react'
import axios from '../axios'
import config from '../config'
import Bar from '../components/Bar'
import AdminData from '../components/AdminData'

export default class Admin extends Component {
    state = {
        song: []
    };

    componentDidMount() {
        axios
            .get(config.rootPath + "/admin")
            .then(data=> {
                this.setState({song: data.data});
            }) 
            .catch(err => console.error(err));
    }
    render() {
        //const allData = this.state.song.map(sng => <AdminData key={sng._id} sng={sng}/>)
        const sng = this.state.song;   
        console.log(sng);
        return (
        <div>
            <Bar/>
            <h1  className="text-center">Day la trang quan ly</h1>
            {/* <br />
            {allData}         */}
            <AdminData sng ={sng}/>
        </div>
        )
    }
}

