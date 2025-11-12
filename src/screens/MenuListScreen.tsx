import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Dish } from '../types/navigation';

type MenuListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MenuList'>;
};

const allDishes: Dish[] = [
  { id: 1, name: 'Bruschetta', description: 'Toasted bread with tomatoes, basil, garlic, olive oil', price: 58.35, category: 'Starters', isAvailable: true },
  { id: 2, name: 'Chicken Parmesan', description: 'Breaded chicken cutlet with marinara and cheese.', price: 125.5, category: 'Mains', isAvailable: true },
  { id: 3, name: 'Chocolate Brownie', description: 'Rich chocolate brownie with ice cream', price: 48.75, category: 'Desserts', isAvailable: false },
  { id: 4, name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cream cheese and herbs', price: 80.88, category: 'Starters', isAvailable: true },
  { id: 5, name: 'Steak', description: 'Juicy grilled steak served with sides', price: 179.95, category: 'Mains', isAvailable: true },
  { id: 6, name: 'Tiramisu', description: 'Coffee-soaked biscuits and mascarpone cheese dessert', price: 68.85, category: 'Desserts', isAvailable: true },
];

const MenuListScreen: React.FC<MenuListScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu List</Text>
      <ScrollView>
        {allDishes.map((dish) => (
          <View key={dish.id} style={styles.dishCard}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishDescription}>{dish.description}</Text>
            <Text style={styles.dishPrice}>${dish.price.toFixed(2)}</Text>
            <Text style={[styles.dishAvailability, dish.isAvailable ? styles.available : styles.unavailable]}>
              {dish.isAvailable ? 'Available' : 'Out of Stock'}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Button
        title="Go to Final Menu"
        onPress={() => navigation.navigate('FinalMenu', { selectedDishes: allDishes })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  dishCard: { padding: 15, marginBottom: 20, borderRadius: 10, backgroundColor: '#f8f8f8' },
  dishName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  dishDescription: { fontSize: 14, color: '#666', marginBottom: 10 },
  dishPrice: { fontSize: 16, color: '#f7a400' },
  dishAvailability: { fontSize: 14, fontWeight: 'bold' },
  available: { color: 'green' },
  unavailable: { color: 'red' },
});

export default MenuListScreen;
