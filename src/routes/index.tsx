import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';

import {Ionicons} from '@expo/vector-icons';

import { THEME } from '../styles/theme';

const {Navigator, Screen} = createBottomTabNavigator();

export function Routes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: THEME.colors.black,

                tabBarStyle: {
                    backgroundColor: THEME.colors.white,
                    borderTopWidth: 0
                }
            }}
        >
            <Screen 
                name='Home' 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused) {
                            return <Ionicons name='home' color={THEME.colors.black} size={size} />
                        }
                        return <Ionicons name='home-outline' color={color} size={size} />
                    }
                }}
            />
            <Screen 
                name='Favorites' 
                component={Favorites} 
                options={{
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused) {
                            return <Ionicons name='heart-sharp' color={THEME.colors.favorite} size={size} />
                        }
                        return <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}
            />
        </Navigator>
    )
}