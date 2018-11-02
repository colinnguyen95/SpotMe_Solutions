import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  ActivityIndicator, AsyncStorage } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/Welcome';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogoTitle from './components/LogoTitle';
import Icon from 'react-native-vector-icons/Ionicons'

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Signin: Signin,
  Signup: Signup,
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <LogoTitle />,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={StyleSheet.container}>
        
        </View>
      </Provider>
    );
  }
}

export default createSwitchNavigator({
  AuthLoadingScreen: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
