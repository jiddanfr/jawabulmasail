import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home' }),
    ],
  });

class Splash extends Component {
    componentDidMount() {
        setTimeout(() =>{
            this.props.navigation.dispatch(resetAction)
        }, 2000);
    }
    render() { 
        return ( 
            <View style={{backgroundColor: '#ffc400', flex: 1}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 32, fontWeight: 'bold'}}>JAWABUL MASAIL</Text>
                        <Text style={{fontSize: 18}}>ENSIKLOPEDIA FIQIH</Text>
                    </View>
                    <Text style={{textAlign: 'center', marginBottom: 10}}>version 1.0</Text>
            </View>
         );
    }
}
 
export default Splash;