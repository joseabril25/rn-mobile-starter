import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={18} height={22.5} viewBox="0 0 18 22.5" {...props}>
      <G data-name="Icon ionic-ios-pause" fill="#fff">
        <Path
          data-name="Path 11478"
          d="M5.055 22.5H.57a.566.566 0 01-.57-.562V.563A.566.566 0 01.57.001h4.486a.566.566 0 01.57.563v21.374a.566.566 0 01-.571.562z"
        />
        <Path
          data-name="Path 11479"
          d="M17.43 22.5h-4.485a.566.566 0 01-.57-.562V.563a.566.566 0 01.57-.562h4.485a.566.566 0 01.57.563v21.374a.566.566 0 01-.57.562z"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
