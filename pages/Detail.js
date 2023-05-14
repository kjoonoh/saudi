import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

const Datail = () => {
    const route = useRoute();

    return (
        <View>
            <Text>
                {route.params.data}
            </Text>
            
        </View>
    );
};

export default Datail;