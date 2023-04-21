import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const s = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    backbutton: {
        width: '100%',
        backgroundColor: THEME.colors.primary,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14
    },
    backText: {
        color: THEME.colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14
    }, 
    content: {
        flex: 1, 
        width: '100%'
    }
});