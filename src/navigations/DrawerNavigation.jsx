import {createDrawerNavigator} from '@react-navigation/drawer';

//Screen imports
import HomeScreen from '../screens/HomeScreen';

//util imports
import {SCREENS} from '../util/constant';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

//icon-paket import
import {Home2, Setting2, Profile, Notification} from 'iconsax-react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        //active olan deawerın rengini belirlemek için kullanılır.
        drawerActiveTintColor: 'lightgreen',

        //inactive olan drawerın rengini belirlemek için kullanılır.
        drawerInactiveTintColor: '#fff',

        drawerStyle: {
          backgroundColor: '#000',
          paddingVertical: 10,
        },
        //headerı gizlemek için kullanılır.
        // headerShown: false,

        //Drawer içinde ki tüm itemlara style vermek için kullanılır.
        drawerItemStyle: {
          //   backgroundColor: 'tomato',
          padding: 10,
          marginVertical: 12,
          borderRadius: 20,
        },

        //Drawer içinde ki tüm itemların labelına style vermek için kullanılır.
        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: '900',
        },

        //active olan drawer item background rengini belirlemek için kullanılır.
        drawerActiveBackgroundColor: 'gray',

        //drawerı çekerek açma ve kapatma işlemini kapatmak için kullanılır.
        // swipeEnabled: false,

        //drawerı sürekli açık tutmak için kullnılır.
        // drawerType: 'permanent',

        //drawerı açarken ekranın üstüne gelmesini sağlıypr.
        // drawerType: 'front',

        //default olarak gelen değer ekranı kaydırarak açar.
        // drawerType: 'slide',

        //drawerı açarken ekranın altına gelmesini sağlıypr.
        // drawerType: 'back',

        // drawerPosition: 'right',
      }}
      initialRouteName={SCREENS.Home}>
      <Drawer.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Home2 color="blue" size={focused ? 30 : 20} />
          ),
        }}
      />

      <Drawer.Screen
        name={SCREENS.Notifications}
        component={NotificationsScreen}
      />
      <Drawer.Screen name={SCREENS.Profile} component={ProfileScreen} />
      <Drawer.Screen name={SCREENS.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
