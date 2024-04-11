import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import images from "../../core/assests/images"
import AllPartnercCard from '../../core/component/ui/AllPartnercCard';

export const FeaturedPartnerData = [
  {
    id: 1,
    image: images?.featuredPartnerImage1,
    partnerName: "Krispy Creme",
    location: "St George Terrace, Perth",
    rating: "4.5",
    time: "25 min",

    delivery: "Free delivery",
  },
  {
    id: 2,
    image: images?.featuredPartnerImage2,
    partnerName: "Mario Italiano",
    location: "Hay street , Perth City",
    rating: "3",
    time: "30 min",
    delivery: "Free delivery",
  },
  {
    id: 3,
    image: images?.featuredPartnerImage3,
    partnerName: "Tacos Nanchas",
    location: "King Street, Perth",
    rating: "3",
    time: "20 min",
    delivery: "Express delivery",
  },
  {
    id: 4,
    image: images?.featuredPartnerImage4,
    partnerName: "McDonald's",
    location: "Murray Street, Perth",
    rating: "3.7",
    time: "15 min",
    delivery: "Free delivery",
  },
  {
    id: 5,
    image: images?.featuredPartnerImage5,
    partnerName: "KFC Foods",
    location: "Wellington Street, Perth",
    rating: "4",
    time: "35 min",
    delivery: "Standard delivery",
  },
  {
    id: 6,
    image: images?.featuredPartnerImage6,
    partnerName: "Cafe MayField’s",
    location: "Barrack Street, Perth",
    rating: "4.2",
    time: "40 min",
    delivery: "Free delivery",
  },
  {
    id: 7,
    image: images?.featuredPartnerImage7,
    partnerName: "Pizza Palace",
    location: "Elizabeth Quay, Perth",
    rating: "4.8",
    time: "20 min",
    delivery: "Express delivery",
  },
];

const FeaturedPartnersList = () => {
  return (
    <View style={styles.mainView}>
      <FlatList
        data={FeaturedPartnerData}

        renderItem={({ item }: any) => {
          return (
            <AllPartnercCard
              image={item?.image}
              partnerName={item?.partnerName}
              location={item?.location}
              rating={item?.rating}
              time={item?.time}
              delivery={item?.delivery}

            />
          )
        }}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 10, height: 15 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    // borderWidth: 5,
    flex: 1,
    width: "100%",
    // borderWidth: 2,
    paddingHorizontal: 5,
    justifyContent: "center"
  },
  contentContainer: {
  },

})
export default FeaturedPartnersList