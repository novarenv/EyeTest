/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import VoiceToTextComponent from '../../components/VTT';
import TextToVoiceComponent from '../../components/TTV';


const Myopia = (props) => {
  const [alphabets, setAlphabets] = useState([
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ])
  const [alphabet, setAlphabet] = useState(0)

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

  const switchImage = () => {
    setAlphabet(Math.floor(Math.random() * (26 - 0 + 1)) + 0)
  }

  setTimeout(switchImage, 2000)

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
          height: 600,
        }}
      >
        {/* <Image
          source={require('../../images/myopiaTest.jpg')}
          style={{
            width: '80%',
            height: '80%'
          }}
        /> */}
        <Text
          style={{
            color: 'black',
            fontSize: 400
          }}
        >
          {alphabets[alphabet]}
        </Text>
      </View>

      <View>
        <Pressable
        
        >
          <Text
            style={textStyle}
          >
            Back
          </Text>
        </Pressable>
      </View>

      <VoiceToTextComponent />
      <TextToVoiceComponent />
    </View>
  )
}

export default Myopia