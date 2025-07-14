import {View,Text,StyleSheet} from "react-native";

export default function MyOrderScreen(){
    return(
    <View style={styles.container}>
        <Text>my order</Text>
    </View>)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})