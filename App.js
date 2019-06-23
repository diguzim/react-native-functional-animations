import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import FadeInClassComponent from './screens/FadeInClassComponent';
import FadeInFunctionalComponent from './screens/FadeInFunctionalComponent';
import ExpandableView from './screens/ExpandableView';

class HomeScreen extends Component {
  _navigateTo(page) {
    this.props.navigation.navigate(page)
  }

  render() {
    const { container, listItem } = styles;
    return (
      <View style={container}>
        <Text style={listItem} onPress={() => this._navigateTo('FadeInClassComponent')}>Fade In with Class Component</Text>
        <Text style={listItem} onPress={() => this._navigateTo('FadeInFunctional')}>Fade In with Functional Component</Text>
        <Text style={listItem} onPress={() => this._navigateTo('ExpandableView')}>ExpandableView</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'React Native Animation Examples'
    })
  },
  FadeInClassComponent: {
    screen: FadeInClassComponent,
    navigationOptions: () => ({
      title: 'Fade In with Class Component'
    })
  },
  FadeInFunctional: {
    screen: FadeInFunctionalComponent,
    navigationOptions: () => ({
      title: 'Fade In with Functional Component'
    })
  },
  ExpandableView: {
    screen: ExpandableView,
    navigationOptions: () => ({
      title: 'Expandable View'
    })
  }
},{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  listItem: {
    color: 'blue',
    paddingVertical: 5,
    fontSize: 20
  }
});
