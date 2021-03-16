import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color, ...props }) {
  return (
    <Svg width={14.5} height={14.5} viewBox="0 0 14.5 14.5" {...props}>
      <Path
        d="M0 11.48v3.023h3.02l8.908-8.908-3.02-3.02zm14.264-8.223a.8.8 0 000-1.136L12.38.236a.8.8 0 00-1.136 0L9.77 1.71l3.02 3.02 1.474-1.474z"
        fill={color || '#ffffff'}
      />
    </Svg>
  );
}

export default SvgComponent;
