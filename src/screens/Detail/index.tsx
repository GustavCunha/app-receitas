import React, { useLayoutEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons';

import { CardProps } from '../../components/Card'

import { THEME } from '../../styles/theme';
import { s } from './styles'

interface Params {
    data: CardProps;
}

export function Detail() {
    const route = useRoute();
    const {data} = route.params as Params;

    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({
            title: data.name || 'Detalhes da receita',
            headerRight: () => (
                <Pressable>
                    <Ionicons name='heart-sharp' size={28} color={THEME.colors.favorite}/>
                </Pressable>
            )
        })
    }, [navigation, data])

    return (
        <View style={s.container}>
            <Text>{data.name}</Text>
        </View>
    )
}