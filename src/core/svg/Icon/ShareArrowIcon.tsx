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
        <Svg width={size} height={size} viewBox="0 0 16 14" fill="none" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.00425434 12.455C0.00425434 11.7134 -0.148907 8.78665 2.0762 6.4647C3.57378 4.90202 5.81506 4.63098 8.49539 4.50738V0.729246C8.49539 0.326495 8.81007 0 9.19823 0C9.37283 0 9.54117 0.067426 9.67048 0.189147L15.7694 5.93014C16.0569 6.20075 16.0785 6.66194 15.8177 6.96023C15.804 6.97589 15.7897 6.99092 15.7747 7.00528L9.6758 12.8657C9.391 13.1394 8.94632 13.1217 8.68256 12.8262C8.56224 12.6914 8.49539 12.5144 8.49539 12.3307V8.57564C6.79359 8.6242 5.58137 8.73652 4.47999 9.10007C2.90108 9.62125 1.6793 11.0957 0.814662 13.5236L0.814632 13.5235C0.712659 13.8099 0.449593 14 0.155393 14H0C0 13.5542 0.00425434 12.8479 0.00425434 12.455Z" fill={color} />
        </Svg>

    );
}

export default Icon;