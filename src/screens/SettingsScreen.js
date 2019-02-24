import React from 'react';
import { View, Text } from 'react-native';
import TabBarIcon from '../components/TabIcon';

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    title: 'app12.json',
    tabBarLabel: 'Settings',
    tabBarColor: '#006D6A',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='options'
        color={screenProps.inactiveColor}
      />
    ),
    tabBarOnPress: ({defaultHandler}) => screenProps.updateInactiveColor('settings', defaultHandler)()
  });

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View><Text>Setitngscre</Text></View>
  }
}
