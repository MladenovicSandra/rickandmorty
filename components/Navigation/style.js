import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    card: {
        borderWidth: 3,
        borderRadius: 2,
        borderColor: '#d3dff2',
        margin: 10,
        height: 255,
    },
    img: {
        height: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 15,
        color: 'white',
        fontFamily: 'Raleway'
    }
})
export default Style