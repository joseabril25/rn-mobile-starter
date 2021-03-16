import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/**
 *
 * @param {Boolean} active
 * Active: white icon; else gray color
 */
function SvgComponent({ active, ...props }) {
  return (
    <Svg width={9.712} height={5.997} viewBox="0 0 9.712 5.997" {...props}>
      <Path
        d="M14.571,8.59,10.856,12.3,7.141,8.59,6,9.731l4.856,4.856,4.856-4.856Z"
        transform="translate(-6 -8.59)"
        fill={active ? '#fff' : '#BDBDBD'}
      />
    </Svg>
  );
}

export default SvgComponent;
