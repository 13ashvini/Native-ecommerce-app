import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import RestrauntsDetail from './RestrauntsDetail'
import images from '../../../core/assests/images'
import { DEV_URL } from '../../../core/env/env';
import { useGetRestaurantByIdQuery } from '../../../service/RestaurantService';
import { useRoute } from '@react-navigation/native';
import { useGetAllFoodListQuery } from '../../../service/foodListService';

export const RestaurantsFeaturedItem = [{
    image: images.FeatureFoodImage1,
    foodName: "Cookie Sandwich",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 100,
    id: 52,
    category: "dessert"
},
{
    image: images.FeatureFoodImage2,
    foodName: "Chow Fun",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 150,
    id: 53,
    category: "Chinese"
},
{
    image: images.FeatureFoodImage3,
    foodName: "Cream Burger",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Indian",
    price: 100,
    id: 54,
    category: "burger"
},
{
    image: images.FeatureFoodImage4,
    foodName: "Chinese Salad",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 18,
    id: 55,
    category: "salad"
},
{
    image: images.FeatureFoodImage5,
    foodName: "Cookie Sandwich",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 120,
    id: 56,
    category: "dessert"
},
{
    image: images.FeatureFoodImage6,
    foodName: "Cruncy Roles",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "messican",
    price: 123,
    id: 57,
    category: "Burger"
},
{
    image: images.FeatureFoodImage7,
    foodName: "Chowmein",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 50,
    id: 58,
    category: "Chinese"
},
{
    image: images.FeatureFoodImage8,
    foodName: "Noodles",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 108,
    id: 59,
    category: "Chinese"
},
{
    image: images.FeatureFoodImage9,
    foodName: "Dosa Chutney",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Indian",
    price: 100,
    id: 60,
    category: "Main Course"
},
{
    image: images.FeatureFoodImage10,
    foodName: "Strawberry Shake",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Indian",
    price: 30,
    id: 61,
    category: "dessert"
}];

