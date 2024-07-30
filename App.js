import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStartPage from './component/getStartPage';
import GetLoginPage from './component/loginPage';
import GetSignupPage from './component/signupPage';
import GetProductPage from './component/productPage';
import GetProductList from './component/productListPage';
import Cart from './component/cart';
import GetDashBoard from './component/dashboard';
import FavoriteContextProvider from './component/contextapi';
import Logout from './component/logout';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './component/ProfileScreen';
import SettingsScreen from './component/SettingScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'DashBoard':
              iconName = 'speedometer-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
            default:
              iconName = 'home-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Stack.Screen name='HomeScreen' component={GetStartPage} />
      <Stack.Screen name='Login' component={GetLoginPage} />
      <Stack.Screen name='Signup' component={GetSignupPage} />
      <Stack.Screen name='products' component={GetProductPage} />
      <Stack.Screen name='productList' component={GetProductList} />
      <Stack.Screen name='dashBoard' component={GetDashBoard} />
      <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'DashBoard':
              iconName = 'speedometer-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
            default:
              iconName = 'home-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="DashBoard" component={GetDashBoard} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Cart':
              iconName = 'cart-outline';
              break;
            case 'Dashboard':
              iconName = 'speedometer-outline';
              break;
            case 'Logout':
              iconName = 'log-out-outline';
              break;
            default:
              iconName = 'home-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Home" component={MainTabNavigator} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Dashboard" component={GetDashBoard} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
