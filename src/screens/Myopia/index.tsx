/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
// import VoiceToTextComponent from '../../components/VTT';
import TextToVoiceComponent from '../../components/TTV';

import Voice from '@react-native-voice/voice';


const Myopia = (props) => {
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

  const [recognizedText, setRecognizedText] = useState('');

  const [alphabets, setAlphabets] = useState([
    '~', 'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ])

  const [resultLogos, setResultLogos] = useState([
    require('../../images/assets/times.png'),
    require('../../images/assets/check.png'),
    require('../../images/assets/question_mark.png')
  ])

  const [resultLogo, setResultLogo] = useState(2)

  const [alphabet, setAlphabet] = React.useState(0)
  const alphabetRef = React.useRef(alphabet)

  const second = 50
  const interv = 5
  const [time, setTime] = React.useState(props.initialValue || second);
  const timerRef = React.useRef(time);

  const [numQuest, setNumQuest] = React.useState(second / interv)
  const numQuestRef = React.useRef(numQuest)

  const [currQuest, setCurrQuest] = React.useState(second / interv)
  const currQuestRef = React.useRef(currQuest)

  const [voiceText, setVoiceText] = useState("")
  const [correct, setCorrect] = useState(0)

  useEffect(() => {
    const startRecognition = async () => {
      try {
        await Voice.start('id');
        console.log('start')
      } catch (error) {
        console.error(error);
      }
    };

    const stopRecognition = async () => {
      try {
        await Voice.stop();
        console.log('end')
      } catch (error) {
        console.error(error);
      }
    };

    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current == 50) {
        setTime('Mulai')
        setAlphabet(26)
      }
      if (timerRef.current % interv == 4) {
        setAlphabet(Math.floor(Math.random() * (26 - 0 + 1)) + 1)
        currQuestRef.current -= 1;
        setCurrQuest(currQuestRef.current)
        setResultLogo(2)
        setRecognizedText('-')
        startRecognition()
      }
      if (timerRef.current % interv == 1) {
        stopRecognition()
      }
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current % interv);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [alphabet, alphabetRef, alphabets]);

  useEffect(() => {
    Voice.onSpeechResults = (event) => {
      console.log('Event', JSON.stringify(event))
      console.log('Alphabet Ref', JSON.stringify(alphabetRef))

      try {
        const text = event.value[0];
        console.log('Event Value', event.value[0]);
        const parseHuruf = event.value[0].split('huruf ')
        const previewHuruf = parseHuruf[1].toUpperCase()

        console.log('Parse Huruf', parseHuruf[1])
        setVoiceText(parseHuruf[1])

        // console.log(`Yang Disebut ${previewHuruf}, yang ditampilkan ${alphabets[alphabet]}, Urutan huruf ${alphabet}`)
        if (previewHuruf == alphabets[alphabet]) {
          setResultLogo(1)
        } else {
          setResultLogo(0)
        }
        setRecognizedText(previewHuruf);
      } catch (error) {
        setRecognizedText('???')
        setResultLogo(2)
      }
    };
  }, [alphabet])

  useEffect(() => {
    console.log('Alphabet Shown', JSON.stringify(alphabets[alphabet]))
    console.log('Voice Text', voiceText)

    if (voiceText.toUpperCase() == alphabets[alphabet]) {
      setCorrect(correct + 1)
    } else {
      console.log('THOLOL')
    }
  }, [voiceText])
  
  useEffect(() => {
    console.log('Correct', correct)
  }, [correct])
  
  

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
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginTop: 100
          }}
        >
          {currQuest} / {numQuest}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 400
          }}
        >
          {alphabets[alphabet]}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 60
          }}
        >
          {time}
        </Text>
        <Image
          source={resultLogos[resultLogo]}
          style={{
            width: '10%',
            height: '10%'
          }}
        />
        <Text style={{ alignSelf: 'center', fontSize: 20, color: 'black' }}>Text Disebut:</Text>
        <Text style={{ alignSelf: 'center', fontSize: 25, color: 'black', fontWeight: 'bold' }}>{recognizedText}</Text>
      </View>



      {/* <VoiceToTextComponent /> */}
      <TextToVoiceComponent />
    </View>
  )
}

export default Myopia