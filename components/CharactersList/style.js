import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    card: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        borderColor: '#d3dff2',
        borderWidth: 1,
        borderRadius: 3,
    },
    img: {
        width: '100%',
        height: 280
    },
    name: {
        color: 'rgb(17,176,200)',
        fontSize: 23,
        marginTop: 10,
        paddingLeft: 10,
    },
    status: {
        color: 'grey',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10
    },
    container: {
        marginBottom: 80
    }
})

export default Style