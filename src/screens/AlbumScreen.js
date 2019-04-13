import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TabBarIcon from '../components/TabIcon';
import { violet } from '../colors';


export default class AlbumScreen extends React.Component {
  static navigationOptions = ({screenProps}) => ({
    tabBarColor: violet,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='photos'
        inActiveColor={screenProps.inactiveColor}
      />
    ),
    tabBarOnPress: ({defaultHandler}) => screenProps.updateInactiveColor('directory', defaultHandler)()
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Album</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
