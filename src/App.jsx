import { useState, useEffect } from 'react';
import './App.css'
import Gallery from './Components/gallery';
import Description from './Components/description';
import BanList from './Components/bannedDates';
import axios from 'axios';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY
const App = () => {

  const [attributes, setAttributes] = useState({
    url: "",
    date: "",
    title: "",
    explanation: "",
  });
  const [bannedDates, setBannedDates] = useState([]);
  const [prevImages, setPrevImages] = useState([]);
  const API = `https://api.nasa.gov/planetary/apod?&api_key=${ACCESS_KEY}&count=1`;

  const fetchData = async () => {
    const response = await axios.get(API);
    while (bannedDates.includes(response.data[0].date)) {
      response = await axios.get(API);
    }
    setAttributes({
      url: response.data[0].url,
      date: response.data[0].date,
      title: response.data[0].title,
      explanation: response.data[0].explanation,
    })
    if (response.data[0].url) {
      setPrevImages((images) => [...images, response.data[0].url]);
      console.log(prevImages);
    }
  }
  const handleBanDate = () => {
    setBannedDates((dates) => [...dates, attributes.date]);
  }
  return (
    <div className="whole-page">
      <h1>Astronomy Picture of Any Day!</h1>

      <button className="discover" onClick={fetchData}>Discover!</button>  
      <BanList bannedDates={bannedDates}/>

      <div className="container">
        <img className="image" src={attributes.url}></img>
        <Description 
          text={attributes.explanation} 
          title={attributes.title} 
          date={attributes.date}
          handleBanDate={handleBanDate} 
          className="paragraph"/>
      </div>
      <Gallery images={prevImages} className="gallery"/>
    </div>
  )
}

export default App;
