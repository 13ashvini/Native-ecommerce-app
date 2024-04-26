import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';

function Icon({
    color = Color.mds_global_main_Yellow_color,
    size = 24,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.76874 10.4227L18.3269 5.90331C18.6458 5.79703 18.9904 5.96934 19.0967 6.28819C19.1383 6.4131 19.1383 6.54815 19.0967 6.67307L14.5773 20.2312C14.471 20.5501 14.1264 20.7224 13.8075 20.6161C13.6514 20.5641 13.523 20.4511 13.4517 20.3028L10.6065 14.3935L4.69719 11.5483C4.39437 11.4025 4.26708 11.0388 4.41288 10.736C4.48426 10.5878 4.61264 10.4747 4.76874 10.4227Z" fill={color} />
        </Svg>

    );
}

export default Icon;