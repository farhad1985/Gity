import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import HomeScreen from './Home';
import PinScreen from './Pin';
import FavoriteScreen from './Favorite';
import TreeScreen from './Tree';
import SearchScreen from './Search';

const NavigationHomeScreen = createStackNavigator({
    Home: HomeScreen,
    Search: SearchScreen
})

const Tabbar = createBottomTabNavigator(
    {
        Home: NavigationHomeScreen,
        Pin: PinScreen,
        Favorite: FavoriteScreen,
        Tree: TreeScreen
    }, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarLabel: () => {
                return null
            },
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state

                if (routeName === 'Home') {
                    return <Image source={require('../assets/home.png')} style={[style.icon, { tintColor }]} />
                } else if (routeName === 'Pin') {
                    return <Image source={require('../assets/pin.png')} style={[style.icon, { tintColor }]} />
                } else if (routeName === 'Favorite') {
                    return <Image source={require('../assets/star.png')} style={[style.icon, { tintColor }]} />
                } else if (routeName === 'Tree') {
                    return <Image source={require('../assets/tree.png')} style={[style.icon, { tintColor }]} />
                }
            }
        }),
    }
)

const MainTabBarNavigation = createAppContainer(Tabbar)

export default MainTabBarNavigation


const style = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    }
})