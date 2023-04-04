import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { s } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
    data: CardProps
}

export interface CardProps {
    id: string;
    name: string;
    total_ingredients: string;
    time: number;
    cover: string;
    video: string;
    ingredients: IngredientsProps[],
    instructions: InstructionsProps[]
}

interface IngredientsProps {
    id: string;
    name: string;
    amount: string;
}

interface InstructionsProps {
    id: string;
    text: string;
}

export function Card({data}: Props) {
    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate('Detail', {data})
    }

    return (
        <TouchableOpacity style={s.container} activeOpacity={0.7} onPress={handleNavigate}>
            <Image source={{uri: data.cover}} style={s.cover}/>
            
            <View style={s.info}>
                <Text style={s.name}>{data.name}</Text>
                <Text style={s.description}>{data.total_ingredients} ingredientes | {data.time} min</Text>
            </View>
            <LinearGradient 
                style={s.gradient}
                colors={['transparent', 'rgba(0,0,0, 0.50)', 'rgb(0,0,0)']}
            />
        </TouchableOpacity>
    )
}