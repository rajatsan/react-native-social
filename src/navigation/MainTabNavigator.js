import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';
import AlbumScreen from '../screens/AlbumScreen';
import LibraryScreen from '../screens/LibraryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PurchasedScreen from '../screens/PurchasedScreen';
import { pinkLight, violetLight, blueLight, greenLight, white } from '../colors';


const BottomNavigator = createMaterialBottomTabNavigator({
  Album: { screen: AlbumScreen, },
  Library: {screen: LibraryScreen },
  Favorites: {screen: FavoritesScreen },
  Purchased: {screen: PurchasedScreen}
}, {
  initialRouteName: 'Album',
  shifting: true,
  activeColor: white
});

export default class App extends React.Component {
  static router = BottomNavigator.router;
  constructor(props) {
    super(props);
    this.state = {
      inactiveColor: violetLight
    }
  }

  updateInactiveColor = (key, defaultHandler) => {
    let color;
    switch(key) {
      case 'directory':
        color = violetLight;
        break;
      case 'library':
        color = blueLight;
        break;
      case 'favorites':
        color = pinkLight;
        break;
      case 'purchased':
        color = greenLight;
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
