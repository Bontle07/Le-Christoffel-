// src/types/navigation.ts

export type RootStackParamList = {
  Welcome: undefined; // No parameters expected on Welcome screen
  Category: undefined; // No params for Category screen
  MenuList: undefined; // No params for MenuList screen
  FinalMenu: { selectedDishes: Dish[] }; // FinalMenu expects selectedDishes array
};

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isAvailable: boolean;
}
