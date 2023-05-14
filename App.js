import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MovieScreen from './pages/MovieScreen';
import TvScreen from './pages/TvScreen';
import SearchScreen from './pages/SearchScreen';
import ProfileScreen from './pages/ProfileScreen';
import HomeStack from './stacks/HomeStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen 
          name="Movie"
          component={HomeStack}
          // component={MovieScreen}
          options={{
            tabBarIcon: ({color, size}) => (
                <Feather name="film" color={color} size={size - 4} />
            )
          }}
        />
        <Tab.Screen 
          name="Tv"
          component={TvScreen}
          options={{
            tabBarIcon: ({color, size}) => (
                <Feather name="tv"  color={color} size={size - 4} />
            )
          }}
        />
        <Tab.Screen 
          name="Seach"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
                <Feather name="search" color={color} size={size - 4} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
                <Feather name="user" color={color} size={size - 4} />
            )
          }}
        
        />

        
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default App;