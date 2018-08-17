import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import InitialScreen from './InitialScreen';
import HomeScreen from './HomeScreen';
import HistoryScreen from './HistoryScreen';
import SearchScreen from './SearchScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
  Search: SearchScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createSwitchNavigator({
  Initial: InitialScreen,
  App: AppStack,
  Auth: AuthStack,
});
