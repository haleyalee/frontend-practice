import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material';
import Header from './Header';

const Styled = {
  sidebar: styled('aside')(() => ({
    marginRight: '3rem',
    minWidth: '20%',
    width: 'auto',
    height: '100%',
  })),
  tableOfContents: styled('ul')(() => ({
    margin: 0,
    padding: 0,
  })),
  tab: styled('li')(() => ({
    listStyle: 'none',
    marginBottom: '0.5rem'
  })),
}

const siteMap = [
  { path: "/product-preview-card-component", name: "Product Preview Card Component"},
  { path: '/random', name: 'Random'},
];

const SiteNav = () => {

  // const [siteNav, setSiteNav] = useState(siteMap);

  // useEffect(() => {
  //   console.log(siteMap)
  //   console.log(siteNav);
  //   const alphabetizeSiteNav = siteNav.sort((a, b) => {
  //     const nameA = a.name.toUpperCase();
  //     const nameB = b.name.toUpperCase();
        
  //     // sort in an ascending order
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  
  //     // names must be equal
  //     return 0;
  //   });
  //   console.log(alphabetizeSiteNav)
  //   setSiteNav(alphabetizeSiteNav);
  // }, [siteNav, siteMap])

  return (
    <Styled.sidebar>
      <Header />
      <Styled.tableOfContents>
        {siteMap.map((p, i) => 
          <Styled.tab key={i}>
            <a href={p.path}>
              {p.name}
            </a>
          </Styled.tab>
        )}
      </Styled.tableOfContents>
    </Styled.sidebar>
  )
}

export default SiteNav