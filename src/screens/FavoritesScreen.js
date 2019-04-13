import React from 'react';
import { View, Text } from 'react-native';
import TabBarIcon from '../components/TabIcon';
import { pink } from '../colors';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    tabBarColor: pink,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='heart'
        inActiveColor={screenProps.inactiveColor}
      />
    ),
    tabBarOnPress: ({defaultHandler}) => screenProps.updateInactiveColor('favorites', defaultHandler)()
  });

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View><Text>Favorites</Text></View>
  }
}
