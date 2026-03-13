import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // <-- Import senjata baru kita

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        DuaHati <Icon name="heart" size={30} color="#ff3b30" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
