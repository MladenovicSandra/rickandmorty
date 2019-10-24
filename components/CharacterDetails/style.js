import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    characterCard: {
        marginBottom: 80
    },
    card: {
        width: '90%',
        marginTop: 15,
        marginLeft: '5%',
        padding: 10,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderColor: 'silver',
        borderWidth: 1,
        borderRadius: 3,
    },
    cardItem: {
        width: '50%',
        // marginTop: 10,
        marginBottom: 10,
    },
    itemLabel: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgb(17,176,200)'
    },
    itemValue: {
        fontSize: 20,

    },
    itemValue: {
        fontSize: 20
    }
});

export default Style;