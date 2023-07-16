/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
  Button,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceToTextComponent = (props) => {
  const [recognizedText, setRecognizedText] = useState('');

  const buttonStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    margin: 8,
    padding: 12,
    borderRadius: 8
  };

  const textStyle = {
    color: 'white',
    fontSize: 16
  };

  const startRecognition = async () => {
    try {
      await Voice.start('id');
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecognition = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  };

  Voice.onSpeechResults = (event) => {
    console.log('Event', JSON.stringify(event))
    const text = event.value[0];
    setRecognizedText(text);
  };

  return (
    <>
      <Pressable style={buttonStyle} onPress={startRecognition}>
        <Text style={textStyle}>Start</Text>
      </Pressable>
      <Pressable style={buttonStyle} onPress={stopRecognition}>
        <Text style={textStyle}>End</Text>
      </Pressable>
      <Text style={{alignSelf: 'center', fontSize: 20, color: 'black'}}>Recognized Text: {recognizedText}</Text>
    </>
  );
};

export default VoiceToTextComponent