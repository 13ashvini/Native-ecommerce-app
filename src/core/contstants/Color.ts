const colorPlatee = {
    mds_global_main_Yellow_color: "#EEA734",
    mds_global_black_color: "#3A3A3A",
    mds_global_gray_10_color: "#010F07",
    mds_global_gray_color: "#868686",
    mds_global_white_color: "#FFFFFF",
    mds_global_darkblue_color: "#395998",
    mds_global_main_Blue_color: "#4285F4",
    mds_global_main_Green_color: "#22A45D",
    mds_global_main_Red_color: "#FF0000",
    mds_global_main_Red_100_color: "#FF0000",
    mds_global_main_Purple_color: "#800080",
    mds_global_light_yellow_color: "#F8EDDC",

}
function withOpacity(color: string, opacity: number): string {
    if (!opacity || opacity > 1 || opacity < 0) {
        return color
    }

    opacity = Number(opacity.toFixed(2))

    const alphaHexValue = Math.ceil(opacity * 255)
        .toString(16)
        .toUpperCase()

    return color + alphaHexValue
}
export default {
    ...colorPlatee,
    withOpacity,

}