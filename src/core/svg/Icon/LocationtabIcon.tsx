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
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.16675 10.75C6.16675 7 8.66675 4.5 12.4167 4.5C16.1667 4.5 18.6667 7.625 18.6667 10.75C18.6667 12.6938 16.8531 15.3631 13.2259 18.7577C12.7629 19.191 12.0488 19.209 11.5646 18.7996C7.96604 15.7565 6.16675 13.0733 6.16675 10.75ZM12.4167 12C13.5673 12 14.5001 11.0673 14.5001 9.91667C14.5001 8.76607 13.5673 7.83333 12.4167 7.83333C11.2662 7.83333 10.3334 8.76607 10.3334 9.91667C10.3334 11.0673 11.2662 12 12.4167 12Z" fill={color} />
        </Svg>
    );
}

export default Icon;