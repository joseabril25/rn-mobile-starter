import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20.012} height={20.012} viewBox="0 0 20.012 20.012" {...props}>
      <Path
        d="M10.006 10.006A5 5 0 105 5a5 5 0 005.006 5.006zm0 2.5C6.666 12.507 0 14.183 0 17.51v2.5h20.012v-2.5c0-3.327-6.667-5.003-10.006-5.003z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
