import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
        paddingHorizontal: 14,
        paddingTop: 36
    },
    title: {
        color: THEME.colors.black,
        fontWeight: 'bold',
        fontSize: 24
    }
})