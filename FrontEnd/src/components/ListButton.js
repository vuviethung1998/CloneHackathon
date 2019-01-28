import React, {Component} from 'react'
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
export default class componentName extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this
            .handleClick
            .bind(this);
        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            dropdownOpen: true
        };
        this.onMouseEnter = this
            .onMouseEnter
            .bind(this);
        this.onMouseLeave = this
            .onMouseLeave
            .bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();
        this
            .props
            .getLinkButton(event.target.value);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }

    render() {
        return (
            <div>
                <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    onMouseOver={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}>
                    <DropdownToggle caret color="primary" className="btnDrop">
                        Youtube Song List
                    </DropdownToggle>
                    <DropdownMenu id="scrollable-menu" className="btnDrop">
                        {this
                            .props
                            .links
                            .map(a => {
                                return (
                                    <div>
                                        <DropdownItem
                                            caret
                                            color="primary"
                                            name="link"
                                            value
                                            ={a.link}
                                            onClick={this.handleClick}>
                                            {a.name}
                                        </DropdownItem>
                                    </div>
                                );
                            })}
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        )
    }
}