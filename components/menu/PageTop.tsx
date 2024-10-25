import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import cat from '../../assets/img/happy.png';
import React from 'react';

const PageTop = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Image source={cat} alt="foto de gato" style={styles.catPicture} />
                <Text style={styles.name}>MeowBooks</Text>
            </View>

        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20, // Adiciona espaçamento vertical
        backgroundColor: '#f0f0f0',
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
    },
    catPicture: {
        marginTop:20,
        marginLeft:45,
        width: 40,
        height: 40,
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

export default PageTop;
