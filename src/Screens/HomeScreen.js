import React, {useState} from "react";
import {View, TextInput, StyleSheet,  Pressable, Text} from "react-native";
import { useFocusEffect } from '@react-navigation/native';


const HomeScreen=({navigation})=>{
    const [city, setCity] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleSearch = () =>{
        navigation.navigate('Result',{city, latitude, longitude });
    };

    useFocusEffect(
        React.useCallback(() => {
          setCity('');
          setLatitude('');
          setLongitude('');
        }, [])
      );


    return(
        <View>
            <View style={styles.container1}>
            <TextInput 
                placeholder="Enter City" 
                value ={city}
                onChangeText={(text)=>setCity(text)}
                style={styles.input}
            />
            </View>

            <Text style={styles.text1}>OR</Text>

            <View style={styles.container1}>
            <TextInput 
                placeholder="Enter Latitude" 
                value ={latitude}
                onChangeText={(text)=>setLatitude(text)}
                style={styles.input}
            />
            </View>

            <View style={styles.container1}>
            <TextInput 
                placeholder="Enter Longitude" 
                value ={longitude}
                onChangeText={(text)=>setLongitude(text)}
                style={styles.input}
            />
            </View>
            
            
            
            <Pressable onPress={handleSearch} style={styles.button}>
                <Text style={styles.text}>Search</Text>

            </Pressable>

            <Pressable style={styles.button1}>
                <Text style={styles.text}>Current Weather</Text>

            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({

    container1:{
        backgroundColor:'#EAE6E6',
        width:'60%',
        height:'14%',
        borderRadius:20,
        borderColor:'#A46DDB',
        borderWidth:2,
        top:50,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:10,

    },

    
    input:{
        paddingLeft:30,

    },

    button:{
        backgroundColor:'#A46DDB',
        width:120,
        height:60,
        alignSelf:'center',
        top:90,
        borderRadius:40,



    },

    button1:{
        backgroundColor:'#A46DDB',
        width:180,
        height:60,
        alignSelf:'center',
        top:140,
        borderRadius:20,



    },

    text:{
        color:'#FFFFFF',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
    },

    text1:{
        color:'#000000',
        alignSelf:'center',
        top:50,
        fontWeight:'bold',
        fontSize:25,

    }

    




})


export default HomeScreen;