export const MostPopularFood = [{
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

export const Seafood = [{
    id: 21,
    image: images.seaFoodImage1,
    foodName: "Oyster Dish",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 10,
    category: "Chinese"
},
{
    id: 22,
    image: images.seaFoodImage4,
    foodName: "Oyster On Ice",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 10,
    category: "Chinese"
},
{
    id: 23,
    image: images.seaFoodImage5,
    foodName: "Fried Rice on Pot",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 10,
    category: "Chinese"
},
{
    id: 24,
    image: images.seaFoodImage2,
    foodName: "Oyster Dish",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 10,
    category: "Chinese"
},
{
    id: 25,
    image: images.seaFoodImage3,
    foodName: "Oyster aqua Dish",
    description: "Shortbread, chocolate turtle cookies, and red velvet.",
    foodType: "Chinese",
    price: 10,
    category: "Chinese"
}];

export const appetizers = [
    {
        id: 11,
        foodName: "Stuffed Mushrooms",
        description: "Mushrooms stuffed with a savory mixture of breadcrumbs, garlic, and cheese, baked until golden brown.",
        foodType: "Appetizers",
        price: 9.99,
        image: images.AppetizersImage,
        category: "appetizer"
    },
    {
        id: 12,
        foodName: "Bruschetta",
        description: "Toasted bread topped with a mixture of diced tomatoes, garlic, basil, and olive oil, served as an appetizer or snack.",
        foodType: "Appetizers",
        price: 7.99,
        image: images.AppetizersImage2,
        category: "appetizer"
    },
    {
        id: 13,
        foodName: "Spinach Artichoke Dip",
        description: "Creamy dip made with spinach, artichokes, and cheese, served warm with tortilla chips or bread for dipping.",
        foodType: "Appetizers",
        price: 10.99,
        image: images.AppetizersImage3,
        category: "appetizer"
    },
    {
        id: 14,
        foodName: "Chicken Wings",
        description: "Crispy chicken wings tossed in your choice of sauce: buffalo, barbecue, honey garlic, or teriyaki.",
        foodType: "Appetizers",
        price: 12.99,
        image: images.AppetizersImage4,
        category: "appetizer"
    },
    {
        id: 15,
        foodName: "Caprese Skewers",
        description: "Skewers featuring cherry tomatoes, fresh mozzarella, and basil leaves drizzled with balsamic glaze.",
        foodType: "Appetizers",
        price: 8.99,
        image: images.AppetizersImage5,
        category: "appetizer"
    },
    {
        id: 16,
        foodName: "Fried Calamari",
        description: "Tender calamari rings lightly battered and fried until golden, served with marinara sauce for dipping.",
        foodType: "Appetizers",
        price: 11.99,
        image: images.AppetizersImage6,
        category: "appetizer"
    },
    {
        id: 17,
        foodName: "Loaded Potato Skins",
        description: "Crispy potato skins filled with melted cheese, bacon bits, sour cream, and green onions.",
        foodType: "Appetizers",
        price: 9.99,
        image: images.AppetizersImage7,
        category: "appetizer"
    },
    {
        id: 18,
        foodName: "Cheese Plate",
        description: "An assortment of cheeses served with crackers, grapes, and nuts.",
        foodType: "Appetizers",
        price: 13.99,
        image: images.AppetizersImage8,
        category: "appetizer"
    },
    {
        id: 19,
        foodName: "Mozzarella Sticks",
        description: "Golden-fried mozzarella sticks served with marinara sauce for dipping.",
        foodType: "Appetizers",
        price: 8.99,
        image: images.AppetizersImage9,
        category: "appetizer"
    },
    {
        id: 20,
        foodName: "Garlic Bread",
        description: "Sliced baguette brushed with garlic butter and toasted until golden brown.",
        foodType: "Appetizers",
        price: 6.99,
        image: images.AppetizersImage,
        category: "appetizer"
    }
];
export const desiMainCourses = [
    {
        id: 1,
        foodName: "Chicken Biryani",
        description: "A flavorful rice dish cooked with marinated chicken, aromatic spices, and herbs, layered and cooked to perfection.",
        foodType: "Desi Main Course",
        price: 12.99,
        image: images.DesiFoodImage1
        , category: "Main Course"
    },
    {
        id: 2,
        foodName: "Butter Chicken",
        description: "Tender chicken pieces cooked in a rich and creamy tomato-based sauce, flavored with butter, cream, and a blend of spices.",
        foodType: "Desi Main Course",
        price: 14.99,
        image: images.DesiFoodImage2
        , category: "Main Course"

    },
    {
        id: 3,
        foodName: "Palak Paneer",
        description: "Soft cubes of paneer (Indian cottage cheese) cooked in a flavorful spinach gravy, seasoned with spices and garlic.",
        foodType: "Desi Main Course",
        price: 11.99,
        image: images.DesiFoodImage3
        , category: "Main Course"

    },
    {
        id: 4,
        foodName: "Tandoori Chicken",
        description: "Chicken marinated in yogurt and seasoned with a blend of spices, then grilled or baked until tender and juicy.",
        foodType: "Desi Main Course",
        price: 13.99,
        image: images.DesiFoodImage4
        , category: "Main Course"

    },
    {
        id: 5,
        foodName: "Dal Makhani",
        description: "Creamy lentil dish made with black lentils, kidney beans, butter, and cream, simmered until rich and flavorful.",
        foodType: "Desi Main Course",
        price: 10.99,
        image: images.DesiFoodImage5
        , category: "Main Course"

    },
    {
        id: 6,
        foodName: "Chicken Karahi",
        description: "Spicy and tangy chicken curry cooked with tomatoes, onions, garlic, ginger, and a blend of aromatic spices.",
        foodType: "Desi Main Course",
        price: 13.99,
        image: images.DesiFoodImage6
        , category: "Main Course"

    },
    {
        id: 7,
        foodName: "Vegetable Biryani",
        description: "Fragrant rice dish cooked with mixed vegetables, spices, and herbs, served with yogurt or raita.",
        foodType: "Desi Main Course",
        price: 11.99,
        image: images.DesiFoodImage7
        , category: "Main Course"

    },
    {
        id: 8,
        foodName: "Rogan Josh",
        description: "Tender pieces of meat (usually lamb or goat) cooked in a rich and aromatic gravy, flavored with Kashmiri spices.",
        foodType: "Desi Main Course",
        price: 15.99,
        image: images.DesiFoodImage8
        , category: "Main Course"

    },
    {
        id: 9,
        foodName: "Chana Masala",
        description: "A popular vegetarian dish made with chickpeas cooked in a spiced tomato-based sauce, seasoned with onions, garlic, and ginger.",
        foodType: "Desi Main Course",
        price: 9.99,
        image: images.DesiFoodImage9
        , category: "Main Course"

    },
    {
        id: 10,
        foodName: "Lamb Biryani",
        description: "Aromatic rice dish cooked with tender pieces of lamb, seasoned with spices, and served with raita.",
        foodType: "Desi Main Course",
        price: 14.99,
        image: images.DesiFoodImage10
        , category: "Main Course"

    }
];
export const desserts = [
    {
        id: 31,
        foodName: "Chocolate Cake",
        description: "Rich and moist chocolate cake, layered with creamy chocolate frosting, a classic indulgence.",
        foodType: "Dessert",
        price: 5.99,
        image: images.DesertImage,
        category: "Desert"

    },
    {
        id: 32,
        foodName: "Apple Pie",
        description: "Flaky pastry crust filled with sweetened apples, cinnamon, and spices, baked until golden brown.",
        foodType: "Dessert",
        price: 4.99,
        image: images.DesertImage10,
        category: "Desert"

    },
    {
        id: 33,
        foodName: "Cheesecake",
        description: "Creamy and velvety cheesecake with a graham cracker crust, topped with fruit compote or chocolate ganache.",
        foodType: "Dessert",
        price: 6.99,
        image: images.DesertImage3,
        category: "Desert"

    },
    {
        id: 34,
        foodName: "Vanilla Ice Cream",
        description: "Smooth and creamy vanilla-flavored ice cream, perfect on its own or as a topping for pies and cakes.",
        foodType: "Dessert",
        price: 3.49,
        image: images.DesertImage4,
        category: "Desert"

    },
    {
        id: 35,
        foodName: "Strawberry Shortcake",
        description: "Light and fluffy shortcake biscuits layered with fresh strawberries and whipped cream, a delightful summer treat.",
        foodType: "Dessert",
        price: 4.49,
        image: images.DesertImage5,
        category: "Desert"

    },
    {
        id: 36,
        foodName: "Tiramisu",
        description: "Italian dessert made with layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder, rich and decadent.",
        foodType: "Dessert",
        price: 7.49,
        image: images.DesertImage6,
        category: "Desert"

    },
    {
        id: 37,
        foodName: "Key Lime Pie",
        description: "Tangy and refreshing pie made with key lime juice, sweetened condensed milk, and a graham cracker crust, a taste of the tropics.",
        foodType: "Dessert",
        price: 5.49,
        image: images.DesertImage7,
        category: "Desert"

    },
    {
        id: 38,
        foodName: "Panna Cotta",
        description: "Italian dessert made with sweetened cream that is set with gelatin, often flavored with vanilla, coffee, or fruit.",
        foodType: "Dessert",
        price: 6.49,
        image: images.DesertImage8,
        category: "Bakery"
    },
    {
        id: 39,
        foodName: "Banoffee Pie",
        description: "Indulgent pie made with a biscuit base, caramel filling, sliced bananas, whipped cream, and grated chocolate.",
        foodType: "Dessert",
        price: 6.99,
        image: images.DesertImage9,
        category: "Bakery"
    },
    {
        id: 40,
        foodName: "Mango Sorbet",
        description: "Refreshing frozen dessert made with ripe mangoes, sugar, and lemon juice, dairy-free and bursting with tropical flavor.",
        foodType: "Dessert",
        price: 4.99,
        image: images.DesertImage2,
        category: "Bakery"
    },
    {
        id: 41,
        foodName: "Red Velvet Cupcake",
        description: "Moist and velvety red-colored cupcake topped with cream cheese frosting, a classic treat for any occasion.",
        foodType: "Dessert",
        price: 3.99,
        image: images.DesertImage6,
        category: "Bakery"
    }
];
export const soups = [
    {
        id: 42,
        foodName: "Tomato Soup",
        description: "Classic tomato soup made with ripe tomatoes, onions, garlic, and basil, pureed until smooth and creamy.",
        foodType: "Soup",
        price: 4.99,
        image: images?.soupImage1,
        category: "Soup"

    },
    {
        id: 43,
        foodName: "Chicken Noodle Soup",
        description: "Hearty soup made with tender chicken, vegetables, egg noodles, and aromatic herbs, comforting and delicious.",
        foodType: "Soup",
        price: 5.99,
        image: images.soupImage2,
        category: "Soup"

    },
    {
        id: 44,
        foodName: "Butternut Squash Soup",
        description: "Smooth and velvety soup made with roasted butternut squash, onions, carrots, and a hint of nutmeg, perfect for fall.",
        foodType: "Soup",
        price: 6.49,
        image: images.soupImage3,
        category: "Soup"

    },
    {
        id: 45,
        foodName: "Minestrone Soup",
        description: "Italian vegetable soup made with tomatoes, beans, pasta, and assorted vegetables, flavored with herbs and Parmesan cheese.",
        foodType: "Soup",
        price: 6.99,
        image: images.soupImage4,
        category: "Soup"

    },
    {
        id: 46,
        foodName: "Lentil Soup",
        description: "Hearty soup made with lentils, vegetables, and spices, simmered until thick and flavorful, a nutritious and satisfying meal.",
        foodType: "Soup",
        price: 5.49,
        image: images.soupImage5,
        category: "Soup"

    },
    {
        id: 47,
        foodName: "Cream of Mushroom Soup",
        description: "Rich and creamy soup made with mushrooms, onions, garlic, and cream, garnished with fresh herbs, a comforting classic.",
        foodType: "Soup",
        price: 6.99,
        image: images.soupImage6,
        category: "Soup"

    },
    {
        id: 48,
        foodName: "Vegetable Soup",
        description: "Healthy and flavorful soup made with a variety of vegetables, simmered in a savory broth, a nutritious choice for any day.",
        foodType: "Soup",
        price: 5.99,
        image: images.soupImage7,
        category: "Soup"

    },
    {
        id: 49,
        foodName: "Broccoli Cheddar Soup",
        description: "Creamy soup made with tender broccoli florets, onions, cheddar cheese, and cream, a comforting and cheesy delight.",
        foodType: "Soup",
        price: 7.49,
        image: images.soupImage8,
        category: "Soup"

    },
    {
        id: 50,
        foodName: "Clam Chowder",
        description: "Rich and creamy soup made with tender clams, potatoes, onions, celery, and bacon, a classic New England favorite.",
        foodType: "Soup",
        price: 8.49,
        image: images.soupImage9,
        category: "Soup"

    },
    {
        id: 51,
        foodName: "French Onion Soup",
        description: "Classic French soup made with caramelized onions, beef broth, and topped with toasted bread and melted cheese, savory and satisfying.",
        foodType: "Soup",
        price: 7.99,
        image: images.soupImage10,
        category: "Soup"

    }
];

const RestaurantWrapper = ({ navigation }: any) => {
    const [restaurantDetail, setRestaurantDetail] = useState<any | null>(null)

    console.log("restaurantDetail", restaurantDetail)
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

                restaurantsDetailData={restaurantDetail?.data}
                navigation={navigation}
                soups={soups}
                desserts={desserts}
                mainCourceData={desiMainCourses}
                appetizers={appetizers}
                seaFood={Seafood}
                mostPopularFoodData={MostPopularFood}
                featuredFoodItems={RestaurantsFeaturedItem}
            />
        </View>
    )
}

export default RestaurantWrapper