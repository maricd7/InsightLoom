const getNews = async()=>{
    const res = await fetch('https://olx.ba/'); 
    const html = await res.text()

    console.log(html, 'html')
}

export default getNews