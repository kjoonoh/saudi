import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';


const TvScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [airings, setAirings] = useState([])


    const getAddress = (category) => {
        return `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`        

    }
    
    const getAiringData = async () => {
        try {

            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'
                  }
            }
            const result = await axios.get(getAddress("airing_today"), options)
            console.log(result)
            setAirings(result.data.results)
            
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAiringData()
    }, [])

    return (
       <SafeAreaView>
            <FlatList 
                data={airings}
                renderItem={({item}) => (
                 <TouchableOpacity
                    onPress={() => navigation.navigate("Detail", {data: item.id}) }
                 >
                     <View
                        style={{
                            height: "140px"

                        }}
                     >
                        <Text>
                            {item.name}
                        </Text>
                     </View>


                 </TouchableOpacity>

                )}

            />


       </SafeAreaView>
    );
};

export default TvScreen;