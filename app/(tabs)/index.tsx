import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Platform } from "react-native";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import Dashboard from "@/components/ui/screen/Dashboard";

// Replace with your actual main screen

export default function HomeScreen() {
    const [isLoading, setIsLoading]=useState(true);
    return (
        <View style={styles.container}>
            {isLoading?(
                <SplashScreen onFinish={()=>{setIsLoading(false)}} />
            ):(
                <Dashboard/>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
