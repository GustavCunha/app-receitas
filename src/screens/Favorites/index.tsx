import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import { getFavorites } from '../../utils/storage';

import { Card, CardProps } from '../../components/Card';

import { s } from './styles'

export function Favorites() {
    const [recipes, setRecipes] = useState<CardProps[]>([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        let isActive = true;

        async function getRecipes() {
            const result = await getFavorites('@appreceitas')
            if(isActive) {
                setRecipes(result)
            }
        }

        if(isActive) getRecipes()

        return () => {
            isActive = false
        }
    }, [isFocused])

    return (
        <SafeAreaView style={s.container}>
            <Text style={s.title}>Receitas Favoritas</Text>

            {recipes.length === 0 && (
                <Text>Você ainda não favoritou nenhuma receita!</Text>
            )}

            <FlatList 
                showsVerticalScrollIndicator={false} 
                style={{marginTop: 14}}
                data={recipes}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => <Card data={item} />}
            />
        </SafeAreaView>
    )
}