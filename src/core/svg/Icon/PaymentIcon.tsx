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
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.66675 7.83317C3.66675 6.9127 4.41294 6.1665 5.33341 6.1665H18.6667C19.5872 6.1665 20.3334 6.9127 20.3334 7.83317V8.6665H3.66675V7.83317ZM3.66675 11.1665H20.3334V16.1665C20.3334 17.087 19.5872 17.8332 18.6667 17.8332H5.33341C4.41294 17.8332 3.66675 17.087 3.66675 16.1665V11.1665ZM16.1667 13.6665C15.7065 13.6665 15.3334 14.0396 15.3334 14.4998C15.3334 14.9601 15.7065 15.3332 16.1667 15.3332H17.8334C18.2937 15.3332 18.6667 14.9601 18.6667 14.4998C18.6667 14.0396 18.2937 13.6665 17.8334 13.6665H16.1667Z" fill={color} />
        </Svg>
    );
}

export default Icon;