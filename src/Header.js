import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
import Home from './Home';
import NotFound from './NotFound';


class Header extends Component {

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">React-Bootstrap</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem><Link to="/">Home</Link></NavItem>
                            <NavItem><Link to="/github">GitHub</Link></NavItem>
                        </Nav>
                    </Navbar>
                    <Switch>
                    <Route path="/github/user/:login/:score" component={GitHubUser} />
                    <Route path="/github" component={GitHub} />
                    <Route exact path="/" component={Home} />
                    <Route path="/*" component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}

export default Header;