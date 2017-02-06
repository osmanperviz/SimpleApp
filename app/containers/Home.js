import React , { Component } from 'react'
import ReactNative from 'react-native'
import { View, Button, StyleSheet, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'
import UserList from '../components/UserList'


class Home extends Component {


  componentWillMount() {

  }

  render() {
    return<View>
        <UserList {...this.props} />
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              // onPress={() => this.props.actions.fetchUsers()}
              >
              <Text>Fetch Users</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
  }
}

const styles =  StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'column',
     borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:150
  },
  buttonContainer: {
    flex:0.1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    flexDirection:'row',
    height:40,
    alignItems:'center',
    width: 100,
    backgroundColor: '#2E9298',
     borderRadius: 10,
     padding: 10,
     shadowColor: '#000000',
     shadowOffset: {
       width: 0,
       height: 3
     },
     shadowRadius: 10,
     shadowOpacity: 0.25,
  },
})

function mapStateToProps(state) {
  return{
    users: state.users,
    usersCount: state.usersCount
  }
}

export default connect(mapStateToProps)(Home)
