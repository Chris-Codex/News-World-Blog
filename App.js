import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SinglePostScreen from './screens/SinglePostScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPostScreen from './screens/Admin/AddPostScreen';
import DisplayPostScreen from './screens/Admin/DisplayPostScreen';
import ProfileScreen from './screens/Admin/ProfileScreen';
import AuthScreen from './screens/AuthScreen';
import { Provider } from "react-redux"
import { store } from './features/store';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Auth' component={AuthScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='SinglePost' component={SinglePostScreen} />
            <Stack.Screen name="AddPost" component={AddPostScreen} />
            <Stack.Screen name="DisplayPost" component={DisplayPostScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
}

