/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import HomeScreen from '../../screens/Home';
import MyopiaScreen from '../../screens/Myopia';
import ButaWarnaScreen from '../../screens/ButaWarna';
import AmslerGridScreen from '../../screens/AmslerGrid';

const Stack = createStackNavigator();

interface PropsType {
  showWelcome?: boolean;
  isLoggedIn?: boolean;
}

const AppContainer: React.FC<PropsType> = props => {
  const [initialRoute, setInitialRoute] = React.useState('Home')

  // React.useEffect(() => {
  //   props.setLoadingOverlay(false)
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          props.showWelcome ? 'Welcome' : props.isLoggedIn ? initialRoute : 'Login'
        }>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Myopia"
          component={MyopiaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ButaWarna"
          component={ButaWarnaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmslerGrid"
          component={AmslerGridScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
      {props.loadingOverlay && (
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,.7)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 4 }}>
            <ActivityIndicator size="large" color={globalStyles.colors.primary} />
          </View>
        </View>
      )}
    </NavigationContainer>
  )
}

export default AppContainer