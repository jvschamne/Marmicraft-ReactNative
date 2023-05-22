import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import app from '../config/firebase';

export default function Signup() {
  
  const navigation = useNavigation();
  const [etapa, setEtapa] = useState(1)

  return (
    <View style={styles.container}>
        <>
          <Text style={styles.title}>Como deseja se cadastrar?</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterClient")}>
            <Text style={styles.buttonText}>CLIENTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterRestaurant")}>
            <Text style={styles.buttonText}>RESTAURANTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterDelivery")}>
            <Text style={styles.buttonText}>ENTREGADOR</Text>
          </TouchableOpacity>
        </>

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
    fontSize: 30,
    marginBottom: 25,
    width: '80%',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    width: 200,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 30,
    marginTop: 32,
  },
  buttonText: {
    color: '#fcc40d',
    fontSize: 16,
  }
});
