import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TabBarIcon from '../components/TabIcon';
import { green } from '../colors';

export default class PurchasedScreen extends React.Component {
  static navigationOptions = ({ screenProps}) => ({
    tabBarColor: green,
    tabBarIcon: ({ focused}) => (
      <TabBarIcon
        focused={focused}
        name='appstore'
        inActiveColor={screenProps.inactiveColor}
      />
    ),
    tabBarOnPress: ({defaultHandler}) => screenProps.updateInactiveColor('purchased', defaultHandler)()
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Purchased</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
