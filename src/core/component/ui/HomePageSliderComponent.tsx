import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import images from '../../assests/images';

type Props = {}

const HomePageSliderImage = [
    images.homePageSlider1,
    images.homePageSlider2,
    images.homePageSlider3,
    images.homePageSlider4,
    images.homePageSlider5,
    images.homePageSlider6,
    images.homePageSlider7
]

const HomePageSliderComponent = (props: Props) => {
    const width = Dimensions.get('window').width;

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{
                // width: '100%',
                // height: '100%',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // width: '100%'

            }}>
                <FastImage source={item} style={[styles?.SliderImagestyle, { width: '100%' }]} resizeMode="cover" />
            </View>
        );
    }
    return (
        <View >
            <Carousel
                layout={'stack'} layoutCardOffset={`18`}
                paginationDot={true}
                data={HomePageSliderImage}
                renderItem={renderItem}
                sliderWidth={width - 30}
                itemWidth={width - 30}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                paginationDotStyle={styles.dot}
                inactiveDotStyle={styles.inactiveDot}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    SliderImagestyle: {
        height: 185,
        borderRadius: 10,

    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    inactiveDot: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    }
})

export default HomePageSliderComponent;
