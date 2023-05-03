import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {

  const navigation = useNavigation();

  const restaurantes = useState(["res1", "res2", "res3"])

  return (
    <View style={styles.container}>
    
      <Text
        style={{marginBottom: 35, fontSize: 30}}>Menu</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcc40d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
    marginTop: 15,
    margin: 8,
    width: '80%',
  },
  button: {
    backgroundColor: '#008080',
    padding: 15,
    width: 200,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 4,
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
