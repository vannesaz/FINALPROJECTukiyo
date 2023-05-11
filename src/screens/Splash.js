import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: "#1F2F22", alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{paddingHorizontal: 20, paddingVertical: 5, borderWidth: 3, borderRadius: 20, borderColor: "white"}}>
            <Text style={{fontSize: 40, color: 'white', fontFamily : "OriginalSurfer-Regular"}}>ukiyo</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})