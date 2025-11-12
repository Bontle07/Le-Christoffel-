# Le Christoffel Restaurant App

## Overview

This is a React Native restaurant app built using Expo and TypeScript. It features a welcome screen, category selection, menu listing, and a final menu summary. The app demonstrates navigation between screens and TypeScript integration with React Navigation.

---

## Change Log

### Initial Setup
- Created React Native project with Expo.
- Set up folder structure:
  - `src/screens` for screen components.
  - `src/types` for TypeScript interfaces and navigation types.
  - `src/data` for dish data.

### Navigation Setup
- Configured React Navigation with native stack navigator.
- Defined `RootStackParamList` for typed screen parameters.

### Screen Implementations
- **WelcomeScreen**: Initial entry screen with navigation to Category screen.
- **CategoryScreen**: Displays food categories and dishes; supports filtering by category.
- **MenuListScreen**: Lists all dishes with details and availability.
- **FinalMenuScreen**: Shows a summary of selected dishes.

### Data Handling
- Created `Dish` interface and `allDishes` array in a separate file.
- Integrated dish data into screens for dynamic display.

### Error Fixes & Debugging
- Fixed import path issues (corrected double `src/src` folder references).
- Updated navigation parameter types to resolve TypeScript errors when passing data between screens.
- Corrected FlatList rendering and key assignment for proper React performance.
- Adjusted app entry point to ensure correct App component import.
  
### Remaining Issues
- Some runtime errors prevent the app from fully running.
- Navigation params still need refinement for strict TypeScript compatibility.
- Further testing required on physical devices or emulators.

---

## How to Run

1. Clone the repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Start the app with `expo start`.
4. Open on a device or emulator.

---

## Notes

This project is a work in progress submitted with known issues documented for future improvement.

---

## Author

Bontle Markus  
060 579 5439/ ST10490977@rcconnect.edu.za

