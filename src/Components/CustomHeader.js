import React from "react";
import {View, StyleSheet, Image} from "react-native";
import header from "../../assets/header.png";


const CustomHeader=() =>{
    return(
        <View>
            <View style={StyleSheet.backgroundContainer}>
                <Image source={header} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity:0.9,
       
        
    },

    image:{
        height:120,
        right:10,
    }

})

export default CustomHeader;