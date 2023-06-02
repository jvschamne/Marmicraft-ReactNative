import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

<<<<<<< HEAD
export default function RestaurantCard ({name}) {

=======
export default function RestaurantCard ({data}) {
    const dados = data;
    console.log("--- RESTAURANT CARD: ", dados["nome"], " ----");
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log('ok')
<<<<<<< HEAD
        navigation.navigate('Restaurant');
=======
        navigation.navigate('Restaurant', dados);
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    };
    

    return(
        <TouchableOpacity style={styles.card} onPress={handleLogin}>
<<<<<<< HEAD
            <Image source={{ uri: 'https://jvschamne.github.io/marmicraft/marmita.png'}}
            style={{ width: 70, height: 70}}/>
            <Text style={{fontSize: 15, marginLeft: 30}}>
                {name}
=======
            <Image source={{ uri: 'https://jvschamne.github.io/marmicraft/marmita.png'}} style={styles.image}/>
            <Text style={{fontSize: 15, marginLeft: 30}}>
                {dados["nome"]}
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
=======
    image: {
        width: 70, 
        height: 70
    },
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        height: 100,
        width: '90%',
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 25
    },
});
  