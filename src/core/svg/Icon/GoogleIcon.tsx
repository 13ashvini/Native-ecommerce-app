

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Color from '../../contstants/Color';
import { SvgIconType } from '../type';


function Icon({
    color = Color.mds_global_black_color,
    size = 30,
    ...props
}: SvgIconType): React.ReactElement {
    return (
        // <Svg width={size} height={size} viewBox="0 0 34 34" fill="none"  {...props}>
        //     <Path d="M11.4502 12.5025L11 8H10V12.5C10 14.433 11.567 16 13.5 16C15.433 16 17 14.433 17 12.5V8H16L15.5498 12.5025C15.5215 12.7849 15.2838 13 15 13C14.7162 13 14.4785 12.7849 14.4502 12.5025L14 8H13L12.5498 12.5025C12.5215 12.7849 12.2838 13 12 13C11.7162 13 11.4785 12.7849 11.4502 12.5025ZM14.5555 18.9985C14.5243 18.4383 14.061 18 13.5 18C12.939 18 12.4757 18.4383 12.4445 18.9985L12.0832 25.5023C12.0817 25.5285 12.081 25.5548 12.081 25.581C12.081 26.3647 12.7163 27 13.5 27C13.5263 27 13.5525 26.9993 13.5787 26.9978C14.3612 26.9543 14.9603 26.2848 14.9168 25.5023L14.5555 18.9985ZM22.5 20C23.0634 20 23.5311 20.4354 23.5712 20.9975L23.8931 25.5038C23.9481 26.2732 23.3689 26.9415 22.5995 26.9965C22.5664 26.9988 22.5332 27 22.5 27C21.7286 27 21.1033 26.3747 21.1033 25.6033C21.1033 25.5701 21.1045 25.5369 21.1069 25.5038L21.4288 20.9975C21.4689 20.4354 21.9366 20 22.5 20ZM24 18V8C21.7909 8 20 9.79086 20 12V18H24Z" fill={color} />
        // </Svg>
        <Svg viewBox="0 0 1024 1024" ><Path d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88" fill="#EA4335" /><path d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776" fill="#34A853" /><Path d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667" fill="#4285F4" /></Svg>
    );
}

export default Icon;