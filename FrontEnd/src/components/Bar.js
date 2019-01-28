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
                        <NavbarBrand className="mr-auto navbar-brand text">
                            <img src={logo} alt="logo"/>
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse className="" isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to={`/submit`}>
                                    <NavLink>Submit song</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={`/about`}>
                                    <NavLink>About</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
