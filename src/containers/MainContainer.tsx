import React from 'react';
import { styled } from '@mui/material';
import SiteNav from '../components/SiteNav';

const Styled = {
  container: styled('div')(() => ({
    width: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '2rem',
  })),
  main: styled('main')(() => ({
    width: '100%',
  }))
}

const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <Styled.container>
      <SiteNav />
      <Styled.main>
        { props.children }
      </Styled.main>
    </Styled.container>
  )
}

export default MainContainer