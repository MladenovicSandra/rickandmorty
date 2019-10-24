import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Header from '../Header'
import CharactersList from '../CharactersList'
import { Switch, Route } from 'react-router-native'
import CharacterDetails from '../CharacterDetails'
import { fetchCharacters } from '../../actions/fetchCharactersAction.js'
import { connect } from 'react-redux'
import Navigation from '../Navigation'
import Locations from '../Locations'

class MainComp extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.fetchCharacters()
    }

    render(){
        console.log(this.props.characters)
        return(
            <View>
                <Header />
                <ScrollView>
                    <Switch>
                        <Route 
                            exact path='/'
                            render={() => <Navigation />} 
                        />
                        <Route 
                            exact path='/characters'
                            render={() => <CharactersList characters={this.props.characters} />} 
                        />
                        <Route 
                            exact path='/locations'
                            component={Locations} />} 
                        />
                        <Route 
                            exact path='/characterdetails/:id' 
                            component={CharacterDetails} 
                        />
                    </Switch>
                </ScrollView>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => {
            dispatch(fetchCharacters())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        characters: state.characters.characters
    }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComp)
export default Main