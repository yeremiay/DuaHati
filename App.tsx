import React from 'react';
import LoginScreen from './src/LoginScreen'; // Manggil file yang baru dibuat
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

const App = () => {
  // Sekarang App cuma bertugas nampilin LoginScreen
  // return <LoginScreen />;
  // Tambahan safeareaprovider biar gak nyenggol notch
  return (
    // <SafeAreaProvider>
    //   <LoginScreen />
    // </SafeAreaProvider>
    <SafeAreaProvider>
        <LoginScreen />
    </SafeAreaProvider>
  );
};

export default App;
