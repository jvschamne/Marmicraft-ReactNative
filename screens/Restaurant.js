import { StyleSheet, Text, View, Image } from 'react-native';
import BottomTabNav from '../components/BottomTabNav';
import { useNavigation } from '@react-navigation/native';
import OptionCard from '../components/OptionCard';

<<<<<<< HEAD
export default function Restaurant() {
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log('ok')
        navigation.navigate('Login');
    };
    
  return(
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={{fontSize: 30}}>Churrassic Park</Text>
        <Text style={{fontSize: 20, marginTop: 15}}>Endereço</Text>
=======
export default function Restaurant(props) {
  const restaurantData = props.route.params;
  console.log("RESTAURANT SCREEN: ", restaurantData);
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.restaurantName}>{restaurantData["nome"]}</Text>
        <Text style={styles.address}>{restaurantData["bairro"]}</Text>
        <Text style={styles.address}>{restaurantData["rua"]}</Text>
        <Text style={styles.address}>{restaurantData["numero"]}</Text>
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
        <Text style={{fontSize: 20, marginTop: 15}}>1,5Km - Aberto</Text>
      </View>
      <Image source={{ uri: 'https://jvschamne.github.io/marmicraft/marmita.png' }} style={styles.logo}></Image>
      <Text style={{fontSize: 30, marginBottom: 35}}>Cardápio</Text>
      <OptionCard/>
      <OptionCard/>
      <OptionCard/>
<<<<<<< HEAD

        <BottomTabNav></BottomTabNav>
=======
      <BottomTabNav></BottomTabNav>
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f9f1f7',
  },
  container2: {
    width: '100%',
<<<<<<< HEAD
    padding: '20px',
=======
    padding: 20,
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    backgroundColor: '#fcc40d',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< HEAD
=======
  restaurantName: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold'
  },
  address: {
    fontSize: 20, 
    marginTop: 5
  },
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
  logo: {
    width: 200,
    height: 200
  },
})
