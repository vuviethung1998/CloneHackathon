import React, {Component} from 'react'
import Bar from '../components/Bar';
import Form from '../components/Form';

export default class Playlist extends Component {
    render() {
        // let link = this.props.location.state.song.map(a => a.link)
        let link =this.props.location.state.song;
        // console.log(link);
        // console.log(this.props.location.state.song[0].link)
        let bgLink =this.props.location.state.background[0].image;
        console.log(bgLink);
        let backGround = {
            height: "100vh",
            backgroundImage: `url(${bgLink})`,
            backgroundSize: "cover"
        }
        return (
            <div style ={backGround}>
                <Bar/> 
                <Form song ={link}/>
            </div>
        )
    }
}