import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Platform } from "react-native";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import Dashboard from "@/components/ui/screen/Dashboard";
import StackNavigator from "@/app/navigation/stack-navigation/StackNavigator";



export default function HomeScreen() {
    const [isLoading, setIsLoading]=useState(true);
    return (
        <View style={styles.container}>
            {isLoading?(
                <SplashScreen onFinish={()=>{setIsLoading(false)}} />
            ):(
                <StackNavigator/>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
