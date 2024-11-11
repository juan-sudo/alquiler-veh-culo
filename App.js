import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // Ejemplo de datos de autos
  const cars = [
    { id: '1', name: 'Toyota Corolla', model: '2020', color: 'Red' },
    { id: '2', name: 'Honda Civic', model: '2022', color: 'Blue' },
    { id: '3', name: 'Ford Focus', model: '2019', color: 'Black' },
    { id: '4', name: 'Chevrolet Malibu', model: '2021', color: 'White' },
    { id: '5', name: 'Nissan Altima', model: '2020', color: 'Gray' },
    { id: '6', name: 'Mazda 3', model: '2023', color: 'Green' },
  ];

  // Filtrado de autos por nombre
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Título alineado a la izquierda */}
      <View style={styles.header}>
        <Text style={styles.headerText}>IDRIVE</Text>
      </View>

      <TextInput
  style={[styles.searchInput, { backgroundColor: '#B9B9B9' }]}
  placeholder="Alquilar vehiculo"
  value={searchQuery}
  onChangeText={setSearchQuery}
/>


      {/* Lista de autos */}
      <FlatList
        data={filteredCars}
        renderItem={({ item }) => (
          <View style={styles.carItem}>
            <Text style={styles.carDetail}>{item.name}</Text>
            <Text style={styles.carDetail}>{item.model}</Text>
            <Text style={styles.carDetail}>{item.color}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={3} // Establece el número de columnas
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F4D56',
    paddingTop: 40, // Espacio para el buscador
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'flex-start', // Alinea el texto a la izquierda
    paddingLeft: 20, // Agrega un poco de margen desde la izquierda
    marginBottom: 20, // Espacio debajo del título
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  carItem: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  carDetail: {
    fontSize: 14,
    marginBottom: 5,
  },
});
