import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';

function Icon({
    color = Color.mds_global_black_color,
    size = 16,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 8 14" fill="none" >
            < Path d="M5.58579 7L0.292893 1.70711C-0.0976305 1.31658 -0.0976305 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976305 13.3166 -0.0976305 12.6834 0.292893 12.2929L5.58579 7Z" fill={color} />
        </Svg >
    );
}

export default Icon;