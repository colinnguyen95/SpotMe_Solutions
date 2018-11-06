//import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, Dimensions, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Header, Form, Input, Item, Label, Icon } from 'native-base';
import LocalImage from '../components/LocalImage';
//import { AppLoading } from 'expo';
//import Slides from '../components/Slides';

class Signup extends Component {
  static navigationOptions = {
    header: null
  };

  toSignIn = () => {
    this.props.navigation.navigate('Signin')
  }

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
          <View 
            style={{ 
              opacity: 1, //animated
              //flex: 5, 
              backgroundColor: '#EAF3FE', 
              alignItems: 'center', 
              marginTop: 30 //animated
            }}>
            <Text 
              style={{fontSize: 22, color: '#199BD7', fontWeight: 'bold'}}
            >
              Find a spot now!
            </Text>

            <TouchableOpacity>
              <View style={{
                //flex: 1,
                alignSelf: 'stretch',
                marginTop: 25, //animated
                paddingHorizontal: 25,
                flexDirection: 'row',
                backgroundColor: 'pink'
              }}>
                <Image
                  source={require('../images/us_flag.png')}
                  style={{
                    height: 24,
                    width: 24,
                    resizeMode: 'contain'
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>+1</Text>
                  <TextInput 
                    style={{ fontSize: 20, color:'black'}}
                    placeholder='Enter your number'
                    //color='black'
                    //underlineColorAndroid="transparpent"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 70, backgroundColor: '#EAF3FE', justifyContent: 'center', alignItems: 'center'}}>
            <Button 
              title='Already have an account? Sign in'
              color='#199BD7'
              onPress={this.toSignIn}
              style={{ alignSelf: 'stretch', justifyContent: 'center', fontSize: 10 }} 
            /> 
          </View>
        </View>
    </View>
    )
  }
}

export default Signup;