/* global document */
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import React, { useState, useCallback } from 'react';
import { MorphReplace } from 'react-svg-morph';

import Body from '../../components/SVG/Body';
import Clothes from '../../components/SVG/Clothes';
import Hair from '../../components/SVG/Hair';
import Styled from './styles';
import Footer from '../../components/Footer';
import Button from '../../components/core/Button';

const initialColors = {
  body: '#FFE9D0',
  clothes: '#458FFF',
  hair: '#FFD947',
};

const Landing = () => {
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
    <Styled>
      <div className="body">
        <div className="preview">
          <div className="avatar" id="avatar">
            <Body color={colors.body} />
            <div className="svgContainer">
              <MorphReplace height={400} rotation="none" width={400}>
                <Clothes
                  key={`${clothes}_${colors.clothes}`}
                  clothes={clothes}
                  color={colors.clothes}
                />
              </MorphReplace>
            </div>
            <div className="svgContainer">
              <MorphReplace height={400} rotation="none" width={400}>
                <Hair
                  key={`${haircut}_${colors.hair}`}
                  clothesColor={colors.clothes}
                  color={colors.hair}
                  haircut={haircut}
                />
              </MorphReplace>
            </div>
          </div>
        </div>
        <Button
          className="button"
          label="Download"
          loading={isDownloading}
          onClick={downloadAvatar}
        />
      </div>
      <Footer
        clothes={clothes}
        colors={colors}
        haircut={haircut}
        onColorChange={onColorChange}
        setClothes={setClothes}
        setHaircut={setHaircut}
      />
    </Styled>
  );
};

export default Landing;
