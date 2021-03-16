import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={14.685} height={11.748} viewBox="0 0 14.685 11.748" {...props}>
      <Path
        d="M13.217 0H1.469A1.467 1.467 0 00.007 1.469L0 10.28a1.473 1.473 0 001.469 1.469h11.748a1.473 1.473 0 001.469-1.469V1.469A1.473 1.473 0 0013.217 0zm0 10.28H1.469V2.937l5.874 3.671 5.874-3.671zM7.343 5.14L1.469 1.469h11.748z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

export default SvgComponent;
