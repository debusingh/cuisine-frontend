import React from 'react';
import { Nav, Collapse, NavbarItem, Jumbotron, Navbar, NavbarBrand, NavItem, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../components-css/Footer.css'
import LogoImage from '../logo-tc-jpg-sm.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


export default class Footer extends React.Component {


    render() {
        return (<div style={{width:'100%', paddingTop: "50px"}}>
            <Navbar  expand="lg" fixed="bottom" className="nav-bar" variant="light">
                    <Nav className="ml-auto" navbar>
                        <a target="_blank" href="https://www.facebook.com/THERealCuisine/">
                            <span className="fa fa-facebook-official"></span>  Follow us on Facebook!!!
                                    </a>
                    </Nav>
                </Navbar>
         
        </div>);
    }
}
