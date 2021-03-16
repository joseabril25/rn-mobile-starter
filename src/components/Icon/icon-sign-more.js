import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" {...props}>
      <G data-name="Group 16803">
        <G data-name="Add/More Sign" fill="#fff">
          <Path data-name="Rectangle 6310" d="M0 5h12v2H0z" />
          <Path data-name="Rectangle 6311" d="M5 12V0h2v12z" />
        </G>
        <G data-name="Minus/Less Sign">
          <Path data-name="Rectangle 6312" fill="#fff" d="M0 4.98h12v2H0z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
