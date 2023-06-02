import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

<<<<<<< HEAD
export default function BottomTabNav () {   
    
    const navigation = useNavigation();
    
    const handleLogin = () => {
        // implementar a lógica de autenticação aqui
        console.log('oi')
        navigation.navigate('Login');
=======
export default function BottomTabNav ({userData, userType}) {   
    
    const navigation = useNavigation();
     
    const handlePress = (screen) => {
        console.log('navigate', screen)
        navigation.navigate(screen);
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
    };


    return(
        <View style={styles.nav}>
<<<<<<< HEAD
            <TouchableOpacity style={styles.navButton} onPress={handleLogin}>
                <Text style={styles.text}>Restaurantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={handleLogin}>
                <Text style={styles.text}>Pesquisar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={handleLogin}>
=======
            <TouchableOpacity style={styles.navButton} onPress={() => handlePress('Menu')}>
                <Text style={styles.text}>Restaurantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => handlePress('Perfil')}>
>>>>>>> 181636dd63a049d7e9235a65be0c6cd88f956bd6
                <Text style={styles.text}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginTop:500,
    },
    navButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    text : {
        color: '#fcc40d'
    }
});