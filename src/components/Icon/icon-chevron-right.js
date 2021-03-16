import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/**
 *
 * @param {Boolean} active
 * Active: white icon; else gray color
 */
function SvgComponent({ active, ...props }) {
  return (
    <Svg width={7.41} height={12} viewBox="0 0 7.41 12" {...props}>
      <Path
        d="M1.41 0L0 1.41 4.58 6 0 10.59 1.41 12l6-6z"
        fill={active ? '#fff' : '#BDBDBD'}
      />
    </Svg>
  );
}

export default SvgComponent;
