import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


const BottomNavigator = createMaterialBottomTabNavigator({
  HomeScreen: {screen: HomeScreen, },
  LinksScreen: {screen: LinksScreen},
  SettingsScreen: {screen: SettingsScreen},
}, {
  initialRouteName: 'HomeScreen',
  shifting: true,
  activeColor: 'white'
});

export default class App extends React.Component {
  static router = BottomNavigator.router;
  constructor(props) {
    super(props);
    this.state = {
      inactiveColor: '#b39ddb'
    }
  }

  updateInactiveColor = (key, defaultHandler) => {
    let color;
    switch(key) {
      case 'directory':
        color = '#b39ddb';
        break;
      case 'link':
        color = '#ce93d8';
        break;
      case 'settings':
        color = '#80cbc4';
        break;
    }
    return () => {
      this.setState({inactiveColor: color});
      defaultHandler();
    }
  }

  render() {
    return (
      <BottomNavigator 
        navigation={this.props.navigation}
        screenProps={{
          inactiveColor: this.state.inactiveColor,
          updateInactiveColor: this.updateInactiveColor
        }}
      />
    )
  }
}
