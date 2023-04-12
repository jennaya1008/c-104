import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Wednesday extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Text style={{ fontSize:30, backgroundColor:"lightgreen"}}> Wednesday </Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#d6185d"}}> class 1  </Text>
        <Text> </Text>
        <Text style={styles.points}>1) music</Text>
        <Text> </Text>
        <Text style={styles.points} >2)geograpgy</Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#d6185d"}}> class 2 </Text>
        <Text> </Text>
        <Text style={styles.points}>1)science</Text>
        <Text> </Text>
        <Text style={styles.points} >2)pe</Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#d6185d"}}> class break </Text>
        <Text> </Text>
        <Text style={styles.points} >1)free lesson</Text>
        <Text> </Text>
        <Text style={styles.points}></Text>
        <Text style={{ fontSize:20, backgroundColor:"#d6185d"}}> class 3  </Text>
        <Text> </Text>
        <Text style={styles.points} >1)re</Text>
        <Text> </Text>
        <Text style={styles.points} >2)sociology</Text>
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
  },
    buttons: {
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