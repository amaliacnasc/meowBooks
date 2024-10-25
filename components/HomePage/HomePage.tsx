import { Text, View, Image, StyleSheet} from 'react-native';
import cat from '../../assets/img/happy.png';
import React from 'react';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Image source={cat} alt="foto de gato" style={styles.catPicture2} />
                <Text style={styles.name}>MeowBooks</Text>
            </View>

        
        </View>
    );
};

export default HomePage; 
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20, // Adiciona espaçamento vertical
        backgroundColor: '#fffff',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column', // Alinhar os itens verticalmente
     
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
        textAlign:'center',
        textTransform:'uppercase'
    },
    catPicture2: {
        marginLeft:25,
        width: 100,
        height: 100,
        marginTop:200
    },
    searchButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    searchButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '80%',
        marginTop: 20,
    },
});