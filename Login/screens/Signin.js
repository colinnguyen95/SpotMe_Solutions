//import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, Button, Icon } from 'native-base';
import colors from '../components/styles/colors';

class Signin extends Component {

  // signIn = async () => {
  //   await AsyncStorage.setItem('userToken', 'Colin')
  //   // this.props.navigation.navigate('App')
  //   this.props.navigation.navigate('FacebookLogin')
  // }
  signIn = () => {
    this.props.navigation.navigate('App')
    //this.props.navigation.navigate('OneTimePassword')
    // this.props.navigation.navigate('FbAuth')
  }

  render() {
    return (
    <Container style={styles.BtnContainer}>
      <Content style={styles.ContentContainer}>
        <Button
          primary
          //style={styles.FbBtn}
          onPress={this.signIn}
        >
          <View style={styles.BtnContainer}>
            <Icon name="logo-facebook" />
            <Text style={styles.TxtContainer}>
              Continue with Facebook
            </Text>
          </View>
        </Button>

        <Button
          style={styles.PhoneBtn}
          onPress={this.signIn}
        >
          <View style={styles.BtnContainer}>
            <Icon name="call" style={{ color: 'white'}}/>
            <Text style={styles.TxtContainer}>
              Continue with Phone
            </Text>
          </View>
        </Button>

        <Text style={{ textAlign: 'center', margin: 20, color: colors.txt_color }}>
          or continue with email
        </Text>

        <Form>
          <Item>
            <View style={styles.FormContainer} >
              <Label style={styles.Label} >Email</Label>
              <Input
                style={{ flex: 3 }}
                placeholder="required"
                placeholderTextColor="#D3D3D3"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>
          </Item>

          <Item>
            <View style={styles.FormContainer} >
              <Label style={styles.Label} >Password</Label>
              <Input
                style={{ flex: 3 }}
                placeholder="at least 8 characters"
                placeholderTextColor="#D3D3D3"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>
          </Item>
        </Form>
      </Content>
    </Container>
    )
  }
}

export default Signin;

const styles = StyleSheet.create({
  ContentContainer: {
    marginTop: 20,
    alignSelf: 'stretch', 
    marginHorizontal: 25
  },
  FbBtn: {
    // flexDirection: 'row',
    // alignSelf: 'stretch',
    // justifyContent: 'center',
    //paddingHorizontal: 50
  },
  BtnContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  PhoneBtn: {
    marginTop: 20,
    backgroundColor: colors.sp_color,
  },
  TxtContainer: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  FormContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  Label: { 
    flex: 1, 
    textAlign: 'right',
    color: colors.txt_color
  }
});
