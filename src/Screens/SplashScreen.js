import React, {useEffect} from "react";
import{View, StyleSheet} from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = ({navigation}) =>{
    useEffect(() => {
        const timer=setTimeout(() => {
            navigation.navigate('Home');  
        }, 3000);

        return () => clearTimeout(timer);
      },[]);

    return(
        <View style={{flex: 1, backgroundColor: '#3E74FD'}}>
            <LottieView
                style={{flex: 1}}
                source={require('../Screens/weather.json')}
                autoPlay
                loop
            />

        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 40,
      },
      

})

export default SplashScreen;
