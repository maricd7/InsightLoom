const getDownloads = async ()=> {
    const res = await fetch('https://www.rtvbn.com/kategorija/fudbal/1');
    const html = await res.text()

    console.log(html)
}

export default getDownloads ; 
