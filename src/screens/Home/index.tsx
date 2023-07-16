/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleProp,
  ViewStyle
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type AppType = { navigation: { navigate: (arg0: string) => void; } };

const App = (props: AppType) => {
  const isDarkMode = useColorScheme() === 'dark';

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

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginVertical: 16,
          }}
        >
          <Text
            style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}
          >
            Please Select The Eye Test
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            paddingBottom: 200
          }}
        >
          <Pressable
            onPress={() => {
              console.log('Myopia');
              props.navigation.navigate('Myopia');
            }}
            style={buttonStyle}
          >
            <Text style={textStyle}>Myopia</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log('ButaWarna');
              props.navigation.navigate('ButaWarna');
            }}
            style={buttonStyle}
          >
            <Text style={textStyle}>Buta Warna</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log('AmslerGrid');
              props.navigation.navigate('AmslerGrid');
            }}
            style={buttonStyle}
          >
            <Text style={textStyle}>Amsler Grid</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
