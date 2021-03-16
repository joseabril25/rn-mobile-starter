import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={50} height={5} viewBox="0 0 50 5" {...props}>
      <Rect width={50} height={5} rx={2.5} fill="#121212" opacity={0.205} />
    </Svg>
  );
}

export default SvgComponent;
