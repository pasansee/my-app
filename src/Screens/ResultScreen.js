import React, {useEffect, useState} from "react";
import {View, ActivityIndicator, Text, StyleSheet} from "react-native";
import axios from "axios";
import CustomHeader from "../Components/CustomHeader";
import { Alert } from "react-native";

const API_KEY = '03735d30261726a88c8a1a715b42db92';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const ResultScreen=({route})=>{
    const { city, latitude, longitude } = route.params;
    const [Loading, setLoading] =useState(true);
    const [weatherData, setWeatherData] = useState(null);
    

    useEffect(()=>{
        let params = {};

        if (city){
            params = {
                q: city,
            };
        }else if (latitude && longitude){
            params = {
                lat: latitude,
                lon: longitude,

            };
        }

        params.appid = API_KEY;
        params.units = 'metric';

        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
        

    axios
        .get(API_URL, {params})
        .then((response)=>{
            setWeatherData(response.data);
        })
        .catch((error)=>{
            // console.error(error);
            if(error.response && error.response.status === 404){
                Alert.alert('City not found. Please check the city name');
            }
            else{
                Alert.alert('An error occured while fetching data');
            }
        })
        .finally(()=>{
            setLoading(false);
        });

    },[city, latitude, longitude])

    if (Loading) {
        return (
          <View>
            <ActivityIndicator size="large" />
          </View>
        );
    }
    
    return(
        <View>
        <CustomHeader></CustomHeader>
        {weatherData ? (
          <View style={styles.container}>
            {city?<Text style={styles.text}>City: {weatherData.name}</Text> :null}
            {latitude && longitude ?(
                <View>
                    <Text style={styles.text}>Latitude: {latitude}</Text>
                    <Text style={styles.text}>Longitude: {longitude}</Text>
                </View>
            ):null}
            <Text style={styles.text}>Temperature: {weatherData.main.temp}°C</Text>
            <Text style={styles.text}>Description: {weatherData.weather[0].description}</Text>
            <Text style={styles.text}>Humidity: {weatherData.main.humidity}%</Text>
            <Text style={styles.text}>Wind Speed: {weatherData.wind.speed} m/s</Text>
          </View>
        ) : (
          <Text>No data available</Text>
        )}
      </View>
    )
}

const styles = StyleSheet.create({
    container:{

        backgroundColor:'#EAE6E6',
        width:'70%',
        height:'50%',
        borderRadius:10,
        borderColor:'#7098FF',
        borderWidth:2,
        top:50,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:10,

    },

    text:{
        fontSize:20,
        fontWeight:"700",

    },
})



export default ResultScreen;