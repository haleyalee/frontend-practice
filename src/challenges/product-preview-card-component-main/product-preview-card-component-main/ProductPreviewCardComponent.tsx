import React from 'react'
import ChallengeInfo from '../../../components/ChallengeInfo'
import { Rank } from '../../../util/constants'
import { styled } from '@mui/material';
import MainContainer from '../../../containers/MainContainer';

const ProductPreviewCardComponent = () => {

  return (
    <MainContainer>
      <ChallengeInfo
        title={"Product Preview Card Component"}
        rank={Rank.easy}
        source={"https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"}
      />
    </MainContainer>
  )
}

export default ProductPreviewCardComponent