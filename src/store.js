/* globals window */

import { createStore, combineReducers, compose } from 'redux';
import { state } from 'losen';

import schema from '../src/api/do-not-contact.json'

/**
 * Create the store with middleware
 */
const store = createStore(
  combineReducers({ [state.NAME]: state.reducer(schema) }),
  undefined,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
