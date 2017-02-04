import React , { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
const {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative

class Home extends Component {


  search() {
    this.props.actions.fetchRecipes('test,test1')
  }

  render() {
    return <View>
      <View>
        <TouchableHighlight
          style={{marginTop:20}}
          onPress={ () => this.search()}
          >
          <Text>
            Serch Recipe
          </Text>
        </TouchableHighlight>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  }

}

function mapStateToProps(state) {
  return{
    searchedRecipes: state.searchedRecipes,
    recipesCount: state.recipesCount
  }
}

export default connect(mapStateToProps)(Home)
