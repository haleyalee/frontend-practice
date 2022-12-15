import React from 'react'
import { styled } from '@mui/material';

const Styled = {
  header: styled('header')(() => ({
    marginBottom: '1rem',
  })),
  title: styled('h1')(() => ({
    margin: 0
  }))
}
const Header = () => {
  return (
    <Styled.header>
      <Styled.title>
        <a href="/">
          Frontend Practice
        </a>
      </Styled.title>
    </Styled.header>
  )
}

export default Header