import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>School Timetable</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#f78b83',
  },
  text:{
    color: '#e82113',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

