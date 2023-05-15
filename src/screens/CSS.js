import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { BackGround2 } from '../assets';

const CSS = ({navigation}) => {
  return (
    <View style = {{ backgroundColor : "#CED9DF", flex: 1}}>
      <View
        style={{
          backgroundColor: '#1F2F22',
          width: '100%',
          height: 50,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}></View>
      <View style = {{paddingHorizontal : 22, marginTop : 32}}>
        <Text style = {{fontSize : 20, color : "#3E563E", fontFamily : "OriginalSurfer-Regular"}}>Choose your scenery</Text>
        <Text style = {{fontSize : 13, color : "#3E563E", width : "80%", fontFamily : "OriginalSurfer-Regular"}}>
          Immerse yourself right in the magic of the world you created.
        </Text>
        <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginTop : 25}}>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}} onPress = { () => navigation.navigate("OtherScreen") }>
                <Text style = {{color : 'white', fontFamily : "OriginalSurfer-Regular"}}>
                    cafe
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}} onPress = { () => navigation.navigate("OtherScreen") }>
                <Text style = {{color : 'white', fontFamily : "OriginalSurfer-Regular"}}>
                    forest
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}onPress = { () => navigation.navigate("OtherScreen") }>
                <Text style = {{color : 'white', fontFamily : "OriginalSurfer-Regular"}}>
                    ocean
                </Text>
            </TouchableOpacity>
        </View>
        <Image source={BackGround2} style = {{marginVertical : 18, borderRadius : 35, alignSelf : 'center'}}/>
        <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}onPress = { () => navigation.navigate("OtherScreen") }>
                <Text style = {{color : 'white', fontFamily : "OriginalSurfer-Regular"}}>
                    library
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}onPress = { () => navigation.navigate("OtherScreen") }>
                <Text style = {{color : 'white', fontFamily : "OriginalSurfer-Regular"}}>
                    castle
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width : 100, height : 100, backgroundColor : "#1F2F22", borderRadius : 30, justifyContent : 'center', alignItems : 'center'}}onPress = { () => navigation.navigate("OtherScreen") }>
                <Text style = {{color : 'white', fontFamily : "OriginalSurfer-Regular"}}>
                    dream
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CSS;

const styles = StyleSheet.create({});
