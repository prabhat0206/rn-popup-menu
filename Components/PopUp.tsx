import React from 'react';
import {TouchableOpacity, View, Modal, StyleSheet, Text} from 'react-native';

interface Props {
  canShow: boolean;
  hideFunction: () => void;
}

export default class PopUp extends React.Component<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
  }
  render() {
    return (
      <Modal transparent visible={this.props.canShow} animationType="fade">
        <TouchableOpacity style={styles.overlay}>
          <View style={styles.popUpbox}>
            <View style={styles.messageBox}>
              <Text style={{fontSize: 22}}>i am a Pop up Box</Text>
            </View>
            <View style={styles.ButtonBox}>
              <TouchableOpacity
                style={styles.optionBox}
                onPress={this.props.hideFunction}>
                <Text style={{color: '#fff', fontSize: 20}}>Hide</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUpbox: {
    width: '70%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  messageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  ButtonBox: {
    flex: 1,
    alignItems: 'center',
  },
  optionBox: {
    width: '80%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
