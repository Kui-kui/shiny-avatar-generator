import React from 'react';
import PropTypes from 'prop-types';

import BobCut from './BobCut';
import BobCutWithBangs from './BobCutWithBangs';
import Bun from './Bun';
import Curly from './Curly';
import LongAndStraight from './LongAndStraight';
import LongAndVoluminous from './LongAndVoluminous';
import LongAndWavy from './LongAndWavy';
import Ponytail from './Ponytail';

const Hair = ({ clothesColor, color, haircut }) => {
  switch (haircut) {
    case 'BOB_CUT':
      return <BobCut color={color} />;
    case 'BOB_CUT_WITH_BANGS':
      return <BobCutWithBangs color={color} />;
    case 'BUN':
      return <Bun clothesColor={clothesColor} color={color} />;
    case 'CURLY':
      return <Curly color={color} />;
    case 'LONG_AND_STRAIGHT':
      return <LongAndStraight color={color} />;
    case 'LONG_AND_VOLUMINOUS':
      return <LongAndVoluminous color={color} />;
    case 'LONG_AND_WAVY':
      return <LongAndWavy color={color} />;
    case 'PONYTAIL':
      return <Ponytail color={color} />;
    default:
      return null;
  }
};

Hair.propTypes = {
  clothesColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  haircut: PropTypes.string.isRequired,
};

export default Hair;
