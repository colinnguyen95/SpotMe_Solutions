//import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LocalImage from '../components/LocalImage'
//import { AppLoading } from 'expo';
//import Slides from '../components/Slides';

class Signup extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
    <View style={{ flex: 1}}>
        <View style={{ flex: 1, backgroundColor: '#EAF3FE', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('../images/SpotMe_Logo.png')}
              style={{ width: 201, height: 60, justifyContent: 'center', alignItems: 'center', marginTop: 50}}
              
            />
          </View>
          <LocalImage
            source={require('../images/Signup_Img.png')}
            //style={{ flex: 2, width: imageWidth }}
            originalWidth={1217}
            originalHeight={750}
          />
        </View>
        <View style={{ flex: 1}}>
          <View style={{ flex: 4, backgroundColor: '#EAF3FE'}}>

          </View>
          <View style={{ flex: 1, backgroundColor: 'green'}}>

          </View>
        </View>
    </View>
    )
  }
}

export default Signup;