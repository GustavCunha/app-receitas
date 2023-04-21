import React from 'react'
import { View, Text } from 'react-native'
import { s } from './styles'

export interface InstructionProps {
    id: number;
    text: string;
}

interface Props {
    data: InstructionProps
}

export function Instruction({data}: Props) {
    return (
        <View style={s.container}>
            <Text style={s.text}>
                <Text style={s.bold}>{data.id} -</Text> {data.text}
            </Text>
        </View>
    )
}