import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={12} height={2} viewBox="0 0 12 2" {...props}>
      <Path fill="#fff" d="M0 0h12v2H0z" />
    </Svg>
  );
}

export default SvgComponent;
