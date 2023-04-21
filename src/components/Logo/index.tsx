import React from 'react'
import { Image } from 'react-native'
import {View} from 'moti';

import logo from '../../assets/logo.png';

export function Logo() {
    return (
        <View
            from={{opacity: 0, translateX: -50}}
            animate={{opacity: 1, translateX: 0}}
            transition={{type: 'timing', duration: 850}}
        >
            <Image source={logo} style={{marginBottom: 10}}/>
        </View>
    )
}