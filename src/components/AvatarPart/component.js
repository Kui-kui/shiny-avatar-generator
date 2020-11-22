import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import { MorphReplace } from 'react-svg-morph';

import { LandingContext } from '../../common/context';
import Body from './Body';
import Clothes from './Clothes';
import Hair from './Hair';
import Styled from './styles';

const AvatarPart = ({ avatarSize, part }) => {
  const { colors, clothes, haircut } = useContext(LandingContext);

  const getContent = useCallback(() => {
    switch (part) {
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
  }, [colors, clothes, haircut, part]);

  return (
    <Styled>
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
