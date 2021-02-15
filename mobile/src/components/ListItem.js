import React from 'react';
import Swipeable from 'react-native-swipeable';
import { Text, TouchableHighlight, StyleSheet, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';

const MyListItem = ({ text, index }) => {
  const leftContent = <TouchableHighlight style={styles.leftBtn}>
    <Icon name="clear" size={30} color="#fff" />
  </TouchableHighlight>;

  const rightButtons = <TouchableHighlight style={styles.rightBtn}>      
      <Icon name="content-copy" size={30} color="#fff" />
    </TouchableHighlight>;
  
  const handleRightAction = () => {
    Clipboard.setString(text);
  };

  const handleLeftAction = () => {
    Alert.alert('Remove Item?')
  };

  const removeItemFromList = () => {

  }

  return (
    <>
    <Swipeable
      style={styles.swipeable}
      leftContent={leftContent}
      rightContent={rightButtons}
      onLeftActionRelease={handleLeftAction}
      onRightActionRelease={handleRightAction}
    >
      <Text style={styles.swipeableText}>{text}</Text>
    </Swipeable>
    </>
  );
}

const styles = StyleSheet.create({
  swipeable: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeableText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  leftBtn: {
    justifyContent: 'center',
    alignItems: 'flex-end',  
    height: 50,
    backgroundColor: 'red',
    padding: 10,
  },
  rightBtn: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
    backgroundColor: 'green',
    padding: 10,
  }
})

export default MyListItem;