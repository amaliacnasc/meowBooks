import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PageTop from './components/menu/PageTop';
import BooksListing from './screens/bookApi/BooksListing';
export default function App() {
  return (
    <View style={styles.container}>
     <PageTop></PageTop>
     <BooksListing></BooksListing>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
