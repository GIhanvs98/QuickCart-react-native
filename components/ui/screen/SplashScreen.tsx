import {Text, StyleSheet, Animated, View,Image} from 'react-native';
import {useEffect, useRef} from "react";
import {COLORS} from "@/constants/ColorPallet";
import appJson from '../../../app.json';




export default function SplashScreen({onFinish}:any) {
    const logo=require('../../../assets/images/logo/swag.jpg');
    const progress = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(progress, {
            toValue: 100,
            duration: 5000,
            useNativeDriver: false
        }).start(() => {
            onFinish();
        });
    }, [onFinish]);
    return (
       <View style={styles.container} >
           <View style={styles.logoWrapper}>
               <Image
                   style={styles.logo}
                   source={logo}
               resizeMode={'contain'}/>

           </View>
           <Text>
               Your Drashing Dress Partner
           </Text>
           <View style={styles.progressContainer}>
               <Animated.View
               style={[styles.progressBar, {width:progress.interpolate(
                       {inputRange:[0,100],outputRange:['0%','100%']}
                   )}]}
               />
           </View>
           <View style={styles.bottom}>
               <Text>Version:{appJson.expo.version}</Text>
               <Text>From : Surge-Global</Text>
           </View>
       </View>
    )
}
const styles = StyleSheet.create(
    {

        container: {
            flex:1,
            alignItems: 'center',
            justifyContent:'center'
        },
        logoWrapper:{

        },
        logo:{
            height:50
        },
        progressContainer:{
            width:'80%',
            height:5,
            backgroundColor:COLORS.darkGray,
            borderRadius:5,
            marginTop:10,
            overflow:'hidden',


        },
        progressBar:{
            backgroundColor:COLORS.purple,
            borderRadius:5,
            height:'100%',
        },
        bottom:{
          width:'100%',

            height:50,
            position:'absolute',
            bottom:10,

            flexDirection:'row',
            padding:10,
            justifyContent:'space-between'

        }
    }
)