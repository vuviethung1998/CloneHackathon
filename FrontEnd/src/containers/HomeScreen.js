import React, {Component} from 'react'
import MainContent from '../components/MainContent';
import Bar from '../components/Bar';

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Bar/>
                <MainContent/>
            </div>
        )
    }
}
