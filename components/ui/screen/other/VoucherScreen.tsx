import {View,Text,StyleSheet} from "react-native";

export default function VoucherScreen(){
    return(
    <View style={styles.container}>
        <Text>voucher Screen</Text>
    </View>)
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})