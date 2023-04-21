import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { Text as MotiText } from 'moti';

import { Card, CardProps } from '../../components/Card';
import { Logo } from '../../components/Logo'
import { Loading } from '../../components/Loading';

import { API } from '../../services/api';
import { THEME } from '../../styles/theme';
import { s } from './styles'

export function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [foods, setFoods] = useState<CardProps[]>([]);
    const [loading, setLoading] = useState(true);

    function handleSearch() {
        if(!searchValue) return;

        fetchApi();
    }

    async function fetchApi() {
        try {
            setLoading(true);
            const {data} = await API.get(`/foods?name_like=${searchValue}`);
            setFoods(data);
        } catch (error) {
            console.log(error);
            alert('Erro ao carregar informações')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <SafeAreaView style={s.container}>
            <Logo />

            <MotiText 
                style={s.title}
                from={{opacity: 0, translateY: 15}}
                animate={{opacity: 1, translateY: 0}}
                transition={{delay: 100, type: 'timing', duration: 650}}
            >
                Encontre a receita {'\n'}que combina com você
            </MotiText>

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

            {loading ? 
                <Loading /> 
                : 
                <FlatList 
                    data={foods}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => <Card data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 50}}
                    ListEmptyComponent={() => <Text style={{fontSize: 16}}>Que pena! Não encontramos sua receita...</Text>}
                />
            }

        </SafeAreaView>
    )
}