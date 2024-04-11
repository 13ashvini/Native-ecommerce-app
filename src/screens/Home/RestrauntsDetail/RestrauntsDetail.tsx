import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
import * as Icon from "../../../core/svg"

const RestrauntsDetail = (image: any) => {
    const width = Dimensions.get('window').width;

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: '100%'

            }}>
                <FastImage source={item} style={styles?.image} resizeMode="cover" />
            </View>
        );
    }
    return (
        <View>
            <View>
                <Carousel
                    layout={'stack'} layoutCardOffset={`18`}
                    paginationDot={true}
                    data={image}
                    renderItem={renderItem}
                    sliderWidth={width - 30}
                    itemWidth={width - 30}
                    loop={true}
                // autoplay={true}
                // autoplayInterval={3000}

                />
                <View style={styles.deliveryView}>
                    {/* <Text>$$</Text> */}
                    {/* <FlatList
                        data={availableFoodType}
                        horizontal={true}

                        renderItem={({ item }: any) => {
                            return (
                                <View >
                                    <Text style={styles?.iconStyle}>  <Text ><Icon /></Text> {item}</Text>
                                </View>
                            )
                        }}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    ></FlatList> */}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 185,
        borderRadius: 10,
    },
    deliveryView: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    iconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
})
export default RestrauntsDetail