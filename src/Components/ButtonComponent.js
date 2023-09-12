import React from 'react';
import {View, Text, Button, Pressable} from 'react-native';

const ButtonComponent=({onPress, title})=>{
    return(
    <Pressable style={StyleSheet.button} onPress={onPress}>
        <Text style={StyleSheet.buttonText}>{title}</Text>
    </Pressable>

    ); 

};

const styles = StyleSheet.create({
    button:{

    },

    buttonText:{
        
    }
})