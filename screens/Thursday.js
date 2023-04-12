import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Thursday extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"#9193c2"}}> Thursday </Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ab908e"}}> class 1  </Text>
        <Text> </Text>
        <Text style={styles.points}>1) maths</Text>
        <Text> </Text>
        <Text style={styles.points} >2)drama</Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ab908e"}}> class 2 </Text>
        <Text> </Text>
        <Text style={styles.points}>1)ict</Text>
        <Text> </Text>
        <Text style={styles.points} >2)music</Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ab908e"}}> class break </Text>
        <Text> </Text>
        <Text style={styles.points} >1)free lesson</Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#ab908e"}}> class 3  </Text>
        <Text> </Text>
        <Text style={styles.points} >1)science</Text>
        <Text> </Text>
        <Text style={styles.points} >2)re</Text>
         <Text> </Text>
        <Text style={{ fontSize:15, backgroundColor:"lavender"}}> *New lessons everyday* </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"#c7b40c",
    margin: 10,
    width: 200,
    height: 50,
  }
})