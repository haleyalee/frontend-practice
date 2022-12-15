import React from 'react'
import { styled } from '@mui/material'
import { Rank } from '../util/constants'

const Styled = {
  card: styled('div')(() => ({
    backgroundColor: '#DDDDDD',
    padding: '1rem',
    borderRadius: '6px',
  })),
  title: styled('h1')(() => ({
    margin: 0,
    fontSize: '24px'
  })),
  info: styled('div')(() => ({
    margin: '0.5rem 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  })),
  p: styled('p')(() => ({
    margin: 0,
  }))
}

const ChallengeInfo = (props: {
  title: string,
  source: string,
  rank: Rank,
}) => {
  const { title, source, rank } = props;
  return (
    <Styled.card>
      <Styled.title>{title}</Styled.title>
      <Styled.info>
        <Styled.p>{rank}</Styled.p>
        <Styled.p><a href={source}><em>Source</em></a></Styled.p>
      </Styled.info>
    </Styled.card>
  )
}

export default ChallengeInfo