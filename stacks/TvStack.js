import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TvScreen from '../pages/TvScreen';
import Detail from '../pages/Detail';



const Stack = createNativeStackNavigator()

const TvStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="tV"
                component={TvScreen}
             />
            <Stack.Screen
                name="Detail"
                component={Detail}
            />
            

        </Stack.Navigator>
    );
};

export default TvStack;