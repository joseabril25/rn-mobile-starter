import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={71.051} height={71.051} viewBox="0 0 71.051 71.051" {...props}>
      <Path
        d="M35.525 0a35.525 35.525 0 1035.526 35.525A35.63 35.63 0 0035.525 0zm4.1 53.288h-8.2v-6.832h8.2zm0-15.03h-8.2V16.396h8.2z"
        fill="#eb0303"
      />
    </Svg>
  );
}

export default SvgComponent;
