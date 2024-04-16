import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import images from '../../core/assests/images';
import AllRestaurantsCard from '../../core/component/ui/AllRestaurantsCard';
import { Routes } from '../../core/navigation/type';
export const allRestaurantsListData = [
    {
        id: 1,
        image: [images?.Restaurants1, images?.Restaurants13, images?.Restaurants12],
        partnerName: "McDonald's",
        location: "St George Terrace, Perth",
        rating: "4.5",
        time: "25 min",
        delivery: "Free delivery",
        availableFoodType: [
            "Chinese", "Indian", "DesiFood"
        ],
        ratingNumber: "200"
    },
    {
        id: 2,
        image: [images?.Restaurants2, images?.Restaurants11, images?.Restaurants11],
        partnerName: "Cafe Brichor’s",
        location: "Hay street , Perth City",
        rating: "3",
        time: "30 min",
        delivery: "Free delivery",
        availableFoodType: [
            "Cafe", "Italian", "Sandwiches"
        ],
        ratingNumber: 400

    },
    {
        id: 3,
        image: [images?.Restaurants3, images?.Restaurants10, images?.Restaurants9],
        partnerName: "Tacos Nanchas",
        location: "King Street, Perth",
        rating: "3",
        time: "20 min",
        delivery: "Express delivery",
        availableFoodType: [
            "Mexican", "Tacos", "Fast Food"
        ],
        ratingNumber: "250"

    },
    {
        id: 4,
        image: [images?.Restaurants4, images?.Restaurants13, images?.Restaurants11],
        partnerName: "The Halal Guys",
        location: "Murray Street, Perth",
        rating: "3.7",
        time: "15 min",
        delivery: "Free delivery",
        availableFoodType: [
            "Middle Eastern", "Halal", "Kebab"
        ],
        ratingNumber: "200"

    },
    {
        id: 5,
        image: [images?.Restaurants5, images?.Restaurants9, images?.Restaurants12],
        partnerName: "KFC Foods",
        location: "Wellington Street, Perth",
        rating: "4",
        time: "35 min",
        delivery: "Standard delivery",
        availableFoodType: [
            "Fast Food", "Chicken", "Burger"
        ],
        ratingNumber: "580"

    },
    {
        id: 6,
        image: [images?.Restaurants6, images?.Restaurants1, images?.Restaurants2],
        partnerName: "Cafe MayField’s",
        location: "Barrack Street, Perth",
        rating: "4.2",
        time: "40 min",
        delivery: "Free delivery",
        availableFoodType: [
            "Cafe", "Coffee", "Bakery"
        ],
        ratingNumber: "700"
    },
    {
        id: 7,
        image: [images?.Restaurants7, images?.Restaurants3, images?.Restaurants4],
        partnerName: "Pizza Palace",
        location: "Elizabeth Quay, Perth",
        rating: "4.8",
        time: "20 min",
        delivery: "Express delivery",
        availableFoodType: [
            "Italian", "Pizza", "Fast Food"
        ],
        ratingNumber: "580"
    },
    {
        id: 8,
        image: [images?.Restaurants8, images?.Restaurants7, images?.Restaurants5],
        partnerName: "Sushi Saito",
        location: "William Street, Perth",
        rating: "4.5",
        time: "30 min",
        delivery: "Free delivery",
        availableFoodType: [
            "Japanese", "Sushi", "Asian"
        ],
        ratingNumber: "400"
    },
    {
        id: 9,
        image: [images?.Restaurants9, images?.Restaurants6, images?.Restaurants3],
        partnerName: "Burger King",
        location: "Forrest Place, Perth",
        rating: "4.3",
        time: "25 min",
        delivery: "Standard delivery",
        availableFoodType: [
            "Fast Food", "Burger", "American"
        ],
        ratingNumber: "650"
    },
    {
        id: 10,
        image: [images?.Restaurants10, images?.Restaurants2, images?.Restaurants1],
        partnerName: "Szechuan Palace",
        location: "Adelaide Terrace, Perth",
        rating: "4.6",
        time: "35 min",
        delivery: "Free delivery",
        availableFoodType: [
            "Chinese", "Szechuan", "Asian"
        ],
        ratingNumber: "200"
    },

];

const AllRestrauntsList = ({ navigation }: any) => {
    return (
        <View style={styles.mainView}>
            <FlatList

                data={allRestaurantsListData}
                renderItem={({ item }: any) => {
                    return (
                        <AllRestaurantsCard
                            onPress={() => {
                                navigation.navigate(Routes.RestaurantDetail, {
                                    restaurantId: item?.id
                                })
                            }}
                            ratingNumber={item?.ratingNumber}
                            availableFoodType={item?.availableFoodType}
                            image={item?.image}
                            partnerName={item?.partnerName}
                            location={item?.location}
                            rating={item?.rating}
                            time={item?.time}
                            delivery={item?.delivery}

                        />
                    )
                }}
                // horizontal={true}
                keyExtractor={(item: any) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: "100%",
        alignItems: "center"

    },

})
export default AllRestrauntsList