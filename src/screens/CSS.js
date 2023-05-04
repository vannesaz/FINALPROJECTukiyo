import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { BackGround2 } from '../assets';

const CSS = () => {
  return (
    <View style = {{ backgroundColor : "#CED9DF"}}>
      <View
        style={{
          backgroundColor: '#1F2F22',
          width: '100%',
          height: 50,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}></View>
      <View style = {{paddingHorizontal : 22, marginTop : 32}}>
        <Text style = {{fontSize : 20, color : "#3E563E"}}>Choose your scenery</Text>
        <Text style = {{fontSize : 13, color : "#3E563E", width : "80%"}}>
          Immerse yourself right in the magic of the world you created.
        </Text>
        <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginTop : 25}}>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}>
                <Text style = {{color : 'white'}}>
                    Town
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}>
                <Text style = {{color : 'white'}}>
                    Town
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}>
                <Text style = {{color : 'white'}}>
                    Town
                </Text>
            </TouchableOpacity>
        </View>
        <Image source={BackGround2} style = {{marginVertical : 18, borderRadius : 35, alignSelf : 'center'}}/>
        <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}>
                <Text style = {{color : 'white'}}>
                    Town
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}>
                <Text style = {{color : 'white'}}>
                    Town
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}>
                <Text style = {{color : 'white'}}>
                    Town
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CSS;

const styles = StyleSheet.create({});
