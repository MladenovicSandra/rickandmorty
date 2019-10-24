import React from 'react'
import { View, Text, Image } from 'react-native'
import Style from './style.js'

class CharacterDetails extends React.Component{
    constructor(){
        super()
        this.state = {
            character: {
                origin: {},
                location: {},
                episodes: []
            }
        }
    }
    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`,
            {method: 'get'}
        ).then((responce) => responce.json())
        .then((data) => {
            console.log(data)
            this.setState({
                character: data
            })
        })
        .then((error) => console.log(error))
    }
    render(){
        return(
            <View style={Style.characterCard}>
                <Image source={{uri: this.state.character.image}} style={Style.image}/>
                <View style={Style.card}>
                    <View style={Style.cardItem}>
                        <Text style={Style.itemLabel}>Name</Text>
                        <Text style={Style.itemValue}>{this.state.character.name}</Text>
                    </View>
                    <View style={Style.cardItem}>
                        <Text style={Style.itemLabel}>Gender</Text>
                        <Text style={Style.itemValue}>{this.state.character.gender}</Text>
                    </View>
                    <View style={Style.cardItem}>
                        <Text style={Style.itemLabel}>Species</Text>
                        <Text style={Style.itemValue}>{this.state.character.species}</Text>
                    </View>
                    <View style={Style.cardItem}>
                        <Text style={Style.itemLabel}>Status</Text>
                        <Text style={Style.itemValue}>{this.state.character.status}</Text>
                    </View>
                    <View style={Style.cardItem}>
                        <Text style={Style.itemLabel}>Origin</Text>
                        <Text style={Style.itemValue}>{this.state.character.origin.name}</Text>
                    </View>
                    <View style={Style.cardItem}>
                        <Text style={Style.itemLabel}>Location</Text>
                        <Text style={Style.itemValue}>{this.state.character.location.name}</Text>
                    </View>
                </View>
            </View>
        )
    } 
}
export default CharacterDetails


