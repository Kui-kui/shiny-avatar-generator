/* global document */
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import React, { useState, useCallback } from 'react';
import ReactSidebar from 'react-sidebar';

import Body from '../../components/SVG/Body';
import Clothes from '../../components/SVG/Clothes';
import Hair from '../../components/SVG/Hair';
import useWindowSize from '../../hooks/useWindowSize';
import Styled from './styles';
import Sidebar from '../../components/Sidebar/component';
import Button from '../../components/core/Button';

const initialColors = {
  body: '#FFE9D0',
  clothes: '#458FFF',
  hair: '#FFD947',
};

const Landing = () => {
  const { height } = useWindowSize();

  const [colors, setColors] = useState(initialColors);
  const [clothes, setClothes] = useState('CARDIGAN');
  const [haircut, setHaircut] = useState('BOB_CUT_WITH_BANGS');
  const [isDownloading, setIsDownloading] = useState(false);

  const onColorChange = useCallback(
    (key) => ({ hex }) => setColors({ ...colors, [key]: hex }),
    [colors],
  );

  const downloadAvatar = useCallback(async () => {
    setIsDownloading(true);
    try {
      const avatar = document.getElementById('avatar');
      const blob = await domtoimage.toBlob(avatar);
      await FileSaver.saveAs(blob, 'avatar.png');
    } catch (err) {
      console.log(err);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <ReactSidebar
      docked
      sidebar={
        <Sidebar
          clothes={clothes}
          colors={colors}
          haircut={haircut}
          onColorChange={onColorChange}
          setClothes={setClothes}
          setHaircut={setHaircut}
        />
      }
    >
      <Styled height={height}>
        <div className="root">
          <div className="body">
            <div className="preview">
              <div className="avatar" id="avatar">
                <Body color={colors.body} />
                <Clothes clothes={clothes} color={colors.clothes} />
                <Hair
                  clothesColor={colors.clothes}
                  color={colors.hair}
                  haircut={haircut}
                />
              </div>
            </div>
            <Button
              className="button"
              label="Télécharger"
              loading={isDownloading}
              onClick={downloadAvatar}
            />
          </div>
        </div>
      </Styled>
    </ReactSidebar>
  );
};

export default Landing;
