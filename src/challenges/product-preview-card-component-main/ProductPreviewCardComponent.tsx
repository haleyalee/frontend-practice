import React from 'react'
import ChallengeInfo from '../../components/ChallengeInfo'
import { Rank } from '../../util/constants'

const ProductPreviewCardComponent = () => {
  return (
    <>
      <ChallengeInfo
        title={"Product Preview Card Component"}
        rank={Rank.easy}
        source={"https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"}
      />
    </>
  )
}

export default ProductPreviewCardComponent