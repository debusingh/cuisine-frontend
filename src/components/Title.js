import React from 'react';
import { Nav, Collapse, NavbarItem, Jumbotron, Navbar, NavbarBrand, NavItem, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../components-css/Title.css'
import LogoImage from '../logo-tc-jpg-sm.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


export default class Title extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

        console.log('State is now : ' + this.state.isNavOpen);
    }


    render() {
        return (<div style={{width:'100%'}}>
            <Navbar  expand="lg" fixed="top" className="nav-bar" variant="light">
                    <NavbarBrand className="mr-auto" href="/home">
                        <img src={LogoImage} height="50" width="70"
                            alt="TheCuisine" />
                    </NavbarBrand>
                    {/*<Nav className="ml-auto" navbar>
                        <NavLink className="nav-link " to="/home">
                            <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                        <NavLink className="nav-link" to="/addCuisine">
                            <span className="fa fa-edit fa-lg"></span>Add Cuisine
                                </NavLink>
                    </Nav>*/}
                </Navbar>
            <Jumbotron style={{marginTop: '75px'}}>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 style={{ color: 'white' }}>THE Cuisine</h1>
                            <h5 style={{ color: 'white' }}>Regional Cuisine is THE Cuisine</h5>
                        </div>
                    </div>
            </Jumbotron>
        </div>);
    }
}
