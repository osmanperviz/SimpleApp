import React, { Component } from 'react'
import ReactNative from 'react-native'
import Row from '../components/Row'
const {
  ScrollView,
  ListView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative

class UserList extends Component {
  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource({
      sectionHeaderHasChanged: this._sectionHeaderHasChanged,
      rowHasChanged: this._rowHasChanged,
    });

    this.state = {
      dataSource: dataSource
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.props.users) {
      let {data, sectionIds} = this._getListViewData(nextProps.users);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(data, sectionIds)
      })

    }
  }

  _getListViewData(users) {
    let data = {};
    let sectionIds = [];

    Object.keys(users).map((key) => {
      if (sectionIds.indexOf(key) === -1) {
        sectionIds.push(key);
        data[key] = [];
      }
      data[key].push(users[key]);
    });

    return {data, sectionIds};
  }

  _sectionHeaderHasChanged(oldSection, newSection) {
    return oldSection !== newSection;
  }

  _rowHasChanged(oldRow, newRow) {
    return oldRow !== newRow;
  }

  _renderSeparator(sectionID, rowID, ) {
    return (
      <View key={"SEP_" + sectionID + "_" + rowID}  style={styles.separator}/>
    );
  }

  fetchUsers() {
     this.props.actions.fetchUsers()
  }

  render() {
    return(
        <ListView
          ref="listView"
          automaticallyAdjustContentInsets={true}
          dataSource={this.state.dataSource}
          renderRow= { (data) => <Row {...data}/> }
          renderSectionHeader={this._renderSectionHeader}
          // renderSeparator={this._renderSeparator}
        />
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: 100,
    backgroundColor: '#8E8E8E',
  }
});

export default UserList
