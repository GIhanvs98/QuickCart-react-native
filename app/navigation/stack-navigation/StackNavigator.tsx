import {createStackNavigator} from '@react-navigation/stack'
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBottomTabNavigation";
import CustomerCareScreen from "@/components/ui/screen/other/CustomerCareScreen";
import DailyDealsScreen from "@/components/ui/screen/other/DailyDealsScreen";
import LatestProductScreen from "@/components/ui/screen/other/LatestProductScreen";
import MyOrderScreen from "@/components/ui/screen/other/MyOrderScreen";
import NotificationScreen from "@/components/ui/screen/other/NotificationScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import VoucherScreen from "@/components/ui/screen/other/VoucherScreen";
import LoginScreen from "@/components/ui/screen/security/LoginScreen";
const Stack=createStackNavigator();
export default function StackNavigator(){
  return( <Stack.Navigator>
          <Stack.Screen name={'Process'}
                        options={{headerLeft: () => null, headerShown: false}}
                        component={HomeBottomTabNavigation}/>
          <Stack.Screen name={'CustomerCare'}
                        options={{title: 'Customer care'}}
                        component={CustomerCareScreen}/>
          <Stack.Screen name={'DailyDeals'}
                        options={{title: 'Daily Deals'}}
                        component={DailyDealsScreen}/>
          <Stack.Screen name={'LatestProducts'}
                        options={{title: 'Latest Products'}}
                        component={LatestProductScreen}/>
          <Stack.Screen name={'MyOrder'}
                        options={{title: 'My Order'}}
                        component={MyOrderScreen}/>
          <Stack.Screen name={'Notifications'}
                        options={{title: 'Notifications'}}
                        component={NotificationScreen}/>
          <Stack.Screen name={'Profile'}
                        options={{title: 'Profile'}}
                        component={ProfileScreen}/>
          <Stack.Screen name={'Settings'}
                        options={{title: 'Settings'}}
                        component={SettingsScreen}/>
          <Stack.Screen name={'Voucher'}
                        options={{title: 'Vouchers'}}
                        component={VoucherScreen}/>
          <Stack.Screen name={'Login'}
                        options={{title: 'Login Here'}}
                        component={LoginScreen}/>

      </Stack.Navigator>
  )
}