/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import VoiceToTextComponent from '../../components/VTT';
import TextToVoiceComponent from '../../components/TTV';


const AmslerGrid = (props) => {
  const backStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    margin: 8,
    padding: 12,
    borderRadius: 8,
    width: 100
  };

  const textStyle = {
    color: 'white',
    fontSize: 16
  };

  return (
    <View>
      <Pressable
        onPress={() => props.navigation.pop()}
        style={backStyle}
      >
        <Text
          style={textStyle}
        >
          Back
        </Text>
      </Pressable>

      <View
        style={{
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 400,
        }}
      >
        <Image
          source={require('../../images/amslerGrid.jpg')}
          style={{
            width: '80%',
            height: '80%'
          }}
        />
      </View>

      <VoiceToTextComponent />
      <TextToVoiceComponent />
    </View>
  )
}

export default AmslerGrid