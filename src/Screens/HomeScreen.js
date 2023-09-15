import React, {useEffect, useState} from "react";
import {View, TextInput, StyleSheet,  Pressable, Text} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import * as Location from 'expo-location';
import CustomHeader from "../Components/CustomHeader";



const HomeScreen=({navigation})=>{
    const [city, setCity] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    //current location weather
    const getLocationWeather = async () =>{
        try{
            const{status} =  await Location.requestForegroundPermissionsAsync();
            if(status!='granted'){
                console.error('Location permission denied');
                return;
            }
            const location = await Location.getCurrentPositionAsync({});
            console.log('Location:', location);
            // setLatitude(location.coords.latitude.toString());
            // setLongitude(location.coords.longitude.toString());

            
            
            navigation.navigate('Result', { 
                city, 
                latitude: location.coords.latitude.toString(),
                longitude: location.coords.longitude.toString(), });
        }
        catch(error){
            console.error('Error getting current location:', error);
        }
    };
    
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
            <CustomHeader></CustomHeader>
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
                <Text onPress={getLocationWeather} style={styles.text}>Current Weather</Text>

            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({

    container1:{
        backgroundColor:'#EAE6E6',
        width:'60%',
        height:'10%',
        borderRadius:20,
        borderColor:'#7098FF',
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
        backgroundColor:'#7098FF',
        width:120,
        height:60,
        alignSelf:'center',
        top:90,
        borderRadius:40,



    },

    button1:{
        backgroundColor:'#7098FF',
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