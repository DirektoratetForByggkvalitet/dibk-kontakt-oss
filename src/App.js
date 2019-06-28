import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Wizard } from 'losen';
import store from './store';
import doNotContact from './api/do-not-contact.json';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wizard wizard={doNotContact} />
      </Provider>
    );
  }
}
