import React from 'react';
import styled from 'styled-components';

import { SickResBody } from '@/api';
import { colors } from '@/styles/colors';

interface Props extends SickResBody {
  searchWord: string;
  isFocus?: boolean;
}

export const RecommendItem: React.FC<Props> = (props) => {
  const { sickCd, sickNm, searchWord, isFocus } = props;

  const regex = new RegExp(`(${searchWord})`, 'gi');

  const matchText = sickNm.split(regex);

  return (
    <Recommend isFocus={isFocus} key={`Recommend${sickCd}`}>
      {matchText.map((text) =>
        text.toLowerCase() === searchWord.toLowerCase() ? <BoldWordWrap key={sickCd}>{text}</BoldWordWrap> : text
      )}
    </Recommend>
  );
};

const Recommend = styled.li<{ isFocus?: boolean }>`
  background-color: ${(props) => (props.isFocus ? '#edf5f5' : '#fff')};
  font-size: 16px;
  padding: 8px 0;

  &:hover {
    cursor: pointer;
    color: ${colors.primary500};
  }
`;

const BoldWordWrap = styled.span`
  font-weight: 700;
`;
