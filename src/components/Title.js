import React from 'react';
import { Nav, Collapse, NavbarItem, NavbarToggle, Jumbotron, Navbar, NavbarBrand, NavItem, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../components-css/Title.css'
import LogoImage from '../logo-tc-jpg-sm.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import FacebookLogin from 'react-facebook-login';
import Image from 'react-bootstrap/Image'




export default class Title extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            eMail: '',
            picture: null

        };

        this.toggle = this.toggle.bind(this);
        this.hideNav = this.hideNav.bind(this);

    }

    toggle() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }

    hideNav() {

        console.log('OnBlur Called...');
        this.setState({
            isNavOpen: false
        });

    }

    responseFacebook = (response) => {
        console.log(response);

        this.setState({
            loggedIn: true,
            eMail: response.email,
            picture: response.picture.data.url
        }

        )
    }




    render() {

        console.log('==> Picture : ', this.state.picture);
        let headerContent;
        let titleBar;

        if (this.state.loggedIn) {

            headerContent = (
                <div class="row" className="d-flex align-items-center" style={{height: '100%'}}>
                    <div class="col-xs-6 col-4" className="d-flex align-items-flex-end" >
                        <Image src={this.state.picture} thumbnail />
                    </div>
                    <div class="col-xs-6 col-8"  style={{fontSize: '1em'}} className="d-flex align-items-flex-start"   >


                       {/* <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.toggle} />
                        <Navbar.Collapse id="basic-navbar-nav">*/}
                            <Nav className="mr-auto" navbar>

                                {/*<NavLink className="nav-link row-12" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>*/}
                                <NavLink className="nav-link row-12" to="/addCuisine">
                                    <span className="fa fa-edit fa-lg"></span>Add Cuisine
                                </NavLink>
                                
                            </Nav>
                       {/* </Navbar.Collapse>*/}
                    </div>

                </div >

            );
        } else {

            headerContent = (
                <div>
                    <FacebookLogin
                        appId="712150759486492"
                        autoLoad
                        fields="name,email,picture"
                        callback={(resonse) => { this.responseFacebook(resonse) }}
                        icon="fa-facebook" />
                </div>
            )
        }


        titleBar =

            (<div style={{ width: '100%' }}>
                <Navbar collapseOnSelect expand="lg" fixed="top" className="nav-bar" variant="light" onBlur={this.hideNav}>
                    <Navbar.Brand className="mr-auto" href="/home">
                        <img src={LogoImage} height="50" width="70"
                            alt="TheCuisine" />
                    </Navbar.Brand>

                    {headerContent}



                </Navbar>


                <Jumbotron style={{ marginTop: '75px' }}>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 style={{ color: 'white' }}>THE Cuisine</h1>
                            <h5 style={{ color: 'white' }}>Regional Cuisine is THE Cuisine</h5>
                        </div>
                    </div>
                </Jumbotron>
            </div>);

        return titleBar;
    }
}
