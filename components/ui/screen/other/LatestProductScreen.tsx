import {View,Text,StyleSheet} from "react-native";

export default function LatestProductScreen(){
    return(
    <View style={styles.container}>
        <Text>latest</Text>
    </View>)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})