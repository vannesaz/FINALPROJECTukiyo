import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FotoPlay} from '../assets';
import {Playbutton, Previous, Next, Pause} from '../assets/icons';
import TrackPlayer, {State} from 'react-native-track-player';
import Slider from 'react-native-slider';

//npm install react-native-slider

const Play = () => {
  const [Play, setPlay] = useState(false);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    
      const track = {
        id : '1',
        url: require('../assets/Music/1.mp3'),
      };
    await TrackPlayer.add(track);

      const track2 = {
        id : '2',
        url: require('../assets/Music/Cafe.mp3'),
      };
    await TrackPlayer.add(track2);

      const track3 = {
        id : '3',
        url: require('../assets/Music/Castle.mp3'),
      };
    await TrackPlayer.add(track3);
  };
  
  const playNextSong = async () => {
  await TrackPlayer.skip('next');
};
  
  const playPreviousSong = async () => {
  await TrackPlayer.skip('previous');
};

  const [progress, setProgress] = useState(0);

  useEffect(() => {
  setupPlayer();

  const listener = TrackPlayer.addEventListener('playback-queue-position', async (position) => {
    const duration = await TrackPlayer.getDuration();
    const currentPosition = position.position / duration;
    setProgress(currentPosition);
  });

  return () => {
    listener.remove();
  };
}, []);

  
  return (
    <View style={{backgroundColor: '#CED9DF', flex: 1}}>
      <View
        style={{
          backgroundColor: '#1F2F22',
          height: '95%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 30,
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <View style={{alignSelf: 'flex-start'}}>
          <Text
            style={{
              fontFamily: 'OriginalSurfer-Regular',
              color: 'white',
              fontSize: 20,
            }}>
            Default Playlist Name
          </Text>
          <Text style={{fontFamily: 'OriginalSurfer-Regular', color: 'white'}}>
            Music Title - Composer
          </Text>

        </View>

        <View style={{ borderRadius: 25, overflow: 'hidden', height: '70%', marginTop: 35 }}>
          <Image source={FotoPlay} style={{ flex: 1 }} />
        </View>

        <Slider
          style={{ width: '90%', marginTop: 20 }}
          value={progress}
          onValueChange={async (value) => {
            const duration = await TrackPlayer.getDuration();
            const position = value * duration;
            TrackPlayer.seekTo(position);
            setProgress(value);
          }}
        />


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '70%',
            marginTop: 50,
          }}>
            <TouchableOpacity onPress={playPreviousSong}>
            <Previous />
          </TouchableOpacity>
          <TouchableOpacity

            onPress={async () => {
              const state = await TrackPlayer.getState();
              Play === true ? setPlay(false) : setPlay(true);
              state === State.Playing
                ? TrackPlayer.pause()
                : TrackPlayer.play();
            }}>

            {Play ? <Pause /> : <Playbutton />}
          </TouchableOpacity>
          <TouchableOpacity onPress={playNextSong}>
            <Next />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({});
