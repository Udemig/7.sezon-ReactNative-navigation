import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigation from './src/navigations/NativeStackNavigation';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import DrawerNavigation from './src/navigations/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigation />
      {/* <BottomTabNavigation /> */}
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
