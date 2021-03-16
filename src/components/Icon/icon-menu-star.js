import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ active, ...props }) {
  return (
    <Svg width={22.227} height={21.322} viewBox="0 0 22.227 21.322" {...props}>
      <Path
        d="M9.992 1.346l-2.55 5.171-5.706.834a1.25 1.25 0 00-.692 2.131l4.128 4.023-.976 5.683a1.249 1.249 0 001.812 1.316l5.1-2.683 5.1 2.683a1.25 1.25 0 001.812-1.316l-.976-5.683 4.128-4.023a1.25 1.25 0 00-.681-2.131l-5.706-.832-2.551-5.173a1.251 1.251 0 00-2.242 0z"
        fill={active ? '#fff' : 'none'}
        stroke={!active && '#aaa'}
        strokeWidth={!active && 1.3}
      />
    </Svg>
  );
}

export default SvgComponent;
