import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.changePage();
    this.props.history.listen(() => {
      //this.changePage();
    });
  }
  render() {
    const activeStyle = {
      fontWeight: 'bold',
    };
    const navRoutes = [
      { name: 'Home', path: '/boards' },
      { name: 'Contact', path: '/boards' },
    ];

    return (
      <>
        <Navbar
          style={{
            borderRadius: '10px',
            height: '60px',
          }}
          bg='light'
          variant='light'
          sticky='top'
          collapseOnSelect
          expand='md'
          className='mx-auto my-2 shadow-sm'
        >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Brand as={NavLink} exact to='/'>
            Kanban board
          </Navbar.Brand>

          <Navbar.Collapse
            expand='lg'
            id='responsive-navbar-nav'
            className='justify-content-end '
          >
            <Nav className='ml-auto bg-light'>
              {navRoutes.map((route) => {
                return (
                  <Nav.Link
                    as={NavLink}
                    to={route.path}
                    activeStyle={activeStyle}
                    eventKey='1'
                  >
                    <span>{route.name}</span>
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavHeader);
