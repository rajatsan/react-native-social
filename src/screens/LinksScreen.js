import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TabBarIcon from '../components/TabIcon';

export default class LinksScreen extends React.Component {
  static navigationOptions = ({ screenProps}) => ({
    title: 'Links',
    tabBarLabel: 'Links',
    tabBarColor: '#880e4f',
    tabBarIcon: ({ focused}) => (
      <TabBarIcon
        focused={focused}
        name='list'
        color={screenProps.inactiveColor}
      />
    ),
    tabBarOnPress: ({defaultHandler}) => screenProps.updateInactiveColor('link', defaultHandler)()
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Linksscreen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
