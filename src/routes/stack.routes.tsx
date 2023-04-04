import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Search } from '../screens/Search';

const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen 
                name='Home' 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name='Detail' 
                component={Detail}
                options={{
                    title: 'Detalhes da receita'
                }}
            />
            <Screen 
                name='Search' 
                component={Search}
                options={{
                    title: 'Veja o que encontramos'
                }}
            />
        </Navigator>
    )
}