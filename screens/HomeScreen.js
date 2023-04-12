import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Monday')}>
              <Text style={{ fontSize:30, color:"#b0241a"}}>Monday</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Tuesday')}>
              <Text style={{ fontSize:30, color:"#ba6a65"}}>Tuesday</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Wednesday')}>
              <Text style={{ fontSize:30, color:"#946663"}}>Wednesday</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Thursday')}>
              <Text style={{ fontSize:30, color:"#ad8886"}}>Thursday</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Friday')}>
              <Text style={{ fontSize:30, color:"#cf7670"}}>Friday</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{  fontSize:22,textAlign: 'center', margin:5 }}>Rate Us :</Text>
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 9,
    backgroundColor:"#ebd5d3",
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
