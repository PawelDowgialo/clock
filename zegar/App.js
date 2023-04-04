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
        <Drawer.Screen name="New York" component={() => <Clock timezone="America/New_York"/>} />
        <Drawer.Screen name="Moscow" component={() => <Clock timezone="Europe/Moscow"/>} />
        <Drawer.Screen name="Tokyo" component={() => <Clock timezone="Asia/Tokyo"/>}/>
        <Drawer.Screen name="Sydney" component={() => <Clock timezone="Australia/Sydney"/>} />
        <Drawer.Screen name="Nairobi" component={() => <Clock timezone="Africa/Nairobi"/>} />
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