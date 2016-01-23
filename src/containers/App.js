import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import configureStore from '../store/configureStore';
import * as CounterActions from '../actions/counter';
import Counter from '../components/Counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

const Connector = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Connector />
      </Provider>
    );
  }
}
