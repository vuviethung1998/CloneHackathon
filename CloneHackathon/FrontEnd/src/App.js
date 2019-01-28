import React, {Component} from 'react';
import './App.css';
import HomeScreen from './containers/HomeScreen';
import {BrowserRouter, Route} from 'react-router-dom';
import Playlist from './containers/Playlist';
import Submit from './containers/Submit';
import About from './containers/About';
import Admin from './containers/Admin';
import login from './containers/Login';
class App extends Component {   
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                  <Route exact path ="/" render = {props =>{
                      return(
                        <HomeScreen/>
                      )
                  }}/>
                  <Route path ="/playlist" component={Playlist}/>
                  <Route path ="/submit" component={Submit}/>
                  <Route path ="/about" component={About}/>
                  <Route path="/admin" component={Admin}/>
                  <Route path="/login" component={login}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
