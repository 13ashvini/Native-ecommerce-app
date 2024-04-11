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
       
        // <Svg width="8" height="14" viewBox="0 0 8 14" fill="none"   {...props}>
        //     <Path d="M5.15466 14V6.99917H7.22554L7.5 4.58665H5.15466L5.15822 3.37916C5.15822 2.74992 5.22228 2.41278 6.19073 2.41278H7.48535V0H5.41418C2.92635 0 2.05075 1.17033 2.05075 3.13848V4.58692H0.5V6.99944H2.05075V14H5.15466Z" fill={color} />
        // </Svg>
        <Svg width="7" height="7" viewBox="0 0 4 4" fill="none" >
<Path  d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#868686"/>
</Svg>

    );
}

export default Icon;