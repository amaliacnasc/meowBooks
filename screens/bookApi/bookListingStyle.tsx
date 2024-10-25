import {StyleSheet} from 'react-native'; 



 export const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: 150, 
        padding: 10,
    },
    loader: {
        marginTop: 50,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'black',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    text: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 5,
        marginTop: 5,
    },
    cardContainer: {
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
})