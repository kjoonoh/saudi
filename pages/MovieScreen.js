import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



const MovieScreen = () => {
    const [nowPlayings, setNowPlaying] = useState([])
    const route = useRoute()
    const navigation = useNavigation()

    const getAddress = (category) => {
        return `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    }

    const getNowPlayingData = async () => {
        try {
           

            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'

                
                }
            }


            const result = await axios.get(getAddress("now_playing"), options)
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
                    <TouchableOpacity
         
                        onPress={() => navigation.navigate("Detail", {data: item.id})}
                    >
                         <View
                             style={{
                             height: "140px",
                             margin: 10,
                             background: "white",
                             padding: 10
                                
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
                            {item.overview.slice(0,200)}
                        </Text>
                    </View>


                </TouchableOpacity>
                    
                )}

            
            />


        
          
        </SafeAreaView>
    );
};

export default MovieScreen;