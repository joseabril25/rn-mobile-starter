import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color, ...props }) {
  return (
    <Svg width={50.954} height={50.954} viewBox="0 0 50.954 50.954" {...props}>
      <Path
        d="M0 22.292h38.757l-17.8-17.8L25.477 0l25.477 25.477-25.477 25.477-4.49-4.49 17.77-17.8H0z"
        fill={color || '#fff'}
      />
    </Svg>
  );
}

export default SvgComponent;
