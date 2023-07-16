/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
  Button,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Tts from 'react-native-tts';

const TextToVoiceComponent = () => {
  const [textToSpeak, setTextToSpeak] = useState('Anda mempunyai myopia dengan minus -2');

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

  const speakText = () => {
    Tts.speak(textToSpeak);
  };

  const stopSpeaking = () => {
    Tts.stop();
  };

  return (
    <View>
      {/* <Pressable style={buttonStyle} onPress={speakText}>
        <Text style={textStyle}>Start</Text>
      </Pressable>
      <Pressable style={buttonStyle} onPress={stopSpeaking}>
        <Text style={textStyle}>End</Text>
      </Pressable> */}
    </View>
  );
};

export default TextToVoiceComponent