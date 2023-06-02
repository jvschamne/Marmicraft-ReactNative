import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import MenuScreen from './screens/Menu';
import LoginScreen from './screens/Login';
import Restaurant from './screens/Restaurant';
import Signup from './screens/Signup';


=======
import Menu from './screens/Menu'
import LoginScreen from './screens/Login';
import Restaurant from './screens/Restaurant';
import Signup from './screens/Signup';
import Register from './screens/Register';
import Perfil from './screens/Perfil';
import { LogBox } from 'react-native';
import Context from './Context';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
    
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
//firebase
import app from './config/firebase';
import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';
const db = getFirestore(app);

//navigator
const Stack = createStackNavigator();


<<<<<<< HEAD
const App = () => {

  const [dados, setDados] = useState()


  const getData = async () => {
    const docRef = doc(db, "teste", "wi0GxY4LaAWGw6vg2K25");
=======

const App = () => {
  const [userData, setUserData] = useState({});
  const [userType, setUserType] = useState("");

  const getData = async () => {
    const docRef = doc(db, "clientes", "teste");
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getData()    
  });

 
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
=======
      <Context.Provider value={{prop1: [userData, setUserData], prop2: [userType, setUserType]}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
      </Context.Provider>
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    </NavigationContainer>
  ); 
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
