import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
<<<<<<< HEAD
import app from '../config/firebase';

export default function App() {

=======
import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';
import app from '../config/firebase';

export default function LoginScreen() {
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
<<<<<<< HEAD
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

=======
  const [loggedType, setLoggedType] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});


>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
  const handleSignup = () => {
    navigation.navigate('Signup');
  }

  const handleLogin = () => {
    console.log('handleLogin()')
    console.log(email, password)
        
    const auth = getAuth(app)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
<<<<<<< HEAD
        const userInfo = userCredential.user
        console.log(userInfo)
        setUser(userInfo)
        console.log("User:", user)

        //navega para dentro do app
        setLoggedIn(true)
        navigation.navigate('Menu');
=======
        const userInfo = userCredential.user;
        setUser(userInfo);
        
        console.log("UID: "+userInfo.uid);

        //navega para dentro do app
        setLoggedIn(true)
        navigation.navigate('Menu', {uId : userInfo.uid});
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('erro:', errorCode, errorMessage)
      });    
  };




  return (
    <View style={styles.container}>
    
      <Image
        source={{ uri: 'https://jvschamne.github.io/marmicraft/marmita.png' }}
        style={{ marginBottom: 15, width: 200, height: 200 }}
      />
      <Text
        style={styles.title}>Marmicraft</Text>

      <TextInput
        style={styles.input}
<<<<<<< HEAD
        placeholder="Nome de usuário"
=======
        placeholder="E-mail"
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={handleSignup}>
        <Text style={styles.buttonText2}>Não tenho Cadastro</Text>
      </TouchableOpacity>
<<<<<<< HEAD
=======

>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
      <TouchableOpacity style={styles.button2} onPress={handleSignup}>
        <Text style={styles.buttonText2}>Esqueci a senha</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 8,
    marginTop: 15,
    margin: 8,
    width: '80%',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    width: 200,
<<<<<<< HEAD
    justifyContent: 'center',
=======
    justifyContent: 'center', 
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    alignItems:'center',
    borderRadius: 30,
    marginTop: 32,
  },
  buttonText: {
    color: '#fcc40d',
    fontWeight: 'bold',
    fontSize: 16,
  },

  button2: {
    marginTop: 32,
  },
  buttonText2: {
    textDecorationLine: 'underline',
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
