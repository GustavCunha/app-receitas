import React from 'react'
import {Text, SafeAreaView, TouchableOpacity } from 'react-native'
import WebView from 'react-native-webview';
import {Ionicons} from '@expo/vector-icons';

import { THEME } from '../../styles/theme';
import { s } from './styles';

interface Props {
    handleClose: () => void;
    videoUrl: string;
}

export function Video({handleClose, videoUrl}: Props) {
    return (
        <SafeAreaView style={s.container}>
            <TouchableOpacity style={s.backbutton} onPress={handleClose} activeOpacity={0.9}>
                <Ionicons name='arrow-back' size={24} color={THEME.colors.white}/>
                <Text style={s.backText}>Voltar</Text>
            </TouchableOpacity>

            <WebView 
                style={s.content}
                source={{uri: videoUrl}}
            />
        </SafeAreaView>
    )
}