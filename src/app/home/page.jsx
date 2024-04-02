import React from 'react'
import Nav from '../_components/Nav/Nav'
import HeadingNew from '../_components/HeadingNew/HeadingNew'
import SectionHeading from '../_components/common/SectionHeading/SectionHeading'
import NewsContainer from '../_components/NewsMain/NewsContainer'
import Link from 'next/link'


export default async function Home() {
  
  return (
    <div>
      <Nav/>
      <HeadingNew/>
      <div className='sectionHeading'>
        <SectionHeading text='Latest News'/> 
        <Link href='/all-news'>Show all</Link>
      </div>
      <NewsContainer/>
    </div>
  )
}
