
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
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.6666 16.9998H8.66659C8.20635 16.9998 7.83325 17.3729 7.83325 17.8332C7.83325 18.2934 8.20635 18.6665 8.66659 18.6665H18.6666V19.4998C18.6666 20.0223 18.3681 20.3332 17.8333 20.3332H7.83325C6.37792 20.3332 5.33325 19.245 5.33325 17.8332V6.1665C5.33325 4.7547 6.37792 3.6665 7.83325 3.6665H17.8333C18.3681 3.6665 18.6666 3.97742 18.6666 4.49984V16.9998Z" fill={color} />
        </Svg>
    );
}

export default Icon;