

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';


function Icon({
    color = Color.mds_global_gray_color,
    size = 20,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20"  >
            {/* <g opacity="0.64"> */}
                <Path  d="M3.33337 10C3.33337 13.6819 6.31814 16.6667 10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.31814 13.6819 3.33337 10 3.33337C6.31814 3.33337 3.33337 6.31814 3.33337 10ZM10.0352 5.92597H9.97265C9.77912 5.92597 9.61821 6.07497 9.60337 6.26794L9.28278 10.4356C9.26915 10.6127 9.38322 10.7746 9.55461 10.8213L12.9761 11.7544C13.0003 11.7611 13.0253 11.7644 13.0505 11.7644C13.2067 11.7644 13.3334 11.6378 13.3334 11.4815V11.3261C13.3334 11.1932 13.2622 11.0705 13.1468 11.0045L10.7408 9.62967L10.4038 6.25949C10.3848 6.07015 10.2255 5.92597 10.0352 5.92597Z" fill={color} />
            {/* </g> */}
        </Svg>

    );
}

export default Icon