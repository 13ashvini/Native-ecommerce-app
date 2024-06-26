
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';


function Icon({
    color = Color.mds_global_darkblue_color,
    size = 24,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 34 34" fill="none"   {...props}>
            <Path d="M16 23C12.134 23 9 19.866 9 16C9 12.134 12.134 9 16 9C19.866 9 23 12.134 23 16C23 17.8276 22.2996 19.4917 21.1525 20.7383L24.7071 24.2929C25.0976 24.6834 25.0976 25.3166 24.7071 25.7071C24.3166 26.0976 23.6834 26.0976 23.2929 25.7071L19.594 22.0082C18.5434 22.638 17.314 23 16 23ZM16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" fill={color} />
        </Svg>
    );
}

export default Icon;