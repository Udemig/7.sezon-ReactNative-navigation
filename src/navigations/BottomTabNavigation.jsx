import {View, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//util imports
import {SCREENS} from '../util/constant';

//icon-paket import
import {Home2, Setting2, Profile, Notification} from 'iconsax-react-native';

//screen imports
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        //bütün tab'ların labellarını gizlemek için kullanılır.
        tabBarShowLabel: false,

        //active olan tabın rengini değiştirmek için kullanılır.
        tabBarActiveTintColor: '#33f51f',

        //inactive olan tabın rengini değiştirmek için kullanılır.
        tabBarInactiveTintColor: 'pink',

        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 10,
          borderTopColor: 'blue',
          paddingVertical: 10,
        },
      }}
      initialRouteName={SCREENS.Notifications}>
      <Tab.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Home2 size={focused ? 35 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Notifications}
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Notification size={focused ? 35 : 25} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'purple',
            color: 'pink',
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Profile size={focused ? 35 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Setting2 size={focused ? 35 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
