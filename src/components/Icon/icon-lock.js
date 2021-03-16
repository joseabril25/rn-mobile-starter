import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={11.337} height={14.879} viewBox="0 0 11.337 14.879" {...props}>
      <Path
        d="M5.668 11.337A1.417 1.417 0 104.251 9.92a1.421 1.421 0 001.417 1.417zM9.92 4.96h-.709V3.543a3.543 3.543 0 00-7.085 0V4.96h-.709A1.421 1.421 0 000 6.377v7.085a1.421 1.421 0 001.417 1.417h8.5a1.421 1.421 0 001.417-1.417V6.377A1.421 1.421 0 009.92 4.96zM3.472 3.543a2.2 2.2 0 014.393 0V4.96H3.472zm6.448 9.92h-8.5V6.377h8.5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
