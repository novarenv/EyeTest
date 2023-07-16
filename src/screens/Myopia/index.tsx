/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, ImageSourcePropType, Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import VoiceToTextComponent from '../../components/VTT';
import TextToVoiceComponent from '../../components/TTV';


const Myopia = (props) => {
  const [names, setNames] = useState([
    require('../../images/Ishihara/0.jpg'),
    require('../../images/Ishihara/2.jpg'),
    require('../../images/Ishihara/3.jpg'),
    require('../../images/Ishihara/6.jpg'),
    require('../../images/Ishihara/7.jpg'),
    require('../../images/Ishihara/8.jpg'),
    require('../../images/Ishihara/9.jpg'),
    require('../../images/Ishihara/10.jpg'),
    require('../../images/Ishihara/12.jpg'),
    require('../../images/Ishihara/74.jpg'), "74"
  ])
  // const [names, setNames] = useState(["0", "2", "3", "6", "7", "8", "9", "10", "12", "74"
  const [name, setName] = useState(0)


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
    setName(Math.floor(Math.random() * (9 - 0 + 1)) + 0)
    // require('../../images/Ishihara/0.jpg')
    // if (name < names.length - 1) {
    //   setName(name + 1)
    // } else {
    //   setName(0)
    // }
  }

  React.useEffect(() => {
    // setInterval(switchImage, 2000)
    return () => {
      // setInterval(switchImage, 2000)
    }
  }, [])
  
  setTimeout(switchImage, 10000)

  console.log(names[name])

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
          // flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 400,
          // backgroundColor: 'red'
        }}
      >
        <Image
          source={names[name]}
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

export default Myopia