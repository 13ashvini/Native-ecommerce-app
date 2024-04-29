import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import images from "../../core/assests/images"
import AllPartnercCard from '../../core/component/ui/AllPartnercCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { setIsLoading, setItems } from '../../Slice/featurePartnerSlice';
import { useGetAllFeaturePartnerListQuery } from '../../service/featuredPartnerService';
import { DEV_URL } from "../../core/env/env"

// export const FeaturedPartnerData = [
//   {
//     id: 1,
//     image: images?.featuredPartnerImage1,
//     partnerName: "Krispy Creme",
//     location: "St George Terrace, Perth",
//     rating: "4.5",
//     time: "25 min",

//     delivery: "Free delivery",
//   },
//   {
//     id: 2,
//     image: images?.featuredPartnerImage2,
//     partnerName: "Mario Italiano",
//     location: "Hay street , Perth City",
//     rating: "3",
//     time: "30 min",
//     delivery: "Free delivery",
//   },
//   {
//     id: 3,
//     image: images?.featuredPartnerImage3,
//     partnerName: "Tacos Nanchas",
//     location: "King Street, Perth",
//     rating: "3",
//     time: "20 min",
//     delivery: "Express delivery",
//   },
//   {
//     id: 4,
//     image: images?.featuredPartnerImage4,
//     partnerName: "McDonald's",
//     location: "Murray Street, Perth",
//     rating: "3.7",
//     time: "15 min",
//     delivery: "Free delivery",
//   },
//   {
//     id: 5,
//     image: images?.featuredPartnerImage5,
//     partnerName: "KFC Foods",
//     location: "Wellington Street, Perth",
//     rating: "4",
//     time: "35 min",
//     delivery: "Standard delivery",
//   },
//   {
//     id: 6,
//     image: images?.featuredPartnerImage6,
//     partnerName: "Cafe MayField’s",
//     location: "Barrack Street, Perth",
//     rating: "4.2",
//     time: "40 min",
//     delivery: "Free delivery",
//   },
//   {
//     id: 7,
//     image: images?.featuredPartnerImage7,
//     partnerName: "Pizza Palace",
//     location: "Elizabeth Quay, Perth",
//     rating: "4.8",
//     time: "20 min",
//     delivery: "Express delivery",
//   },
// ];

const FeaturedPartnersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [featuredPartner, setFeaturedPartner] = useState<any[]>([])
  const limit = 6
  const BASE_URL = DEV_URL
  const dispatch = useDispatch()
  const { data: featuredPartnerData, isLoading: isFeaturedPartnerDataLoading, isFetching: isFeaturedPartnerFetching } = useGetAllFeaturePartnerListQuery(
    {
      limit: limit,
      offset: (currentPage - 1) * limit
    }
  )

  useEffect(() => {
    if (featuredPartnerData) {
      // @ts-ignore
      setFeaturedPartner(prevData => [...prevData, ...featuredPartnerData?.data]);
      // @ts-ignore
      setHasMoreData(featuredPartnerData?.totalCount > currentPage * limit);

      dispatch(setIsLoading(false));
    } else {
      dispatch(setIsLoading(true));
    }
  }, [featuredPartnerData]);

  const handleLoadMore = () => {
    if (!isFeaturedPartnerFetching && !isFeaturedPartnerDataLoading && hasMoreData) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };
  // const handleLoadMore = () => {
  //   if (!isFeaturedPartnerFetching && !isFeaturedPartnerDataLoading) {
  //     const newData = featuredPartner?.data || [];
  //     setHasMoreData(featuredPartner?.data?.length === limit);

  //     setOffset((currentPage - 1) * limit),
  //       setFeaturedPartner((prevData: any) => {
  //         console.log("prevData", prevData)
  //         return currentPage === 1 ? newData : [...prevData?.data, ...newData];

  //       });

  //     setCurrentPage(prevPage => prevPage + 1);

  //   }
  // };
  // const handleLoadMore = () => {
  //   if (!isFeaturedPartnerFetching && !isFeaturedPartnerDataLoading && hasMoreData) {
  //     Math.ceil(featuredPartner?.totalCount / limit);
  //     setCurrentPage(prevPage => prevPage + 1);
  //   }
  // };
  return (
    <View style={styles.mainView}>
      <FlatList
        data={featuredPartner}

        renderItem={({ item }: any) => {
          return (
            <AllPartnercCard
              image={`${BASE_URL}/${item?.image}`}
              partnerName={item?.partnerName}
              location={item?.location}
              rating={item?.rating}
              time={item?.time}
              delivery={item?.deliveryType}


            />
          )
        }}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
        keyExtractor={(item: any, index: any) => item?._id.toString() + index}
        // maxToRenderPerBatch={4}
        // updateCellsBatchingPeriod={4 / 2}
        onEndReached={hasMoreData ? handleLoadMore : null}

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
    // paddingVertical: 15,
    justifyContent: "center"
  },
  contentContainer: {
  },

})
export default FeaturedPartnersList