import { useState, useEffect } from 'react';
import './App.css'
import Dog from './Components/dog';
import Gallery from './Components/gallery';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const App = () => {

  const [currentImage, setCurrentImage] = useState(null);
  const [prevImages, setPrevImages] = useState([]);
  const URL = 'https://dog.ceo/api/breeds/image/random'
  const fetchData = async () => {
    const response = await axios.get(URL);
    setCurrentImage(response.data);
    setPrevImages((images) => [...images, response.data]);
  }
  useEffect(() => {fetchData();}, [])

  return (
    <div className="whole-page">
      <h1>Welcome to Dog World! </h1>
      <button>Discover!</button>
      <Dog />
      <div className="container">
        <Gallery images={prevImages} />
      </div>
    </div>
  )
}

export default App;
