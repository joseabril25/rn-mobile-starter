import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function SvgComponent({ active, ...props }) {
  return (
    <Svg width={8} height={8} viewBox="0 0 8 8" {...props}>
      <Circle cx={4} cy={4} r={4} fill={active ? '#fff' : '#757575'} />
    </Svg>
  );
}

export default SvgComponent;
