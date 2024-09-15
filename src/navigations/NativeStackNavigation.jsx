import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

//screen import

import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';

//util import
import {SCREENS} from '../util/constant';

// icon import
import {ShoppingCart, Setting2} from 'iconsax-react-native';

const Stack = createNativeStackNavigator();

const {Home, Notifications, Profile, Settings, Cart} = SCREENS;

const NativeStackNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        //headerı gizlemek için kullanılır.
        // headerShown: false,

        //headera style vermek için kullanılır
        // headerStyle: {
        //   backgroundColor: 'tomato',
        // },

        //headerın titlenın renginş değiştirmek için kulanılır.
        headerTintColor: 'green',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: '900',
        },

        //headerın sağ tararına bir eleemnt eklemek için kullnılır.
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
            <ShoppingCart size="32" color="#FF8A65" />
          </TouchableOpacity>
        ),

        //headerın sol tararına bir eleemnt eklemek için kullnılır.
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.navigate(Settings)}>
        //     <Setting2 size="32" color="#FF8A65" />
        //   </TouchableOpacity>
        // ),

        //headrın geri butonunu gizlemek için kullanılır.
        headerBackVisible: false,

        //headerın geri butonunu  titlenını gizlemiek için kullnaılır.
        // headerBackTitleVisible: false,

        //headrın başlığını değiştiemk istediğimizde
        // headerBackTitle: 'Geri',
      }}
      initialRouteName={Home}>
      <Stack.Screen name={Home} component={HomeScreen} />
      <Stack.Screen
        name={Notifications}
        component={NotificationsScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Stack.Screen name={Profile} component={ProfileScreen} />
      <Stack.Screen name={Settings} component={SettingsScreen} />
      <Stack.Screen name={Cart} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigation;
