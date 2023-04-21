import React, { useLayoutEffect, useState } from 'react'
import { View, Text, Pressable, ScrollView, Image, Modal, Share } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons';

import { CardProps } from '../../components/Card'
import { IngredientCard } from '../../components/IngrendientCard';
import { Instruction } from '../../components/Instruction';
import { Video } from '../../components/Video';

import { isFavorite, removeItem, saveFavorite } from '../../utils/storage';
import { THEME } from '../../styles/theme';
import { s } from './styles'

interface Params {
    data: CardProps;
}

export function Detail() {
    const route = useRoute();
    const {data} = route.params as Params;

    const navigation = useNavigation();

    const [showVideo, setShowVideo] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useLayoutEffect(() => {

        async function getStatusFavorites() {
            const receipeFavorite = await isFavorite(data);
            setFavorite(receipeFavorite);
        }

        getStatusFavorites();

        navigation.setOptions({
            title: data.name || 'Detalhes da receita',
            headerRight: () => (
                <Pressable onPress={() => handleFavoriteRecipe(data)}>
                    {favorite ? (
                        <Ionicons 
                            name='heart' 
                            size={28} 
                            color={THEME.colors.favorite}/>
                    ) : (
                        <Ionicons 
                            name='heart-outline' 
                            size={28} 
                            color={THEME.colors.black}/>
                        )
                    }
                </Pressable>
            )
        })
    }, [navigation, data, favorite])

    async function handleFavoriteRecipe(recipe: CardProps) {
        if(favorite) {
            await removeItem(recipe.id);
            setFavorite(false)
        } else {
            await saveFavorite('@appreceitas', recipe);
            setFavorite(true)
        }
    }

    function handleOpenVideo() {
        setShowVideo(true)
    }

    async function shareReceipe() {
        try {
            await Share.share({
                message: `Receita: ${data.name}\nIngredientes: ${data.total_ingredients}\nVi lá no app Receita Fácil`
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView 
            style={s.container} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
        >
            <Pressable onPress={handleOpenVideo}>
                <View style={s.playIcon}>
                    <Ionicons name='play-circle-outline' size={56} color={THEME.colors.white}/>
                </View>
                <Image source={{uri: data.cover}} style={s.cover}/>
            </Pressable>

            <View style={s.header}>
                <View>
                    <Text style={s.title}>{data.name}</Text>
                    <Text style={s.ingredientText}>Ingredientes ({data.total_ingredients})</Text>
                </View>

                <Pressable onPress={shareReceipe}>
                    <Ionicons name='share-social-outline' size={24} color={THEME.colors.black}/>
                </Pressable>
            </View>

            {data.ingredients.map(item => {
                return <IngredientCard key={item.id} data={item}/>
            })}

            <View style={s.section}>
                <Text style={s.sectionText}>Modo de preparo</Text>
                <Ionicons name='arrow-down' size={22} color={THEME.colors.white}/>
            </View>

            {data.instructions.map((item, index) => {
                return <Instruction key={index} data={item} />
            })}

            <Modal visible={showVideo} animationType='slide'>
                <Video 
                    handleClose={() => setShowVideo(false)}
                    videoUrl={data.video}
                />
            </Modal>
        </ScrollView>
    )
}