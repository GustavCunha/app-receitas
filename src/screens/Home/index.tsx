import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons';

import { Logo } from '../../components/Logo'

import { s } from './styles'
import { THEME } from '../../styles/theme';

export function Home() {
    const [searchValue, setSearchValue] = useState('');

    function handleSearch() {

    }

    return (
        <SafeAreaView style={s.container}>
            <Logo />

            <Text style={s.title}>
                Encontre a receita {'\n'}que combina com você
            </Text>

            <View style={s.form}>
                <TextInput
                    style={s.input}
                    value={searchValue}
                    onChangeText={setSearchValue} 
                    placeholder='Digite o nome da comida...'
                />

                <TouchableOpacity onPress={handleSearch} activeOpacity={0.7}>
                    <Ionicons name='search' size={28} color={THEME.colors.primary} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}