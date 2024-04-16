
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
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.15645 14.0613C6.15645 15.4264 5.03521 16.5331 3.6521 16.5331H20.3478C18.9646 16.5331 17.8434 15.4264 17.8434 14.0613V9.94149C17.8434 6.7561 15.2272 4.17383 11.9999 4.17383C8.77266 4.17383 6.15645 6.7561 6.15645 9.94149V14.0613ZM11.9999 19.826C12.8601 19.826 13.6553 19.2004 14.0869 18.1839H9.91297C10.3446 19.2004 11.1397 19.826 11.9999 19.826Z" fill={color} />
        </Svg>
    );
}

export default Icon;