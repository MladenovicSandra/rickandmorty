import React from 'react'
import { View,  Text, Image } from 'react-native'
import Style from './style.js'
import { Link } from 'react-router-native'

class CharactersList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={Style.container}>
                {this.props.characters.map((item, i) => 
                    <CharacterListItem key={item.id} data={item} />
                )} 
            </View>
        )
    }
}
export default CharactersList

class CharacterListItem extends React.Component {
    render(){
        var character = this.props.data
        return(
            <Link to={'/characterdetails/' + character.id}>
                <View style={Style.card}>
                    <Image
                        style={Style.img} 
                        source={{uri: character.image}} />
                    <Text style={Style.name}>{character.name}</Text>
                    <Text style={Style.status}>{character.status}</Text>
                </View>
            </Link>
        )
    }
}