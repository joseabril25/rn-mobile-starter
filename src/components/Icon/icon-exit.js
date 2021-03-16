import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/**
 *
 * @param {Boolean} active
 * Active: white icon; else gray color
 */
function SvgComponent({ active, ...props }) {
  return (
    <Svg width={10} height={10} viewBox="0 0 10 10" {...props}>
      <Path
        d="M17.523,8.523l-1-1-4,4-4-4-1,1,4,4-4,4,1,1,4-4,4,4,1-1-4-4Z"
        transform="translate(-7.523 -7.523)"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
