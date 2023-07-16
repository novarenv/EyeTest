/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View } from 'react-native';
import VoiceToTextComponent from '../../components/VTT';
import TextToVoiceComponent from '../../components/TTV';


const AmslerGrid = (props) => {
  return (
    <View>
      <Button
        title="Back"
        onPress={() => props.navigation.pop()}
      />

      <VoiceToTextComponent />
      <TextToVoiceComponent />
    </View>
  )
}

export default AmslerGrid