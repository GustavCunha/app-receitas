import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const s = StyleSheet.create({
    container: {
        backgroundColor: THEME.colors.background,
        padding: 14
    },
    cover: {
        height: 200,
        borderRadius: 14,
        width: '100%'
    },
    playIcon: {
        position: 'absolute',
        zIndex: 9,
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
    },
    title: {
        fontSize: 18,
        marginTop: 14,
        fontWeight: 'bold',
        color: THEME.colors.black,
        marginBottom: 4
    },
    ingredientText: {
        marginBottom: 14
    },
    section: {
        backgroundColor: THEME.colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sectionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: THEME.colors.white
    }
})