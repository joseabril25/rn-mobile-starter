import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={15.853} height={16.583} viewBox="0 0 15.853 16.583" {...props}>
      <Path
        d="M14.833.75H1.022a.257.257 0 00-.207.414l5.062 7.094a1.848 1.848 0 01.357 1.092v6.19c.019.207.188.339.358.263l2.879-1.091a.227.227 0 00.151-.226V9.35a1.892 1.892 0 01.358-1.091l5.064-7.095a.257.257 0 00-.211-.414z"
        fill="none"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgComponent;
