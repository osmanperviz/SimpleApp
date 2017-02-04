import React, { Component } from 'react'
// import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActionCreators  from '../actions'
import Home from './Home'

class AppContainer extends Component {

  addRecipe(){
    this.props.actions.addRecipes();
  }

  render() {
    return <Home {...this.props }/>
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
}
export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer)
