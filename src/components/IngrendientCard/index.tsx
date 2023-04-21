import React from 'react'
import { View, Text } from 'react-native'
import { s } from './styles'

export interface IngredientCardProps {
    id: number;
    name: string;
    amount: string;
}

interface Props {
    data: IngredientCardProps
}

export function IngredientCard({data}: Props) {
    return (
        <View style={s.container}>
            <Text style={s.bold}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}