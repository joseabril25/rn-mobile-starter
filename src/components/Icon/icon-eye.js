import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/**
 *
 * @param {Boolean} active
 * Active: eye on; else eye off
 */
function SvgComponent({ active, ...props }) {
  return active ? (
    <Svg width={17.276} height={12.18} viewBox="0 0 17.276 12.18" {...props}>
      <Path
        d="M8.638.75A8.42 8.42 0 00.806 6.09a8.413 8.413 0 0015.663 0A8.42 8.42 0 008.638.75zm0 3.2a2.136 2.136 0 102.136 2.14 2.133 2.133 0 00-2.136-2.14z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  ) : (
    <Svg width={17.766} height={17.678} viewBox="0 0 17.766 17.678" {...props}>
      <Path
        d="M8.638 3.925a8.42 8.42 0 00-7.832 5.34 8.413 8.413 0 0015.663 0 8.42 8.42 0 00-7.831-5.34zm0 3.2a2.136 2.136 0 102.136 2.14 2.133 2.133 0 00-2.136-2.14z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <Path fill="#fff" d="M1.502 0l16.263 16.263-1.414 1.415L.088 1.414z" />
    </Svg>
  );
}

export default SvgComponent;
