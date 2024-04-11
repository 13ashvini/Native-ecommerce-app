import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import images from '../../core/assests/images'
import IntroSliderComponent from '../../core/component/ui/IntroSliderComponent';
import { Routes } from '../../core/navigation/type';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from '../../core/component/Buttons/Button';
import Color from '../../core/contstants/Color';
import Fonts from '../../core/contstants/Fonts';
type Props = {
    navigation: any
}
const slides = [
    {
        key: 'slide1',
        title: 'Welcome',
        text: 'It’s a pleasure to meet you. We are excited that you’re here so let’s get started!',
        image: images.introslider1Image,
    },
    {
        key: 'slide2',
        title: 'All your favorites',
        text: 'Order from the best local restaurants with easy, on-demand delivery.',
        image: images.introslider2Image,

    },
    {
        key: 'slide3',
        title: 'Free delivery offers',
        text: 'Free delivery for new customers via Apple Pay and others payment methods.',
        image: images.introslider3Image,

    },
    {
        key: 'slide4',
        title: 'Choose your food',
        text: 'Easily find your type of food craving and you’ll get delivery in wide range.',
        image: images.introslider4Image,

    },

];

const WelcomeScreenSlide = ({ navigation }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<any>(null);

    const onDone = () => {
        // navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
        //     screen: Routes.FORGOTPASSWORD
        // })
        navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
            screen: Routes.LOGIN
        })
    };

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
            sliderRef.current?.goToSlide(currentIndex + 1);
        } else {
            navigation.navigate(Routes.AUTHORIZATIONNAVIGATION, {
                screen: Routes.LOGIN,
            });
        }
    };

    const renderItem = ({ item }: any) => (
        <IntroSliderComponent
            text={item?.text}
            title={item?.title}
            image={item?.image}
            navigation={navigation}

        />
    );
    const renderNextButton = () => {
        return (
            <View >
                <Button
                    // textStyle={styles.buttonStyle}
                    onPress={handleNext}
                    title={<Text style={styles.buttonStyle}>NEXT</Text>}
                ></Button>
            </View>
        );
    };
    const renderDoneButton = () => {
        return (
            <View >
                <Button
                    // textStyle={styles.buttonStyle}
                    onPress={() => { onDone() }}
                    title={<Text style={styles.buttonStyle}>GET STARTED</Text>}
                ></Button>
            </View>
        );
    };

    return (
        <AppIntroSlider
            ref={sliderRef}
            renderItem={renderItem}
            data={slides}
            onDone={onDone}
            showNextButton={true}
            showDoneButton={true}
            activeDotStyle={{ backgroundColor: "green" }}
            bottomButton={true}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
            doneLabel="GET STARTED"
        />
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        color: Color.mds_global_white_color,
        ...Fonts.style.mds_ui_font_medium_semi,
    }

    // title: {
    //   fontSize: Fonts.fontSize.large,
    // //   color: Color.slideTitleColor,
    //   marginBottom: 20,
    //   textAlign: 'center',
    // },
    // text: {
    //   fontSize: Fonts.fontSize.medium,
    // //   color: Color.slideTextColor,
    //   textAlign: 'center',
    //   marginHorizontal: 20,
    // },
    // image: {
    //   width: '80%',
    //   height: 200,
    //   resizeMode: 'contain',
    // },
});
export default WelcomeScreenSlide