import {View,Text,StyleSheet} from "react-native";

export default function DailyDealsScreen(){
    return(
    <View style={styles.container}>
        <Text>daily deals Screen</Text>
    </View>)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})