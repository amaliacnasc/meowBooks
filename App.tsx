import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BooksListing from './screens/bookApi/BooksListing';
import HomePage from './components/HomePage/HomePage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="BooksListing">
        <Drawer.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{
            drawerLabel: 'Home', // Define o rótulo no menu do drawer
            headerTitle: 'MeowBooks' // Define o título do cabeçalho
          }}
        />
           <Drawer.Screen 
          name="BooksListing" 
          component={BooksListing} 
          options={{
            drawerLabel: 'Livros', // Define o rótulo no menu do drawer
            headerTitle: 'MeowBooks' // Define o título do cabeçalho
          }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
