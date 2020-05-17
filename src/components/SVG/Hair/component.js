import React from 'react';
import PropTypes from 'prop-types';

import BobCut from './BobCut';
import BobCutWithBangs from './BobCutWithBangs';
import LongAndVoluminous from './LongAndVoluminous';

const Hair = ({ color, haircut }) => {
  switch (haircut) {
    case 'LONG_AND_VOLUMINOUS':
      return <LongAndVoluminous color={color} />;
    case 'BOB_CUT':
      return <BobCut color={color} />;
    case 'BOB_CUT_WITH_BANGS':
    default:
      return <BobCutWithBangs color={color} />;
  }
};

Hair.propTypes = {
  color: PropTypes.string.isRequired,
  haircut: PropTypes.number.isRequired,
};

export default Hair;
