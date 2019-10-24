import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchLocations } from '../../actions/fetchLocationsAction'
import Style from './style.js'

class LocationsComp extends React.Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.fetchLocations()
    }

    render(){
        console.log(this.props.locations)
        return(
            <View style={Style.container}>
                {this.props.locations.map((item, index) => 
                    <SingleLocationItem item={item} key={index} />
                )}
            </View>
        )
    }
}

class SingleLocationItem extends React.Component {
    render(){
        var location = this.props.item
        console.log(location)
        return(
            <View style={Style.card}>
                <View style={Style.cardItem}>
                    <Text style={Style.name}>{location.name}</Text>
                </View>
                <View style={Style.cardItem}>
                    <Text style={Style.itemLabel}>Dimension:</Text>
                    <Text style={Style.itemValue}>{location.dimension}</Text>
                </View>
                <View style={Style.cardItem}>
                    <Text style={Style.itemLabel}>Type of planet:</Text>
                    <Text style={Style.itemValue}>{location.type}</Text>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchLocations: () => {
            dispatch(fetchLocations())
        }
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return({
        locations: state.locations.locations
    })
}
const Locations = connect(mapStateToProps, mapDispatchToProps)(LocationsComp)
export default Locations