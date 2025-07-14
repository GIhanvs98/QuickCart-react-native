import {Image, TouchableOpacity,Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeBookMarkScreen from "@/components/ui/screen/home/HomeBookMarkScreen";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import {COLORS} from "@/constants/ColorPallet";
import {Ionicons} from "@expo/vector-icons";
const Tab =createBottomTabNavigator();
const logo=require('../../../assets/images/logo/swag.jpg')
export default function HomeBottomTabNavigation({navigation}:any){
    return(
        <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route, focused}:any)=>({
            tabBarIcon:({color, size})=>{
                let iconName;
                if(route.name==='Menu') iconName = focused? 'menu':'menu-outline';
                else if(route.name==='Cart') iconName = focused? 'cart':'cart-outline';
                else if(route.name==='Home') iconName = focused? 'home':'home-outline';
                else if(route.name==='Bookmarks') iconName = focused? 'heart':'heart-outline';
                else if(route.name==='Products') iconName = focused? 'grid':'grid-outline';
                // @ts-ignore
                return <Ionicons name={iconName} size={22} color={color}/>
            },
            tabBarActiveTintColor:COLORS.purple,
            tabBarInactiveTintColor:COLORS.darkGray
        })}
        >
            <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
            <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
            <Tab.Screen name={'Home'}
                        component={HomePageScreen}
                        options={{
                            headerLeft:()=>(
                                <Image source={logo} resizeMode={'contain'}
                                       style={{width:130, height:40, marginLeft:10}}
                                />
                            ),
                            headerTitle:'',
                            headerRight:()=>(
                                <TouchableOpacity
                                    onPress={()=>navigation.navigate('Login')}
                                    style={{
                                        marginRight:10,
                                        width:120,
                                        backgroundColor:COLORS.purple,
                                        borderRadius:3,
                                        height:35,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{color:COLORS.light }}>Admin Console</Text>
                                </TouchableOpacity>
                            )
                        }}

            />
            <Tab.Screen name={'Bookmarks'} component={HomeBookMarkScreen}/>
            <Tab.Screen name={'Products'} component={HomeBookMarkScreen}/>

        </Tab.Navigator>
    )
}