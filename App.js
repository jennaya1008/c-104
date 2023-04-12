import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Thursday from './screens/Thursday';
import Tuesday from './screens/Tuesday';
import Wednesday from './screens/Wednesday';
import Monday from './screens/Monday';
import Friday from './screens/Friday';

export default class App extends React.Component { 
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Monday: Monday,
  Tuesday: Tuesday,
  Thursday: Thursday,
  Wednesday: Wednesday,
  Friday: Friday,
});

const AppContainer = createAppContainer(AppNavigator);
