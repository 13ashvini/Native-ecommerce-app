import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import images from "../../core/assests/images"
import AllPartnercCard from '../../core/component/ui/AllPartnercCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { setIsLoading, setItems } from '../../Slice/featurePartnerSlice';
import { useGetAllFeaturePartnerListQuery } from '../../service/featuredPartnerService';
import { DEV_URL } from "../../core/env/env"

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
  const { items } = useSelector((state: RootState) => state.featurePartner)
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const limit = 4
  const BASE_URL = DEV_URL
  const dispatch = useDispatch()
  const { data: featuredPartnerData, isLoading: isFeaturedPartnerDataLoading, isFetching: isFeaturedPartnerFetching } = useGetAllFeaturePartnerListQuery(
    {
      limit: limit,
      offset: (page - 1) * limit,
    }
  )

  useEffect(() => {
    if (!isFeaturedPartnerDataLoading || !isFeaturedPartnerFetching || featuredPartnerData) {
      dispatch(setItems(featuredPartnerData))
      dispatch(setIsLoading(false))
    } else {
      dispatch(setIsLoading(true))
    }
  })
  const handleLoadMore = () => {
    if (!isFeaturedPartnerFetching && !isFeaturedPartnerDataLoading) {
      // setOffset(prevOffset => prevOffset + limit); // Increase offset for next page
      setPage(prevPage => prevPage + 1); // Increase page number
    }
  };
  return (
    <View style={styles.mainView}>
      <FlatList
        data={items?.data}

        renderItem={({ item }: any) => {
          return (
            <AllPartnercCard
              image={`${BASE_URL}/${item?.image}`}
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
        keyExtractor={(item: any) => item?._id.toString()}
        maxToRenderPerBatch={4}
        updateCellsBatchingPeriod={4 / 2}
        onEndReached={handleLoadMore}
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