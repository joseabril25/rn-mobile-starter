import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ active, ...props }) {
  return (
    <Svg width={17.61} height={21.2} viewBox="0 0 17.61 21.2" {...props}>
      <Path
        d="M8.805 20.6a2.057 2.057 0 002.051-2.051h-4.1A2.051 2.051 0 008.805 20.6zm6.154-6.154V9.318c0-3.149-1.682-5.785-4.615-6.482v-.7a1.538 1.538 0 10-3.077 0v.7c-2.944.7-4.615 3.323-4.615 6.482v5.128L.6 16.5v1.026h16.41V16.5z"
        fill={active ? '#ffffff' : 'none'}
        stroke={!active && '#aaa'}
        strokeWidth={!active && 1.2}
      />
    </Svg>
  );
}

export default SvgComponent;
