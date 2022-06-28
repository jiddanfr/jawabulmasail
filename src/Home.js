import React, { Component, useRef, useState } from 'react';
import {View, StatusBar, Text,  FlatList, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import database from './database.json'

class Home extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        data: database
       };
    }

    search = () =>{
      let data = database;

      data = data.filter(item => item.title.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()))

      this.setState({
        data: data
      })
    }   

    renderDrawer = () => {
      return(
        <View style={{marginTop: 20, marginLeft: 10}}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="home" size={30} color="#E5890A" style={{marginRight: 10}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#E5890A", marginLeft: 10}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Icon name="user" size={30} color="#E5890A" style={{marginRight: 10}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#E5890A", marginLeft: 10}}>About</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'column'}}>
          <Text style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e", marginLeft: 10}}>PEDOMAN HIDUP BERBANGSA DAN BERNEGARA</Text>
          </Text>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
            <Icon name="book" size={20} color="#9e9e9e" style={{marginRight: 10, marginLeft: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e"}}>ISLAM DAN NASIONALISME</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Icon name="book" size={20} color="#9e9e9e" style={{marginRight: 10, marginLeft: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e"}}>PLUSRALITAS DAN SOSIAL KEMASYARAKATAN</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column'}}>
          <Text style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e", marginLeft: 10}}>FIQIH JAWABUL MASAIL</Text>
          </Text>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Icon name="book" size={20} color="#9e9e9e" style={{marginRight: 10, marginLeft: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e"}}>AHLU AS-SUNNAH WA AL-JAMA'AH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Icon name="book" size={20} color="#9e9e9e" style={{marginRight: 10, marginLeft: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e"}}>BID'AH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Icon name="book" size={20} color="#9e9e9e" style={{marginRight: 10, marginLeft: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e"}}>PENERAPAN HUKUM FIQIH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Icon name="book" size={20} color="#9e9e9e" style={{marginRight: 10, marginLeft: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e"}}>THAHARAH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Icon name="book" size={20} color="#9e9e9e" style={{marginRight: 10, marginLeft: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#9e9e9e"}}>SHALAT</Text>
          </TouchableOpacity>
          </View>
        </View>
      )
    } 

    

    render() {    
      return (
        

        <DrawerLayout
        ref={drawer => {
          this.drawer = drawer;
        }}
          drawerWidth={340}
          drawerPosition={DrawerLayout.positions.Left}
          drawerType="front"
          drawerBackgroundColor="#ddd"
          renderNavigationView={this.renderDrawer}
          onDrawerSlide={this.handleDrawerSlide}>
          <View style={{flex: 1, backgroundColor:"#FAFAFA"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9D5C0D" />
            <View style={{padding: 20, backgroundColor: "#E5890A", elevation: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="bars" size={30} color="#FAFAFA" style={{marginRight: 20}} onPress={() => this.drawer.openDrawer()} />
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center', color: "#FAFAFA",  fontWeight: 'bold', fontSize: 20}}>JAWABUL MASAIL</Text>
            </View>
          
          </View>

            <TextInput
            style={{height: 40, borderColor: 'black', borderWidth: 2,paddingLeft: 10, borderRadius: 5, marginHorizontal: 10, marginVertical: 20}}
            placeholder="Ketik untuk mencari"
            onChangeText={text => this.setState({text: text})}
            value={this.state.text}
            onKeyPress={() => this.search()}
            />
  
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => 
            <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, marginHorizontal: 20, marginVertical: 5, padding: 9}}
            onPress={() => this.props.navigation.navigate('Detail', {title: item.title, detail: item.arabic})}>
              <Text style={{fontSize:24, fontWeight: 'bold'}}>{item.title}</Text>
              <Text style={{fontSize:19, marginTop:5}}>{item.arabic}</Text>
            </TouchableOpacity>
          }
            keyExtractor={item => item.title}
          />

      </View>
      </DrawerLayout>
          
      );
    }
  }
  
  export default Home;