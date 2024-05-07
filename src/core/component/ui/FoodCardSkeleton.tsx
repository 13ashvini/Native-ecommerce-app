import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Animated, } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;
type Props = {
    data: any[]
}
const FoodCardSkeleton = ({ data }: Props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim])
    return (
        <View style={{ flex: 1, }}>
            {Array(2)}
            <FlatList
                data={data}
                renderItem={() => {
                    return (
                        <View style={{ display: "flex", flexDirection: "row", flex: 1, gap: 4, marginHorizontal: 4, alignItems: "center" }}>
                            <Animated.View style={[style.skeletonImage, { opacity: fadeAnim }]}></Animated.View>
                            <Animated.View style={{ flex: 1 }}>
                                <View style={style.placeholder} />
                                <View style={style.placeholder} />
                                <View style={style.placeholder} />
                                <View style={style.placeholder} />
                            </Animated.View>
                        </View>
                    )
                }}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            />
        </View>
    )
}
const style = StyleSheet.create({
    skeletonImage: {
        backgroundColor: "#cccccc",
        // animationStyle: "Wave",

        borderRadius: 10,
        width: 155,
        height: 155,
    },
    container: {
        backgroundColor: "#cccccc",
        borderRadius: 13,
        padding: 16,
        marginBottom: 16,
        marginTop: 50,
    },
    // waveAnimation: {
    //     animationName: 'wave',
    //     animationDuration: '2s',
    //     animationIterationCount: 'infinite',
    //     animationTimingFunction: 'linear',
    // },
    placeholder: {
        backgroundColor: "#cccccc",
        height: 16,
        borderRadius: 4,
        marginBottom: 8,
    },

    card: {
        backgroundColor: "#cccccc",
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 50,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
})
export default FoodCardSkeleton


