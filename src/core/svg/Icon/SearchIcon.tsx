
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
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1667 16.9999C7.94505 16.9999 5.33337 14.3882 5.33337 11.1666C5.33337 7.94492 7.94505 5.33325 11.1667 5.33325C14.3884 5.33325 17 7.94492 17 11.1666C17 12.6896 16.4164 14.0763 15.4605 15.1152L18.4226 18.0773C18.7481 18.4028 18.7481 18.9304 18.4226 19.2558C18.0972 19.5813 17.5696 19.5813 17.2441 19.2558L14.1617 16.1734C13.2862 16.6982 12.2617 16.9999 11.1667 16.9999ZM11.1667 15.3333C13.4679 15.3333 15.3334 13.4678 15.3334 11.1666C15.3334 8.8654 13.4679 6.99992 11.1667 6.99992C8.86552 6.99992 7.00004 8.8654 7.00004 11.1666C7.00004 13.4678 8.86552 15.3333 11.1667 15.3333Z" fill={color} />
        </Svg>
    );
}

export default Icon;