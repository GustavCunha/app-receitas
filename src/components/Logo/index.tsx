import React from 'react'
import { Image } from 'react-native'

import logo from '../../assets/logo.png';

export function Logo() {
    return (
        <Image source={logo} style={{marginBottom: 10}}/>
    )
}