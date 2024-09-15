import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../util/constant';

const HomeScreen = () => {
  const navigation = useNavigation();
  const name = 'Udemig ReactNative eğitimine hoşgeldiniz!';

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: 'pink', padding: 10, borderRadius: 20}}
        onPress={() =>
          navigation.navigate(SCREENS.Notifications, {title: name})
        }>
        <Text>Go to Notifications Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'tomato', padding: 10, borderRadius: 20}}
        onPress={() => navigation.navigate(SCREENS.Profile)}>
        <Text>Go to Profile Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
