/* global document */
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import React, { useState, useCallback, useMemo } from 'react';

import sleep from '../../common/sleep';
import Button from '../../components/core/Button';
import Footer from '../../components/Footer';
import useWindowSize from '../../hooks/useWindowSize';
import Styled from './styles';
import AvatarPart from '../../components/AvatarPart/component';

const Landing = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const { height, width } = useWindowSize();
  const avatarSize = useMemo(
    () => Math.min(400, Math.min(height - 239, width - 64)),
    [height, width],
  );

  const downloadAvatar = useCallback(async () => {
    setIsDownloading(true);
    try {
      await sleep(1000);
      const avatar = document.getElementById('avatar');
      const blob = await domtoimage.toBlob(avatar);
      await FileSaver.saveAs(blob, 'avatar.png');
    } catch (err) {
      console.log(err);
    } finally {
      setIsDownloading(false);
    }
  }, [setIsDownloading]);

  return (
    <Styled size={avatarSize}>
      <div className="body">
        <div className="preview">
          <div className="avatar" id="avatar">
            <AvatarPart avatarSize={avatarSize} part="BEARD" />
            <AvatarPart avatarSize={avatarSize} part="BODY" />
            <AvatarPart avatarSize={avatarSize} part="CLOTHES" />
            <AvatarPart avatarSize={avatarSize} part="HAIR" />
          </div>
        </div>
        <Button
          className="button"
          label="Download"
          loading={isDownloading}
          onClick={downloadAvatar}
        />
      </div>
      <Footer />
    </Styled>
  );
};

export default Landing;
