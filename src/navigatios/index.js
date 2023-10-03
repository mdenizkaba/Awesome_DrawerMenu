import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './pages/Home';
import SettingsScreen from './pages/Settings';
import Icon from '../components/Icon';
const Index = createDrawerNavigator();

const draverOptions = {
  headerShown: false,
  drawerActiveBackgroundColor: '#bae6fd',
  drawerInactiveBackgroundColor: 'transparent',
  drawerActiveTintColor: '#f5f3ff',
  drawerInactiveTintColor: '#c4b5fd',
  overlayColor: 'transparent',
  drawerStyle: {
    backgroundColor: 'transparent',
    width: '50%',
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
  drawerLabelStyle: {
    // fontFamily: 'Gilroy',
    fontWeight: 500,
    fontSize: 18,
    borderRadius: 20,
    color: '#0284c7',
    marginLeft: -20,
  },
};
const Navigation = () => {
  return (
    <View style={styles.wrapper}>
      <NavigationContainer>
        <Index.Navigator
          initialRouteName={'Home'}
          screenOptions={draverOptions}>
          <Index.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerLabel: 'Home',
              drawerIcon: () => (
                <Icon name="home" size={20} color={'#0284c7'} />
              ),
            }}
          />
          <Index.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              drawerLabel: 'Settings',
              drawerIcon: () => <Icon name="cog" size={20} color={'#0284c7'} />,
            }}
          />
        </Index.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default Navigation;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
