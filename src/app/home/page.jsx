import React from 'react'
import Nav from '../_components/Nav/Nav'
import Heading from '../_components/common/Heading/Heading'
import NewsMain from '../_components/NewsMain/NewsMain'


const getNews = async()=>{
  const res = await fetch('https://olx.ba/'); 
  const html = await res.text()

  console.log(html, 'html')
}

export default async function Home() {
  
    const data = await getNews() ;

    console.log('deki dejta')

  return (
    <div>
      <Nav/>
      <Heading text='Latest news'/>
      <NewsMain/>
    </div>
  )
}
