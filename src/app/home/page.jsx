import React from 'react'
import Nav from '../_components/Nav/Nav'
import Heading from '../_components/common/Heading/Heading'
import NewsMain from '../_components/NewsMain/NewsMain'
import HeadingNew from '../_components/HeadingNew/HeadingNew'
import SectionHeading from '../_components/common/SectionHeading/SectionHeading'
import NewsContainer from '../_components/NewsMain/NewsContainer'


const getNews = async()=>{
  const res = await fetch('https://olx.ba/'); 
  const html = await res.text()
  return html; 
}

export default async function Home() {
  
    const data = await getNews() ;
    console.log('deki dejta egete', data)


  return (
    <div>
      <Nav/>
      <HeadingNew/>
      <SectionHeading text='Latest News'/>
      <NewsContainer/>
    </div>
  )
}
