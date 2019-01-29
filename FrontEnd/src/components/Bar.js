import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../img/download.png'
import {Link} from 'react-router-dom'

export default class Bar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                    <Link to={`/`}>
                        <NavbarBrand className="navbar-brand text">
                            <img src={logo} alt="logo"/>
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse className="" isOpen={this.state.isOpen} navbar>
                        <Nav className="nav navbar-nav mr-auto">
                            <NavItem>
                                <Link to={`/submit`}>
                                    <NavLink><span className="textColor">Submit song</span></NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={`/about`}>
                                    <NavLink><span className="textColor">About</span></NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className="nav nabar-nav ml-auto">
                            <NavItem>
                                <Link to={`/login`}>
                                    <NavLink><span className="textColor">Login</span></NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
