import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieScreen from '../pages/MovieScreen';
import Detail from '../pages/Detail';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Movie" component={MovieScreen} />
            <Stack.Screen name="Detail" component={Detail} />
            
        </Stack.Navigator>
    );
};

export default HomeStack;