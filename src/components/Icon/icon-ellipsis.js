import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ active, ...props }) {
  return (
    <Svg width={16} height={4} viewBox="0 0 16 4" {...props}>
      <Path
        d="M2 0a2 2 0 102 2 2.006 2.006 0 00-2-2zm12 0a2 2 0 102 2 2.006 2.006 0 00-2-2zM8 0a2 2 0 102 2 2.006 2.006 0 00-2-2z"
        fill={active ? '#757575' : '#fff'}
      />
    </Svg>
  );
}

export default SvgComponent;
