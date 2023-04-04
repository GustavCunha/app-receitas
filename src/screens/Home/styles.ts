import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
        paddingTop: 40,
        paddingHorizontal: 14
    },
    title: {
        fontSize: 26,
        lineHeight: 34,
        fontWeight: 'bold',
        color: THEME.colors.header
    },
    form: {
        width: '100%',
        borderRadius: 8,
        marginVertical: 16,
        backgroundColor: THEME.colors.white,
        borderWidth: 1,
        borderColor: THEME.colors.border,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        maxWidth: '90%',
        height: 52
    }
})