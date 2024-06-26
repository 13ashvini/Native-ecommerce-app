import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';


function Icon({
    color = Color.mds_global_gray_color,
    size = 30,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24"  >
            <Path d="M17 10C18.1046 10 19 10.8954 19 12V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V12C5 10.8954 5.89543 10 7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10ZM12 6C10.3431 6 9 7.34315 9 9V10H15V9C15 7.34315 13.6569 6 12 6Z" fill={color} />
        </Svg>
    );
}

export default Icon;