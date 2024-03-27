import React from 'react'
import Nav from '../_components/Nav/Nav'
import Heading from '../_components/common/Heading/Heading'
import NewsMain from '../_components/NewsMain/NewsMain'

export default function Home() {
  const getNews = () =>{
    fetch('http://localhost:3000/api/getNews')
  }
  getNews()
  return (
    <div>
      <Nav/>
      <Heading text='Latest news'/>
      <NewsMain/>
    </div>
  )
}
