import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";




import { useDispatch } from "react-redux";
import AddRestaurant from "./AddRestaurant";
import { View } from "react-native";
import { useAddRestaurantMutation } from "../../../service/RestaurantService";
import { showMessage } from "react-native-flash-message";
import Color from "../../../core/contstants/Color";
import { Routes } from "../../../core/navigation/type";


export type AddRestaurantProps = {
    restaurantPartnerName: string;
    location: string;
    rating: string
    time: string
    available: boolean
    deliveryType: string
    images: any[]
};
const initialValues: AddRestaurantProps = {
    restaurantPartnerName: "",
    location: "",
    rating: "",
    time: "",
    available: true,
    deliveryType: "",
    images: []
};
const validationSchema = yup.object().shape({

});

const AddRestaurantWrapper = ({ navigation }: any) => {
    // ADD RESTAURANT MUTATION CALL FROM RESTAURANT SERVICE------------------------------------------>>

    const [addRestaurantapi] = useAddRestaurantMutation()

    // ADD RESTAURANT API INTEGRATE FUNCTION HANDLE------------------------------------------>>
    const handleSubmit = (
        values: AddRestaurantProps,
        { resetForm, setSubmitting }: FormikHelpers<AddRestaurantProps>
    ) => {
        const imageFormData = values.images.map((image: any, index) => {
            return {
                uri: image,
                type: "image/jpeg",
                name: image.split('/').pop(),
            };
        });
        const formData = new FormData();
        formData.append("restaurantPartnerName", values.restaurantPartnerName);
        formData.append("location", values.location);
        formData.append("rating", values.rating);
        formData.append("time", values.time);
        formData.append("deliveryType", values.deliveryType);
        imageFormData.forEach((image, index) => {
            if (image) {
                formData.append(`images`, image);
            }

        });
        addRestaurantapi(formData)
            .then((res: any) => {
                if (res?.error) {
                    setSubmitting(false)
                    if (res?.error?.data?.message) {
                        setSubmitting(false)
                        showMessage({
                            message: (res?.error?.data?.message),
                            type: "danger",
                        });
                    } else if (res?.error?.data?.error) (
                        showMessage({
                            message: (res?.error?.data?.error),
                            type: "danger",
                        })
                    )
                } else if (res?.data) {
                    setSubmitting(false)
                    if (res?.data?.message) {
                        resetForm()
                        showMessage({
                            message: (res?.data?.message),
                            type: "success",
                            backgroundColor: Color.mds_global_main_Yellow_color,
                            color: Color.mds_global_white_color,
                        });
                        navigation.navigate(Routes.HomeScreen)

                    }
                }
            })
            .catch((err: any) => {
                console.log("err", err);
                setSubmitting(false)

            });
    };

    //     values: AddRestaurantProps,
    //     { resetForm, setSubmitting }: FormikHelpers<AddRestaurantProps>
    // ) => {
    //     // Create FormData object
    //     const formData = new FormData();
    //     let files: File[] = [];
    //     // const formatedData = values.image.map(async (imageURI, index) => {
    //     //     const response = await fetch(imageURI);
    //     //     const blob = await response.blob();
    //     //     const file: any = new File([blob], `image_${index}.jpg`);
    //     //     files.push(file?.data?.name);

    //     //     console.log("file", file?.data?.name)

    //     // })
    //     values.image.map(async (imageURI, index) => {
    //         const response = await fetch(imageURI);
    //         const blob = await response.blob();
    //         const file: any = new File([blob], `image_${index}.jpg`);
    //         console.log("File:", file.data.name); // Log the file to check if it's correctly formatted
    //         files.push(file.data.name);
    //     })
    //     // console.log("formatedData", formatedData)
    //     console.log("files--------------", files)

    //     formData.append("restaurantPartnerName", values.restaurantPartnerName);
    //     formData.append("location", values.location);
    //     formData.append("rating", values.rating);
    //     formData.append("time", values.time);
    //     formData.append("deliveryType", values.deliveryType);
    //     formData.append("image", files)
    //     // files.forEach((file, index) => {
    //     //     formData.append(`image`, file);
    //     // });
    //     // Determine fileType based on image type

    //     // Append fileType and fileTitle fields
    //     // Append each image to FormData
    //     // values.image.forEach((image, index) => {
    //     //     if (image) {
    //     //         formData.append(`image`, image);
    //     //     }
    //     // });

    //     console.log("formdta", formData)
    //     // Submit FormData
    //     addRestaurantapi(formData)
    //         .then((res: any) => {
    //             console.log("Response:", res);
    //             // Reset form if submission is successful
    //         })
    //         .catch((err: any) => {
    //             console.error("Error:", err);
    //         });
    // };
    // const handleSubmit = async (
    //     values: AddRestaurantProps,
    //     { resetForm, setSubmitting }: FormikHelpers<AddRestaurantProps>
    // ) => {
    //     try {
    //         // Create FormData object
    //         const formData = new FormData();

    //         // Fetch and format images
    //         const files: File[] = [];
    //         await Promise.all(
    //             values.image.map(async (imageURI, index) => {
    //                 const response = await fetch(imageURI);
    //                 const blob = await response.blob();
    //                 const file: any = new File([blob], `image_${index}.jpg`);
    //                 console.log("File:", file.data.name); // Log the file to check if it's correctly formatted
    //                 files.push(file.data.name);
    //             })
    //         );

    //         console.log("Files Array:", files); // Log the files array to check its contents

    //         // Append formatted image files to FormData
    //         files.forEach((file, index) => {
    //             formData.append(`image`, file);
    //         });

    //         // Append other form fields
    //         formData.append("restaurantPartnerName", values.restaurantPartnerName);
    //         formData.append("location", values.location);
    //         formData.append("rating", values.rating);
    //         formData.append("time", values.time);
    //         formData.append("deliveryType", values.deliveryType);

    //         // Submit FormData
    //         console.log("formData", formData)
    //         const res = await addRestaurantapi(formData);
    //         console.log("Response:", res);
    //         // Reset form if submission is successful
    //         // resetForm();
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };
    return (
        <View>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {(addRestaurantProps) => (
                    <AddRestaurant addRestaurantProps={addRestaurantProps} />

                )}
            </Formik>
        </View>
    );
};

export default AddRestaurantWrapper;