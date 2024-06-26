import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Animated, } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;
type Props = {
    data: any[]
}
const FeaturedCardSkeleton = ({ data }: Props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
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
                        <View style={{ display: "flex", gap: 4, flex: 1, marginHorizontal: 4 }}>
                            <Animated.View style={[style.skeletonImage, { opacity: fadeAnim }]}></Animated.View>
                            <View >
                                <View style={style.placeholder} />
                                <View style={style.placeholder} />
                                <View style={style.placeholder} />
                            </View>
                        </View>
                    )
                }}
                // horizontal={true}
                numColumns={2}
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
        flex: 1,
        borderRadius: 10,
        width: '100%',
        height: 185,
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
export default FeaturedCardSkeleton


