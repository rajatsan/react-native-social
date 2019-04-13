import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TabBarIcon from '../components/TabIcon';
import { blue } from '../colors';

export default class LibraryScreen extends React.Component {
  static navigationOptions = ({ screenProps}) => ({
    tabBarColor: blue,
    tabBarIcon: ({ focused}) => (
      <TabBarIcon
        focused={focused}
        name='list'
        inActiveColor={screenProps.inactiveColor}
      />
    ),
    tabBarOnPress: ({defaultHandler}) => screenProps.updateInactiveColor('library', defaultHandler)()
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Library</Text>
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
