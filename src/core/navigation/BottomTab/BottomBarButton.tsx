import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Icons from "../../svg"
import Color from '../../contstants/Color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Fonts from '../../contstants/Fonts'
import { Routes } from '../type'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
type Props ={
    title:string,
    onPress:()=>void,
    focused:boolean
}
const BottomBarButton = ({title,onPress,focused}:Props) => {
    const activeTabColor =Color.mds_global_main_Yellow_color
    const inactiveTabColor =Color.mds_global_gray_color
    const color = focused ? activeTabColor : inactiveTabColor
    const HomeTabIcon= Icons.HomeTabIcon
    const SearchTabIcon= Icons.SearchTabIcon
    const OrderTabIcon= Icons.OrderTabIcon
    const ProfileTabIcon= Icons.ProfileTabIcon
    const insets = useSafeAreaInsets()

    const TabIcon=()=>{
        switch(title){
            case Routes.HOME:
                return <HomeTabIcon color={color} size={34}/>
            case Routes.SEARCH:
                return <SearchTabIcon color={color} size={34} />
            case Routes.ORDERS:
                return <OrderTabIcon color={color} size={34}/>
            case Routes.Profile:
                return <ProfileTabIcon color={color} size={34}/>
           default:
                break
        }
    }
    const drawerTitle = () => {
        return title
    }
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[styles.container,
          ]}
        activeOpacity={focused ? 1 : 0.2}
    >
        <View>
            {TabIcon()}
          
        </View>
        <Text
            numberOfLines={1}
            style={[
                styles.title,
                focused && styles.titleFocused,
                { color: focused ? activeTabColor : inactiveTabColor },
            ]}
        >
            {`${drawerTitle()}`}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     // display:"flex",
    //     justifyContent:"center",
    //     alignItems: 'center',
    //     paddingBottom:10,

    // },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
    ...Fonts.style.mds_ui_gothic_font_medium_,
        width: '100%',
        lineHeight: 25,
        // marginTop: 2,
        // paddingRight: 30
    },
    titleFocused: {
        ...Fonts.style.mds_ui_gothic_font_medium,
        // lineHeight: 20,
        // paddingVertical: 10
    },
})
export default BottomBarButton
