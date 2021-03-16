import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent({ color, ...props }) {
  return (
    <Svg width={19.125} height={19.129} viewBox="0 0 19.125 19.129" {...props}>
      <G fill={color || '#2b2b2b'}>
        <Path d="M18.9 17.745l-5.319-5.369a7.58 7.58 0 10-1.15 1.165l5.284 5.334a.819.819 0 001.155.03.824.824 0 00.03-1.16zM7.625 13.607a5.985 5.985 0 114.233-1.753 5.948 5.948 0 01-4.233 1.753z" />
        <Path d="M7.349 4.216l-.779 1.58-1.743.254a.382.382 0 00-.211.651L5.877 7.93l-.3 1.736a.382.382 0 00.554.4l1.559-.82 1.559.82a.382.382 0 00.554-.4l-.3-1.736 1.264-1.226a.382.382 0 00-.208-.655l-1.746-.254-.779-1.579a.382.382 0 00-.685 0z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
