import React from 'react'

import { Rank } from '../util/constants'

const ChallengeInfo = (props: {
  title: string,
  source: string,
  rank: Rank,
}) => {
  const { title, source, rank } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{rank}</p>
      <p><a href={source}>Source</a></p>
    </div>
  )
}

export default ChallengeInfo