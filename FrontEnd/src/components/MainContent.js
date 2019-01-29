import React, {Component} from 'react'
import {MDBBtn} from "mdbreact";
import {Link} from 'react-router-dom'
import {Button, ButtonToolbar} from 'reactstrap'
import axios from '../axios'
import config from '../config'

export default class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: [],
            background: [],
            emotion: 'sad',
            genere: 'Ballad',
            weather: 'rain'
        }

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    componentDidMount() {
        console.log(config)
        axios
            .get(config.rootPath+"/song/get")
            .then(data => {
                this.setState({
                    song: data
                        .data
                        .map(item => ({
                            ...item,
                            emotion: item
                                .emotion
                                .toLowerCase()
                        }))
                });

                return axios.get(config.rootPath+ '/background/get');
            })
            .then(bg => {
                this.setState({background: bg.data});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleClick = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    render() {
        const displayedSong = this
            .state
            .song
            .filter(sng => sng.generes.includes(this.state.genere) && sng.emotion.includes(this.state.emotion));
        const displayedBackground = this
            .state
            .background
            .filter(bg => bg.title.includes(this.state.weather));
        console.log(displayedSong);
        console.log(displayedBackground);
        return (
            <div className="container">
                <div className="emojiBar ">
                    <h1>GENRE</h1>
                    <form>
                        <div className="form-group">
                            <select
                                className="form-control shadowBox"
                                name="genere"
                                onChange={this.handleChange}
                                value={this.state.genere}>
                                <option value="Pop">Pop</option>
                                <option value="Ballad">Ballad</option>
                                <option value="Aucostic">Aucostic</option>
                                <option value="Rap">Rap</option>
                                <option value="Hiphop">Hiphop</option>
                                <option value="RnB">RnB</option>
                                <option value="Folk">Folk</option>
                                <option value="Electro">Electro</option>
                                <option value="Indie">Indie</option>
                                <option value="Blue">Blue</option>
                                <option value="US-UK">US-UK</option>
                                <option value="Vpop">Vpop</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="emojiBar">
                    <h1>EMOTION</h1>
                    <div className="btnBar shadowBox">
                        <ButtonToolbar >
                            <Button
                                className="btn btn1 btn-light btn-circle btn-lg"
                                name="emotion"
                                onClick={this.handleClick}
                                value="excited"></Button>
                            <Button
                                className="btn btn3 btn-light btn-circle btn-lg"
                                name="emotion"
                                onClick={this.handleClick}
                                value="sad"></Button>
                            <Button
                                className="btn btn2 btn-light btn-circle btn-lg"
                                name="emotion"
                                onClick={this.handleClick}
                                value="bored"></Button>
                            {/* <Button
                                className="btn btn4 btn-light btn-circle btn-lg"
                                name="emotion"
                                onClick={this.handleClick}
                                value="worried"></Button> */}
                            <Button
                                className="btn btn5 btn-light btn-circle btn-lg"
                                name="emotion"
                                onClick={this.handleClick}
                                value="angry"></Button>
                        </ButtonToolbar>
                    </div>
                </div>

                <div className="emojiBar">
                    <h1>WEATHER</h1>
                    <div className="btnBar shadowBox">
                        <ButtonToolbar>
                            <Button
                                className="btn btn6 btn-light btn-circle btn-lg"
                                name="weather"
                                onClick={this.handleClick}
                                value="sunny"></Button>
                            <Button
                                className="btn btn7 btn-light btn-circle btn-lg"
                                name="weather"
                                onClick={this.handleClick}
                                value="night"></Button>
                            {/* <Button
                                className="btn btn8 btn-light btn-circle btn-lg"
                                name="weather"
                                onClick={this.handleClick}
                                value="cloudy"></Button> */}
                            <Button
                                className="btn btn9 btn-light btn-circle btn-lg"
                                name="weather"
                                onClick={this.handleClick}
                                value="rainy"></Button>
                            <Button
                                className="btn btn10 btn-light btn-circle btn-lg"
                                name="weather"
                                onClick={this.handleClick}
                                value="winter"></Button>
                        </ButtonToolbar>
                    </div>
                </div>

                <div className="emojiBar">
                    <div className="btnBar">
                        <Link
                            to={{
                            pathname: "/playlist",
                            state: {
                                song: displayedSong,
                                background: displayedBackground
                            }
                        }}>
                            <MDBBtn outline color="primary">click me!</MDBBtn>
                        </Link>
                    </div>
                </div>

            </div>

        )
    }
}
