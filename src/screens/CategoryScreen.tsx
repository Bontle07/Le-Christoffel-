import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type CategoryScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Category'>;
};

const CategoryScreen: React.FC<CategoryScreenProps> = ({ navigation }) => {
  const categories = [
    { title: 'Starters', items: ['Bruschetta', 'Garlic Bread', 'Stuffed Mushrooms', 'Salad'] },
    { title: 'Mains', items: ['Pasta', 'Pizza', 'Steak', 'Chicken Parmesan'] },
    { title: 'Desserts', items: ['Tiramisu', 'Cheesecake', 'Ice Cream', 'Chocolate Brownie'] },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Button title="All" onPress={() => setSelectedCategory(null)} />
        {categories.map((category) => (
          <Button key={category.title} title={category.title} onPress={() => toggleCategory(category.title)} />
        ))}
      </View>

      <FlatList
        data={categories.filter((cat) => !selectedCategory || cat.title === selectedCategory)}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            {item.items.map((dishName, index) => (
              <TouchableOpacity
                key={index}
                style={styles.itemButton}
                onPress={() => navigation.navigate('MenuList')}
              >
                <Text style={styles.itemText}>{dishName}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />

      <Button title="Go to Menu List" onPress={() => navigation.navigate('MenuList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  filterContainer: { flexDirection: 'row', marginBottom: 20, justifyContent: 'space-around' },
  categoryContainer: { marginBottom: 20 },
  categoryTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  itemButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f7a400',
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  itemText: { fontSize: 16, color: 'white', fontWeight: 'bold' },
});

export default CategoryScreen;
