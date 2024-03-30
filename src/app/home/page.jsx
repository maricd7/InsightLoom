import React from 'react'
import Nav from '../_components/Nav/Nav'
import HeadingNew from '../_components/HeadingNew/HeadingNew'
import SectionHeading from '../_components/common/SectionHeading/SectionHeading'
import NewsContainer from '../_components/NewsMain/NewsContainer'


export default async function Home() {
  
  return (
    <div>
      <Nav/>
      <HeadingNew/>
      <SectionHeading text='Latest News'/>
      <NewsContainer/>
    </div>
  )
}
