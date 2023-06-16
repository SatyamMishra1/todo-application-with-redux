import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={'lightgreen'} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Todos Application</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'lightgreen',
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
});
