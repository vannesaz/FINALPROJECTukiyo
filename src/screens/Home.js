/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BackGround} from '../assets';

const Home = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#CED9DF'}}>
      <View
        style={{
          backgroundColor: '#1F2F22',
          paddingHorizontal: 28,
          paddingVertical: 18,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Hi. ukiyo here.</Text>
        <Text style={{color: 'white', fontSize: 15}}>
          let's create your own little world to relax.
        </Text>
        <Image
          source={BackGround}
          style={{width: '100%', height: 500, borderRadius: 25, marginTop: 20}}
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: '#1F2F22',
            paddingHorizontal: 5,
            marginTop: 10,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('CSS')}>
          <Text style={{color: 'white', fontFamily : "OriginalSurfer-Regular"}}>Start</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
