import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';

function Icon({
    color = Color.mds_global_white_color,
    size = 34,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        <Svg width={size} height={size} viewBox="0 0 34 34" fill="none" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.7574 11.3432C12.3668 10.9527 11.7337 10.9527 11.3431 11.3432C10.9526 11.7337 10.9526 12.3669 11.3431 12.7574L15.5858 17L11.3431 21.2427C10.9526 21.6332 10.9526 22.2664 11.3431 22.6569C11.7337 23.0474 12.3668 23.0474 12.7574 22.6569L17 18.4143L21.2426 22.6569C21.6332 23.0474 22.2663 23.0474 22.6568 22.6569C23.0474 22.2664 23.0474 21.6332 22.6568 21.2427L18.4142 17L22.6568 12.7574C23.0474 12.3669 23.0474 11.7337 22.6568 11.3432C22.2663 10.9527 21.6332 10.9527 21.2426 11.3432L17 15.5858L12.7574 11.3432Z" fill={color} />
        </Svg>
    );
}

export default Icon;