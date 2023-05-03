import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // implementar a lógica de autenticação aqui
    console.log(username, password)
    if(username == 'joao' && password == 'mito2022'){
      navigation.navigate('Menu');
    }
  };



  return (
    <View style={styles.container}>
    
      <Image
        source={{ uri: 'https://jvschamne.github.io/marmicraft/marmita.png' }}
        style={{ marginBottom: 15, width: 200, height: 200 }}
      />
      <Text
        style={{marginBottom: 35, fontSize: 30}}>Marmicraft</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
