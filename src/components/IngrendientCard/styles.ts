import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const s = StyleSheet.create({
    container: {
        backgroundColor: THEME.colors.white,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 14,
        marginBottom: 14
    },
    bold: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});