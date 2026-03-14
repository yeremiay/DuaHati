import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Pakai ikon hati yang tadi sukses!
import Container from './components/Container';

const LoginScreen = () => {
  // 1. Kita bikin "memory" (state) buat nyimpen nomor HP yang diketik
  const [phoneNumber, setPhoneNumber] = useState('');

  // 2. Fungsi ini bakal dipanggil pas tombol ditekan
  const handleSendOTP = () => {
    // Nanti logika Supabase masuk ke sini
    console.log('Nomor yang mau dikirim OTP: ', phoneNumber);
  };

  return (
    <Container>
      <View style={styles.container}>
        {/* Bagian Judul */}
        <View style={styles.header}>
          <Text style={styles.title}>DuaHati</Text>
          <Icon name="heart" size={24} color="#ff3b30" style={styles.icon} />
        </View>
        <Text style={styles.subtitle}>Masukkin nomor HP kamu</Text>

        {/* Kolom Input Nomor HP */}
        <TextInput
          style={styles.input}
          placeholder="Contoh: +62812..."
          placeholderTextColor="#999"
          keyboardType="phone-pad" // Biar keyboard yang muncul langsung angka
          value={phoneNumber}
          onChangeText={phoneNumber => {
            // Kita pakai rumus "Regex" untuk membuang semua yang BUKAN angka
            // [^0-9] artinya: cari apapun yang bukan angka 0 sampai 9
            // g artinya: cari di seluruh teks (global)
            const cleaned = phoneNumber.replace(/[^0-9]/g, '');

            // Baru kita simpan ke state
            setPhoneNumber(cleaned);
          }} // Simpan ketikan ke memory (state)
        />

        {/* Tombol Kirim */}
        <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Kirim Kode OTP</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

// Bagian bedak dan lipstik (Styling)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  icon: { marginLeft: 8 },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default LoginScreen;
