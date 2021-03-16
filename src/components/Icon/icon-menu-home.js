import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ active, ...props }) {
  return (
    <Svg width={23.529} height={20} viewBox="0 0 23.529 20" {...props}>
      <Path
        data-name="Icon material-home"
        d="M9.412 20v-7.059h4.706V20H20v-9.412h3.529L11.765 0 0 10.588h3.529V20z"
        fill={active ? '#ffffff' : 'none'}
        stroke={!active && '#ffffff'}
        strokeWidth={!active && 1.2}
      />
    </Svg>
  );
}

export default SvgComponent;
