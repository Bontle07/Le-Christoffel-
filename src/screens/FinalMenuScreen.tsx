import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type FinalMenuScreenRouteProp = RouteProp<RootStackParamList, 'FinalMenu'>;

type FinalMenuScreenProps = {
  route: FinalMenuScreenRouteProp;
};

const FinalMenuScreen: React.FC<FinalMenuScreenProps> = ({ route }) => {
  const { selectedDishes } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Final Menu</Text>
      <ScrollView>
        {selectedDishes.length === 0 ? (
          <Text style={styles.noDishesText}>No dishes selected.</Text>
        ) : (
          selectedDishes.map((dish) => (
            <View key={dish.id} style={styles.dishCard}>
              <Text style={styles.dishName}>{dish.name}</Text>
              <Text style={styles.dishDescription}>{dish.description}</Text>
              <Text style={styles.dishPrice}>${dish.price.toFixed(2)}</Text>
              <Text style={[styles.dishAvailability, dish.isAvailable ? styles.available : styles.unavailable]}>
                {dish.isAvailable ? 'Available' : 'Out of Stock'}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  dishCard: { padding: 15, marginBottom: 20, borderRadius: 10, backgroundColor: '#f8f8f8' },
  dishName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  dishDescription: { fontSize: 14, color: '#666', marginBottom: 10 },
  dishPrice: { fontSize: 16, color: '#f7a400' },
  dishAvailability: { fontSize: 14, fontWeight: 'bold' },
  available: { color: 'green' },
  unavailable: { color: 'red' },
  noDishesText: { textAlign: 'center', fontSize: 18, color: '#666' },
});

export default FinalMenuScreen;
