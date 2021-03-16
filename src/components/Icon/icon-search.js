import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color, ...props }) {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" {...props}>
      <Path
        d="M13.125 14a.87.87 0 01-.619-.256L9.293 10.53a5.832 5.832 0 111.237-1.237l3.214 3.213A.875.875 0 0113.125 14zM5.833 1.75a4.083 4.083 0 104.084 4.083A4.088 4.088 0 005.833 1.75z"
        fill={color || '#414141'}
      />
    </Svg>
  );
}

export default SvgComponent;
