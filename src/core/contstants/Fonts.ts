import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Color from "./Color";
const fontFamily = {
    poppins: {
        thin: 'Poppins-Thin',
        regular: 'Poppins-Regular',
        medium: 'Poppins-Medium',
        semi: 'Poppins-SemiBold',
        bold: 'Poppins-Bold',
    },
    gothic: {
        thin: 'NanumGothic-Thin',
        regular: 'NanumGothic-Regular',
        medium: 'NanumGothic-Medium',
        semi: 'NanumGothic-Semi',
        bold: 'NanumGothic-Bold',
    },
    sfProText: {
        regular: 'SF-Pro-Text-Regular',
        medium: 'SF-Pro-Text-Medium',
        semi: 'SF-Pro-Text-Semibold',
        bold: 'SF-Pro-Text-Bold',
    }
}
export const fontSizeLabel = {
    mds_global_font_size_10: RFValue(10),
    mds_global_font_size_11: RFValue(11),
    mds_global_font_size_12: RFValue(12),
    mds_global_font_size_13: RFValue(13),
    mds_global_font_size_14: RFValue(14),
    mds_global_font_size_15: RFValue(15),
    mds_global_font_size_40: RFValue(40),
    mds_global_font_size_36: RFValue(36),
    mds_global_font_size_37: RFValue(37),
    mds_global_font_size_34: RFValue(34),
    mds_global_font_size_32: RFValue(32),
    mds_global_font_size_30: RFValue(30),
    mds_global_font_size_28: RFValue(28),
    mds_global_font_size_24: RFValue(24),
    mds_global_font_size_20: RFValue(20),
    mds_global_font_size_18: RFValue(18),
    mds_global_font_size_16: RFValue(16),
}

const fontSize = {
    extraLarge: fontSizeLabel.mds_global_font_size_40,
    large: fontSizeLabel.mds_global_font_size_37,
    h1: fontSizeLabel.mds_global_font_size_34,
    h2: fontSizeLabel.mds_global_font_size_32,
    h3: fontSizeLabel.mds_global_font_size_30,
    h4: fontSizeLabel.mds_global_font_size_28,
    h5: fontSizeLabel.mds_global_font_size_24,
    h6: fontSizeLabel.mds_global_font_size_20,
    title: fontSizeLabel.mds_global_font_size_18,
    body: fontSizeLabel.mds_global_font_size_16,
    medium: fontSizeLabel.mds_global_font_size_14,
    subText: fontSizeLabel.mds_global_font_size_13,
    footnote: fontSizeLabel.mds_global_font_size_12,
    small: fontSizeLabel.mds_global_font_size_11,
    caption: fontSizeLabel.mds_global_font_size_10,

}

export const fontHeadings = {
    heading1: {
        fontSize: fontSize.large,
        color: Color.mds_global_black_color,
    },
    heading2: {
        fontSize: fontSize.h1,
        color: Color.mds_global_black_color,
    },
    heading3: {
        fontSize: fontSize.h2,
        color: Color.mds_global_black_color,
    },
    heading4: {
        fontSize: fontSize.h4,
        color: Color.mds_global_black_color,
    },
    heading5: {
        fontSize: fontSize.h5,
        color: Color.mds_global_black_color,
    },
    heading6: {
        fontSize: fontSize.h6,
        color: Color.mds_global_black_color,
    },
    body: {
        fontSize: fontSize.body,
        color: Color.mds_global_black_color,
    },
    medium: {
        fontSize: fontSize.medium,
        // color: Color.mds_global_black_color,
    },
    subText: {
        fontSize: fontSize.subText,
        color: Color.mds_global_black_color,
    },
    footnote: {
        fontSize: fontSize.footnote,
        color: Color.mds_global_black_color,
    },
    small: {
        fontSize: fontSize.small,
        color: Color.mds_global_black_color,
    },
    caption: {
        fontSize: fontSize.caption,
        color: Color.mds_global_black_color,
    },

    grey_text: {
        fontSize: fontSize.caption,
        color: Color.mds_global_black_color,
    },

}
const createStyleFont = () => {

    type ThinFontTypeGenerator<Type> = {
        [Property in keyof Type as `mds_ui_font_${Uncapitalize<
            string & Property
        >}_thin`]: Type[Property]
    }

    type RegularFontTypeGenerator<Type> = {
        [Property in keyof Type as `mds_ui_font_${Uncapitalize<
            string & Property
        >}_regular`]: Type[Property]
    }

    type MediumFontTypeGenerator<Type> = {
        [Property in keyof Type as `mds_ui_font_${Uncapitalize<
            string & Property
        >}_medium`]: Type[Property]
    }

    type SemiBoldFontTypeGenerator<Type> = {
        [Property in keyof Type as `mds_ui_font_${Uncapitalize<
            string & Property
        >}_semi`]: Type[Property]
    }

    type BoldFontTypeGenerator<Type> = {
        [Property in keyof Type as `mds_ui_font_${Uncapitalize<
            string & Property
        >}_bold`]: Type[Property]
    }

    //@ts-ignore
    const boldFonts: BoldFontTypeGenerator<typeof fontStyleTheme> = {}

    //@ts-ignore
    const semiBoldFonts: SemiBoldFontTypeGenerator<typeof fontStyleTheme> = {}

    //@ts-ignore
    const mediumFonts: MediumFontTypeGenerator<typeof fontStyleTheme> = {}

    //@ts-ignore
    const regularFonts: RegularFontTypeGenerator<typeof fontStyleTheme> = {}
    //@ts-ignore
    const thinFonts: ThinFontTypeGenerator<typeof fontStyleTheme> = {}

    Object.entries(fontHeadings).forEach(([key, value]) => {
        //@ts-ignore
        boldFonts[`mds_ui_font_${key}_bold`] = {
            ...value,
            fontFamily: fontFamily.poppins.bold
        },
            //@ts-ignore
            semiBoldFonts[`mds_ui_font_${key}_semi`] = {
                ...value,
                fontFamily: fontFamily.poppins.semi
            },
            //@ts-ignore
            mediumFonts[`mds_ui_font_${key}_medium`] = {
                ...value,
                fontFamily: fontFamily.poppins.medium
            },

            //@ts-ignore
            regularFonts[`mds_ui_font_${key}_regular`] = {
                ...value,
                fontFamily: fontFamily.poppins.regular
            }
        //@ts-ignore
        thinFonts[`mds_ui_font_${key}_thin`] = {
            ...value,
            fontFamily: fontFamily.poppins.thin
        },
            boldFonts[`mds_ui_gothic_font_${key}_bold`] = {
                ...value,
                fontFamily: fontFamily.gothic.bold
            };
        semiBoldFonts[`mds_ui_gothic_font_${key}_semi`] = {
            ...value,
            fontFamily: fontFamily.gothic.semi
        };
        mediumFonts[`mds_ui_gothic_font_${key}_medium`] = {
            ...value,
            fontFamily: fontFamily.gothic.medium
        };
        regularFonts[`mds_ui_gothic_font_${key}_regular`] = {
            ...value,
            fontFamily: fontFamily.gothic.regular
        };
        thinFonts[`mds_ui_gothic_font_${key}_thin`] = {
            ...value,
            fontFamily: fontFamily.gothic.thin
        };
    })

    return { ...regularFonts, ...mediumFonts, ...semiBoldFonts, ...boldFonts, ...thinFonts }
}
export default {
    fontFamily,
    fontSize,
    style: {
        ...createStyleFont(),
        mds_ui_font_number_bold: {
            fontFamily: fontFamily.poppins.bold,
            fontSize: fontSizeLabel.mds_global_font_size_20,
        },
    },
}