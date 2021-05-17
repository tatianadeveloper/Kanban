import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { ROUTES } from '../../app/constants.js';

class NavHeader extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
    };

    const titleStyle = {
      fontSize: '24px',
      fontWeight: '500',
    };
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
            <h2 style={titleStyle}>Kanban board</h2>
          </Navbar.Brand>

          <Navbar.Collapse
            expand='lg'
            id='responsive-navbar-nav'
            className='justify-content-end '
          >
            <Nav className='ml-auto bg-light'>
              {ROUTES.map((route) => {
                return (
                  <Nav.Link
                    className='ml-2 ml-md-0'
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
