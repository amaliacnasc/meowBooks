import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator, TextInput } from 'react-native';
import {styles} from './bookListingStyle'

// Criando um model de livros para definir a tipagem de cada elemento do json que é puxado
interface Book {
    title: string;
    author_name?: string[]; 
    cover_i?: number;
    number_of_pages_median?: number; 
}

const BooksListing = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBooks();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [searchQuery, books]);

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
                setBooks(data.docs); // Pegando a lista de documentos
                setFilteredBooks(data.docs); // Inicializando a lista filtrada com todos os livros
                setIsLoading(false); // Indicando que o carregamento terminou
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);  
            });
    };

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            setFilteredBooks(books); // Se não houver busca, mostramos todos os livros
        } else {
            const query = searchQuery.toLowerCase();
            const filtered = books.filter((book) => 
                book.title.toLowerCase().includes(query) ||
                (book.author_name && book.author_name.join(', ').toLowerCase().includes(query))
            );
            setFilteredBooks(filtered);
        }
    };

    return (
        <View style={styles.content}>
            {isLoading ? (
                <ActivityIndicator color="purple" size="large" style={styles.loader} />
            ) : (
                <View>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar por título ou autor"
                        placeholderTextColor="#aaa"
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredBooks}
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