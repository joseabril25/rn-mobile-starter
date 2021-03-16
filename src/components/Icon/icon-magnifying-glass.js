import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color, ...props }) {
  return (
    <Svg width={23} height={23} viewBox="0 0 23 23" {...props}>
      <Path
        d="M21.563 23a1.429 1.429 0 01-1.017-.421L15.268 17.3a9.581 9.581 0 112.032-2.033l5.28 5.278A1.438 1.438 0 0121.563 23zM9.584 2.875a6.708 6.708 0 106.709 6.708 6.716 6.716 0 00-6.709-6.708z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
