import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const NotificationsScreen = ({route, navigation}) => {
  //uygulama hangi telefonda açılırsa o telefonun ekran ölçüleriin, alır.
  const {width, height} = Dimensions.get('screen');

  console.log(route);

  return (
    <SafeAreaView>
      <Text>{route?.params?.title}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'tomato',
          padding: 10,
          borderRadius: 20,
          marginTop: 15,
        }}
        onPress={() => navigation.goBack()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Bir screen geri git
        </Text>
      </TouchableOpacity>

      <View
        style={{
          width: width * 0.2,
          height: height * 0.2,
          backgroundColor: 'pink',
        }}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
