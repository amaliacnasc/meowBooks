import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

// Definindo o tipo Book
interface Book {
    title: string;
    author_name?: string[]; // O autor pode ser uma lista
    cover_i?: number; // ID da capa do livro
    number_of_pages_median?: number; // Número médio de páginas
}

const BooksListing = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = () => {
        const URL = 'https://openlibrary.org/search.json?q=test';

        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Algo deu errado :(');
                }
                return res.json();
            })
            .then((data) => {
                setBooks(data.docs); // Ajustando para garantir que só estamos pegando a lista de documentos
                setIsLoading(false); // Atualizando o estado para indicar que o carregamento terminou
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false); // Mesmo em caso de erro, paramos o carregamento
            });
    };

    return (
      
            <View style={styles.content}>
                {isLoading ? (
                    <ActivityIndicator color="purple" size="large" style={styles.loader} />
                ) : (
                    <View>
                       
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={books}
                            keyExtractor={(item, index) =>
                                item.cover_i ? item.cover_i.toString() : index.toString()
                            }
                            renderItem={({ item }) => (
                                <View style={styles.cardContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    {item.cover_i && (
                                        <Image
                                            source={{
                                                uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`,
                                            }}
                                            style={styles.image}
                                        />
                                    )}
                                    <Text style={styles.text}>
                                        {item.author_name && item.author_name.length > 0
                                            ? item.author_name.join(', ')
                                            : 'Autor desconhecido'}
                                    </Text>
                                    <Text style={styles.text}>
                                        {item.number_of_pages_median
                                            ? `${item.number_of_pages_median} páginas`
                                            : 'Páginas não disponíveis'}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                )}
            </View>
     
    );
};

export default BooksListing;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: 150, // Garantir que o conteúdo comece abaixo do header
        padding: 10,
    },
    loader: {
        marginTop: 50,
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
        color: '#fff', // Cor do texto branco
    },
    text: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 5,
        marginTop: 5,
    },
    cardContainer: {
        backgroundColor: 'purple', // Cor de fundo roxa
        padding: 20,
        borderRadius: 10,
        marginBottom: 20, // Espaçamento entre os cards
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8, // Sombra para Android
    },
});
