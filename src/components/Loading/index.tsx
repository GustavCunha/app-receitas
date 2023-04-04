import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { THEME } from '../../styles/theme'

export function Loading() {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size='large' color={THEME.colors.primary}/>
        </View>
    )
}