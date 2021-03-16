import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent({ active, color, ...props }) {
  return active ? (
    <Svg width={18.02} height={17.247} viewBox="0 0 18.02 17.247" {...props}>
      <Path
        d="M9.485.6l-2.2,4.46-4.921.717a1.078,1.078,0,0,0-.6,1.839l3.56,3.469-.842,4.9A1.077,1.077,0,0,0,6.049,17.12l4.4-2.314,4.4,2.314a1.078,1.078,0,0,0,1.563-1.135l-.842-4.9,3.56-3.469a1.078,1.078,0,0,0-.6-1.839l-4.921-.717L11.418.6A1.079,1.079,0,0,0,9.485.6Z"
        transform="translate(-1.441 0.001)"
        fill={color || '#ebc703'}
      />
    </Svg>
  ) : (
    <Svg width={19.046} height={18.266} viewBox="0 0 19.046 18.266">
      <G transform="translate(0.513 0.5)">
        <Path
          d="M9.485.6l-2.2,4.46-4.921.717a1.078,1.078,0,0,0-.6,1.839l3.56,3.469-.842,4.9A1.077,1.077,0,0,0,6.049,17.12l4.4-2.314,4.4,2.314a1.078,1.078,0,0,0,1.563-1.135l-.842-4.9,3.56-3.469a1.078,1.078,0,0,0-.6-1.839l-4.921-.717L11.418.6A1.079,1.079,0,0,0,9.485.6Z"
          transform="translate(-1.441 0.001)"
          fill="none"
          stroke={color || '#2b2b2b'}
          stroke-width="1"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
