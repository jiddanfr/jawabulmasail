import React, { Component } from 'react';
import {View, StatusBar, Text, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Detail extends Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      const title = this.props.navigation.getParam('title', 'no-title');
      const detail = this.props.navigation.getParam('detail', 'no-detail');
      return (
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9D5C0D" />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: "row" }}>
            <Icon name="arrow-left" size={30} color="#FAFAFA" style={{marginRight: 20}} onPress={() => this.props.navigation.pop()} />
            <Text style={{textAlign: 'center', color: "#FAFAFA", fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
            </View>
            <Text style={{textAlign: 'center', marginTop: 20, fontWeight: 'bold', fontSize: 20}}>{title}</Text>
            <Text>{detail}</Text>

      </View>
          
          
      );
    }
  }
  
  export default Detail;