import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigation from './src/navigations/NativeStackNavigation';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NativeStackNavigation /> */}
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
