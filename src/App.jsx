import { useState, useEffect } from 'react';
import './App.css'
import Dog from './Components/dog';
import Gallery from './Components/gallery';
import axios from 'axios';

const App = () => {

  const [currentImage, setCurrentImage] = useState("");
  const [prevImages, setPrevImages] = useState([]);
  const URL = 'https://dog.ceo/api/breeds/image/random'
  const fetchData = async () => {
    const response = await axios.get(URL);
    setCurrentImage(response.data);
    setPrevImages((images) => [...images, response.data]);
  }
  return (
    <div className="whole-page">
      <h1>Welcome to Dog World! </h1>
      <button onClick={fetchData}>Discover!</button>
      <img src={currentImage}></img>
      <div className="container">
        <Gallery images={prevImages} />
      </div>
    </div>
  )
}

export default App;
