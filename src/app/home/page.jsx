import React from 'react'
import Nav from '../_components/Nav/Nav'
import HeadingNew from '../_components/HeadingNew/HeadingNew'
import SectionHeading from '../_components/common/SectionHeading/SectionHeading'
import NewsContainer from '../_components/NewsMain/NewsContainer'


export default async function Home() {
  
  async function getNews(){
    const res =await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2024-03-28&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await res.json()
    console.log('deki', data)
  }
  console.log(process.env.NEXT_PUBLIC_API_KEY, 'KJEY')
  getNews()
  return (
    <div>
      <Nav/>
      <HeadingNew/>
      <SectionHeading text='Latest News'/>
      <NewsContainer/>
    </div>
  )
}
