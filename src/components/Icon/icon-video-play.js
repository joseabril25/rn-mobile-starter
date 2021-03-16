import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={15} height={23} viewBox="0 0 15 23" {...props}>
      <Path
        data-name="Polygon 2"
        d="M13.965 10.706a1 1 0 010 1.587L1.609 21.766A1 1 0 010 20.973V2.027a1 1 0 011.608-.794z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
