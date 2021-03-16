import React from 'react';
import PropTypes from 'prop-types';

import IconAlert from './icon-alert';
import IconBigArrow from './icon-big-arrow';
import IconChevronDown from './icon-chevron-down';
import IconChevronRight from './icon-chevron-right';
import IconEdit from './icon-edit';
import IconEllipsis from './icon-ellipsis';
import IconExit from './icon-exit';
import IconEye from './icon-eye';
import IconFilter from './icon-filter';
import IconHeaderBack from './icon-header-back';
import IconLock from './icon-lock';
import IconMagnifyingGlass from './icon-magnifying-glass';
import IconMagnifyingStar from './icon-magnifying-star';
import IconMail from './icon-mail';
import IconMenuAlert from './icon-menu-alert';
import IconMenuHome from './icon-menu-home';
import IconMenuSettings from './icon-menu-settings';
import IconMenuStar from './icon-menu-star';
import IconMenuTrackedSearch from './icon-menu-tracked-search';
import IconModalExit from './icon-modal-exit';
import IconModalIndicator from './icon-modal-indicator';
import IconPerson from './icon-person';
import IconSearch from './icon-search';
import IconSignLess from './icon-sign-less';
import IconSignMore from './icon-sign-more';
import IconStar from './icon-star';
import IconStepCircle from './icon-step-circle';
import IconVideoPause from './icon-video-pause';
import IconVideoPlay from './icon-video-play';

const Icon = ({ name, active, ...props }) => {
  switch (name) {
    case 'alert':
      return <IconAlert {...props} />;
    case 'big-arrow':
      return <IconBigArrow {...props} />;
    case 'chevron-down':
      return <IconChevronDown active={active} {...props} />;
    case 'chevron-right':
      return <IconChevronRight {...props} />;
    case 'edit':
      return <IconEdit {...props} />;
    case 'ellipsis':
      return <IconEllipsis active={active} {...props} />;
    case 'exit':
      return <IconExit {...props} />;
    case 'eye':
      return <IconEye active={active} {...props} />;
    case 'filter':
      return <IconFilter {...props} />;
    case 'header-back':
      return <IconHeaderBack {...props} />;
    case 'lock':
      return <IconLock {...props} />;
    case 'magnifying-glass':
      return <IconMagnifyingGlass {...props} />;
    case 'magnifying-star':
      return <IconMagnifyingStar {...props} />;
    case 'mail':
      return <IconMail {...props} />;
    case 'menu-alert':
      return <IconMenuAlert active={active} {...props} />;
    case 'menu-home':
      return <IconMenuHome active={active} {...props} />;
    case 'menu-settings':
      return <IconMenuSettings active={active} {...props} />;
    case 'menu-star':
      return <IconMenuStar active={active} {...props} />;
    case 'menu-tracked-search':
      return <IconMenuTrackedSearch active={active} {...props} />;
    case 'modal-exit':
      return <IconModalExit {...props} />;
    case 'modal-indicator':
      return <IconModalIndicator {...props} />;
    case 'person':
      return <IconPerson {...props} />;
    case 'search':
      return <IconSearch {...props} />;
    case 'sign-less':
      return <IconSignLess {...props} />;
    case 'sign-more':
      return <IconSignMore {...props} />;
    case 'star':
      return <IconStar active={active} {...props} />;
    case 'step-circle':
      return <IconStepCircle active={active} {...props} />;
    case 'video-pause':
      return <IconVideoPause {...props} />;
    case 'video-play':
      return <IconVideoPlay {...props} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    'alert',
    'big-arrow',
    'chevron-down',
    'chevron-right',
    'edit',
    'ellipsis',
    'exit',
    'eye',
    'filter',
    'header-back',
    'lock',
    'magnifying-glass',
    'magnifying-star',
    'mail',
    'menu-alert',
    'menu-home',
    'menu-settings',
    'menu-star',
    'menu-tracked-search',
    'modal-exit',
    'modal-indicator',
    'person',
    'search',
    'sign-less',
    'sign-more',
    'star',
    'step-circle',
    'video-pause',
    'video-play',
  ]).isRequired,
  active: PropTypes.bool,
};

Icon.defaultProps = {
  active: false,
};

export default Icon;
