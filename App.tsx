import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import PopUp from './Components/PopUp';

interface State {
  canShow: boolean;
}

export default class App extends React.Component {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      canShow: false,
    };
  }

  showHide() {
    const {canShow} = this.state;
    if (canShow) {
      this.setState({canShow: false});
    } else {
      this.setState({canShow: true});
    }
  }

  render() {
    return (
      <View style={styles.mainBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.showHide.bind(this)}>
          <Text style={{color: '#fff', fontSize: 25}}>
            Click me to open Popup
          </Text>
        </TouchableOpacity>
        <PopUp
          canShow={this.state.canShow}
          hideFunction={this.showHide.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
