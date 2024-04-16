import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';


function Icon({
    color = Color.mds_global_gray_color,
    size = 24,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 34 34" fill="none"   {...props}>
            <Path d="M13 12C13 14.2091 14.7909 16 17 16C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C14.7909 8 13 9.79086 13 12ZM16.9833 18C12.2619 18 8.38826 20.4265 8.00065 25.1992C7.97954 25.4592 8.47671 26 8.7275 26H25.2467C25.9979 26 26.0096 25.3955 25.9979 25.2C25.7049 20.2932 21.7712 18 16.9833 18Z" fill={color} />
        </Svg>
    );
}

export default Icon;