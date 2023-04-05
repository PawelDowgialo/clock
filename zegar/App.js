import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Clock from './components/Clock';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen name="Warsaw">
          {() => <Clock zone="Europe/Warsaw" />}
        </Drawer.Screen>

        <Drawer.Screen name="New York">
          {() => <Clock zone="America/New_York" />}
        </Drawer.Screen>

        <Drawer.Screen name="Tokyo">
          {() => <Clock zone="Asia/Tokyo" />}
        </Drawer.Screen>

        <Drawer.Screen name="Sydney">
          {() => <Clock zone="Australia/Sydney" />}
        </Drawer.Screen>

        <Drawer.Screen name="Nairobi">
          {() => <Clock zone="Africa/Nairobi" />}
        </Drawer.Screen>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;