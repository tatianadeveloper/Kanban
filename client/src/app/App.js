import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Container from 'react-bootstrap/Container';
import configureStore from './configureStore';
import Router from './router';

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Container fluid={true}>
          <Router />
        </Container>
      </Provider>
    </>
  );
}

export default App;
