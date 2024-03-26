import React from 'react'
import Nav from '../_components/Nav/Nav'
import Heading from '../_components/common/Heading/Heading'
import NewsMain from '../_components/NewsMain/NewsMain'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Heading text='Latest news'/>
      <NewsMain/>
    </div>
  )
}
