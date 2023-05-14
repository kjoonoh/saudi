import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Button, FlatList } from 'react-native';



const MovieScreen = () => {
    const [nowPlayings, setNowPlaying] = useState([])

    const getAddress = (category) => {
        return `https://api.themoviedb.org/3/movie/${category}?api_key=5d4d4e77562195e36a88f72b8a56f436&language=en-US&page=1`
    }

    const getNowPlayingData = async () => {
        try {

            const result = await axios.get(getAddress("now_playing"))
            console.log(result.data.results)
            setNowPlaying(result.data.results)
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getNowPlayingData()
    }, [])


    return (
        <SafeAreaView>
            <FlatList
                data={nowPlayings}
                renderItem={({item}) => (
                    <View
                        style={{
                            height: "130px",
                            margin: 10,
                            background: "white",
                            paddingHorizontal: 10
                            
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 600,
                                margin: 5
                            }}
                        >
                            {item.title}
                        </Text>
                        <Text>
                            {item.overview}
                        </Text>
                    </View>
                )}

            
            />


        
          
        </SafeAreaView>
    );
};

export default MovieScreen;