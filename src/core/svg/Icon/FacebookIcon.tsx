import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';


function Icon({
    color = Color.mds_global_darkblue_color,
    size = 24,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        // <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
        //     <Path d="M8 12.6667V3.33332" stroke="#F22A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        //     <Path d="M10.6667 9.99999L8 12.6667" stroke="#F22A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        //     <Path d="M5.33325 9.99999L7.99992 12.6667" stroke="#F22A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        // </Svg>
        <Svg width="8" height="14" viewBox="0 0 8 14" fill="none"   {...props}>
            <Path d="M5.15466 14V6.99917H7.22554L7.5 4.58665H5.15466L5.15822 3.37916C5.15822 2.74992 5.22228 2.41278 6.19073 2.41278H7.48535V0H5.41418C2.92635 0 2.05075 1.17033 2.05075 3.13848V4.58692H0.5V6.99944H2.05075V14H5.15466Z" fill={color} />
        </Svg>
    );
}

export default Icon;