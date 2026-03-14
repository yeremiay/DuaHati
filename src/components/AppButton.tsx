import React from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

const AppButton = ({ title, onPress, isLoading }: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, isLoading && styles.disabled]}
      onPress={onPress}
      disabled={isLoading}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Bayangan buat Android
    shadowColor: '#000', // Bayangan buat iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  disabled: {
    backgroundColor: '#ff9d99', // Warna lebih pudar pas loading
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppButton;
