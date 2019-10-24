import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Link } from 'react-router-native'
import Style from './style.js'

class Navigation extends React.Component {

    render(){
        return(
            <View>
                <Link to='/characters'>
                    <View style={Style.card}>
                        <ImageBackground source={require('../../assets/img/characters.jpg')} style={Style.img}>
                            <Text style={Style.text}>Characters</Text>
                        </ImageBackground>
                    </View>
                </Link>
                <Link to='/locations'>
                    <View style={Style.card}>
                        <ImageBackground source={require('../../assets/img/planets.png')} style={Style.img}>
                            <Text style={Style.text}>Planets</Text>
                        </ImageBackground>
                    </View>
                </Link>
            </View>
        )
    }
}
export default Navigation