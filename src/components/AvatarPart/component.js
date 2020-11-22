import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { MorphReplace } from 'react-svg-morph';

import { LandingContext } from '../../common/context';
import Beard from './Beard';
import Body from './Body';
import Clothes from './Clothes';
import Hair from './Hair';
import Styled from './styles';

const AvatarPart = ({ avatarSize, part }) => {
  const { beard, colors, clothes, haircut } = useContext(LandingContext);

  const getContent = useCallback(() => {
    switch (part) {
      case 'BEARD':
        return (
          <Beard
            key={`${beard}_${colors.hair}`}
            beard={beard}
            color={colors.hair}
          />
        );
      case 'BODY':
        return <Body key={colors.body} color={colors.body} />;
      case 'CLOTHES':
        return (
          <Clothes
            key={`${clothes}_${colors.clothes}`}
            clothes={clothes}
            color={colors.clothes}
          />
        );
      case 'HAIR':
        return (
          <Hair
            key={`${haircut}_${colors.hair}`}
            clothesColor={colors.clothes}
            color={colors.hair}
            haircut={haircut}
          />
        );
      default:
        return null;
    }
  }, [beard, colors, clothes, haircut, part]);

  if (beard === 'NO_BEARD' && part === 'BEARD') {
    return null;
  }

  return (
    <Styled part={part}>
      <MorphReplace height={avatarSize} rotation="none" width={avatarSize}>
        {getContent()}
      </MorphReplace>
    </Styled>
  );
};

AvatarPart.propTypes = {
  avatarSize: PropTypes.number.isRequired,
  part: PropTypes.string.isRequired,
};

export default AvatarPart;
