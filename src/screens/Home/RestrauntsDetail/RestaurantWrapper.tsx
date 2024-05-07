import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import RestrauntsDetail from './RestrauntsDetail'
import images from '../../../core/assests/images'
import { DEV_URL } from '../../../core/env/env';
import { useGetRestaurantByIdQuery } from '../../../service/RestaurantService';
import { useRoute } from '@react-navigation/native';




export const RestaurantsFeaturedItem = [{
    image: images.mostPopularlFood1,
    foodName: "Cookie Sandwich",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 10,
    id: 26,
    category: "dessert"
},
{
    id: 27,
    image: images.mostPopularlFood3,
    foodName: "Combo Burger",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 15,
    category: "burger"
},
{
    id: 28,
    image: images.mostPopularlFood2,
    foodName: "Combo Sandwich",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 20,
    category: "burger"
},
{
    id: 29,
    image: images.mostPopularlFood4,
    foodName: "Pasta",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 25,
    category: "Chinese"
},
{
    id: 30,
    image: images.mostPopularlFood5,
    foodName: "Pub Classic",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 15,
    category: "burger"
}];




const RestaurantWrapper = ({ navigation }: any) => {
    const [restaurantDetail, setRestaurantDetail] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)
    const routes = useRoute()
    const { restaurantId }: any = routes.params
    const { data: restaurantDetailData, isLoading: isRestaurantDetailDataLoading, isFetching: isRestaurantDetailDataFetching } = useGetRestaurantByIdQuery(restaurantId)
    useEffect(() => {
        if (!isRestaurantDetailDataLoading || !isRestaurantDetailDataFetching || restaurantDetailData) {
            setRestaurantDetail(restaurantDetailData)
            setLoading(false)
        } else {
            setLoading(true)
        }
    })

    return (
        <View>
            <RestrauntsDetail
                restaurantDetailLoading={loading}
                restaurantsDetailData={restaurantDetail?.data}
                navigation={navigation}
                featuredFoodItems={RestaurantsFeaturedItem}
            />
        </View>
    )
}

export default RestaurantWrapper