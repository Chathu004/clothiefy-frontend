import React from 'react'
import Head from '../top/Head'
import Popular from '../popular/Popular'
import Offers from '../offers/Offers'
import NewCollection from '../NewCollections/NewCollection'
import NewsLetter from '../NewsLetter/NewsLetter'


function Shop() {
  return (
    <div>
      <Head/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop