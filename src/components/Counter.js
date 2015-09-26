import React, { Component, View, Text, TouchableOpacity, PropTypes, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: this.randomColor()};
  }

  componentWillReceiveProps(){
    this.setState({bgColor: this.randomColor()});
  }

  randomColor(){
    var r = g = b = () => Math.round(Math.random() * 255);
    return `rgba(${r()}, ${g()}, ${b()}, 0.25)`;
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;

    return (
      <View ref="view" style={[styles.container, {backgroundColor: this.state.bgColor}]}>
        <Text style={styles.subheadline}>
          // React Native Redux Counter ES6
        </Text>
        <Text style={styles.headline}>
          Clicked: {counter} times
        </Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.label}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.label}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={incrementIfOdd}>
          <Text style={styles.label}>Increment if odd</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => incrementAsync()}>
          <Text style={styles.label}>Increment async</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  subheadline: {
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
  },
  label: {
    fontSize: 17,
    textAlign: 'center',
  },
  button: {
      width: 180,
      padding: 20,
      margin: 10,
      borderWidth: 2,
      borderColor: '#333'
    },
});

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
